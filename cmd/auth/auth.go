package auth

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"net/url"
	"time"

	authv1 "github.com/hduhelp/api_open_sdk/gatewayapis/auth/v1"
	grpcclient "github.com/hduhelp/api_open_sdk/grpcClient"
	"github.com/hduhelp/hdu-cli/pkg/table"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"google.golang.org/protobuf/types/known/emptypb"
)

var Cmd = &cobra.Command{
	Use: "auth",
}

func init() {
	Cmd.AddCommand(loginCmd, logoutCmd, infoCmd)

	loginCmd.Flags().StringP("token", "t", "", "hduhelp token")
}

var loginCmd = &cobra.Command{
	Use: "login",
	Run: func(cmd *cobra.Command, args []string) {
		ctx := context.Background()
		argToken := cmd.Flags().Lookup("token").Value.String()
		if argToken != "" {
			tokenVerify(ctx, argToken)
			return
		}
		ln, err := net.Listen("tcp", ":11328")
		if err != nil {
			log.Fatalln(err)
		}
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			token := r.URL.Query().Get("auth")
			w.Write([]byte("login success, now return to cli"))
			tokenVerify(ctx, token)
			go func() {
				time.Sleep(time.Second)
				ln.Close()
			}()
		})
		loginUrl, _ := url.Parse("https://api.hduhelp.com/login/auto")
		loginUrl.RawQuery = url.Values{
			"clientID": {"dashboard"},
			"redirect": {"http://localhost:11328"},
		}.Encode()
		fmt.Println(loginUrl)
		http.Serve(ln, http.DefaultServeMux)
	},
}

func tokenVerify(ctx context.Context, token string) {
	client := authv1.NewAuthServiceClient(grpcclient.Conn(ctx))
	info, err := client.GetTokenInfo(grpcclient.WithToken(ctx, token), &emptypb.Empty{})
	if err != nil {
		log.Fatalln(err)
	}
	table.PrintStruct(info)
	viper.Set("auth.token", token)
	err = viper.WriteConfig()
	cobra.CheckErr(err)
}

var logoutCmd = &cobra.Command{
	Use: "logout",
	Run: func(cmd *cobra.Command, args []string) {
		viper.Set("auth.token", "")
		err := viper.WriteConfig()
		cobra.CheckErr(err)
		fmt.Println("logout success")
	},
}

var infoCmd = &cobra.Command{
	Use: "info",
	Run: func(cmd *cobra.Command, args []string) {
		ctx := context.Background()
		token := viper.GetString("auth.token")
		if token == "" {
			log.Fatalf("auth token not found")
		}
		client := authv1.NewAuthServiceClient(grpcclient.Conn(ctx))
		info, err := client.GetTokenInfo(grpcclient.WithToken(ctx, token), &emptypb.Empty{})
		if err != nil {
			fmt.Println(err)
		} else {
			table.PrintStruct(info)
		}
	},
}
