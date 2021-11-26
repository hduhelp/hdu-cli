package net

import (
	"fmt"
	"github.com/hduhelp/hdu_cli/pkg/srun"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"net/url"
	"time"
)

// Cmd represents the srun command
var Cmd = &cobra.Command{
	Use:   "net",
	Short: "i-hdu network auth cli",
	PersistentPreRun: func(cmd *cobra.Command, args []string) {
		_, err := url.ParseRequestURI(viper.GetString("net.endpoint"))
		cobra.CheckErr(err)
		portalServer = srun.New(viper.GetString("net.endpoint"), viper.GetString("net.acid"))
	},
}

var portalServer *srun.PortalServer

func init() {
	Cmd.PersistentFlags().StringP("endpoint", "e", "", "endpoint host of srun")
	viper.SetDefault("net.endpoint", "http://192.168.112.30")
	cobra.CheckErr(viper.BindPFlag("net.endpoint", Cmd.PersistentFlags().Lookup("endpoint")))

	Cmd.PersistentFlags().StringP("acid", "a", "", "ac_id of srun")
	viper.SetDefault("net.acid", "0")
	cobra.CheckErr(viper.BindPFlag("net.acid", Cmd.PersistentFlags().Lookup("acid")))

	loginCmd.Flags().StringP("username", "u", "", "username of srun")
	loginCmd.Flags().StringP("password", "p", "", "password of srun")
	loginCmd.Flags().BoolP("daemon", "d", false, "daemon mode")

	logoutCmd.Flags().StringP("username", "u", "", "username of srun")

	Cmd.AddCommand(infoCmd, loginCmd, logoutCmd)
}

// infoCmd represents the info command
var infoCmd = &cobra.Command{
	Use:   "info",
	Short: "show info of your i-hdu network",
	Run: func(cmd *cobra.Command, args []string) {
		info, err := portalServer.GetUserInfo()
		fmt.Println(info, err)
	},
}

// loginCmd represents the login command
var loginCmd = &cobra.Command{
	Use:   "login",
	Short: "login i-hdu of the account",
	Run: func(cmd *cobra.Command, args []string) {
		cobra.CheckErr(viper.BindPFlag("net.auth.username", cmd.Flags().Lookup("username")))
		cobra.CheckErr(viper.BindPFlag("net.auth.password", cmd.Flags().Lookup("password")))
		cobra.CheckErr(viper.BindPFlag("net.auth.daemon", cmd.Flags().Lookup("daemon")))

		cobra.CheckErr(portalServer.SetUsername(viper.GetString("net.auth.username")))
		cobra.CheckErr(portalServer.SetPassword(viper.GetString("net.auth.password")))

		challenge, err := portalServer.GetChallenge()
		cobra.CheckErr(err)
		fmt.Println(challenge, err)
		loginResponse, err := portalServer.PortalLogin()
		cobra.CheckErr(err)
		fmt.Println(loginResponse, err)

		if viper.GetBool("net.auth.daemon") {
			for {
				challenge, err := portalServer.GetChallenge()
				cobra.CheckErr(err)
				fmt.Println(challenge, err)
				loginResponse, err := portalServer.PortalLogin()
				cobra.CheckErr(err)
				fmt.Println(loginResponse, err)
				time.Sleep(time.Second * 60)
			}
		}
	},
}

// logoutCmd represents the logout command
var logoutCmd = &cobra.Command{
	Use:   "logout",
	Short: "logout i-hdu of the account",
	Run: func(cmd *cobra.Command, args []string) {
		cobra.CheckErr(viper.BindPFlag("net.auth.username", cmd.Flags().Lookup("username")))
		cobra.CheckErr(portalServer.SetUsername(viper.GetString("net.auth.username")))

		challenge, err := portalServer.GetChallenge()
		fmt.Println(challenge, err)
		logoutResponse, err := portalServer.PortalLogout()
		fmt.Println(logoutResponse, err)
	},
}
