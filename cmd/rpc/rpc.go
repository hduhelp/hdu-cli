package rpc

import (
	"context"
	"fmt"
	"reflect"
	"sort"

	healthv1 "github.com/hduhelp/api_open_sdk/campusapis/health/v1"
	libraryv1 "github.com/hduhelp/api_open_sdk/campusapis/library/v1"
	schooltimev1 "github.com/hduhelp/api_open_sdk/campusapis/schoolTime/v1"
	staffv1 "github.com/hduhelp/api_open_sdk/campusapis/staff/v1"
	teachingv1 "github.com/hduhelp/api_open_sdk/campusapis/teaching/v1"
	authv1 "github.com/hduhelp/api_open_sdk/gatewayapis/auth/v1"
	grpcclient "github.com/hduhelp/api_open_sdk/grpcClient"
	"github.com/hduhelp/hdu-cli/pkg/table"
	"github.com/manifoldco/promptui"
	"github.com/samber/lo"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"google.golang.org/protobuf/types/known/emptypb"
	"gopkg.in/yaml.v2"
)

var Cmd = &cobra.Command{
	Use: "rpc",
}

func init() {
	Cmd.AddCommand(listCmd, runCmd)
}

var listCmd = &cobra.Command{
	Use: "list",
	Run: func(cmd *cobra.Command, args []string) {
		listMethods()
	},
}

var clients = make(map[string]any)

var methods = make(map[string][]string)

func registerClient(client any) {
	t := reflect.TypeOf(client)
	m := make([]string, 0)
	for i := 0; i < t.Out(0).NumMethod(); i++ {
		m = append(m, t.Out(0).Method(i).Name)
	}
	methods[t.Out(0).String()] = m
}

var clientRegisters = []any{
	authv1.NewAuthServiceClient,
	staffv1.NewCampusServiceClient,
	teachingv1.NewTeachingServiceClient,
	healthv1.NewHealthServiceClient,
	schooltimev1.NewSchoolTimeServiceClient,
	libraryv1.NewLibraryServiceClient,
}

func initMethods() {
	for _, client := range clientRegisters {
		registerClient(client)
	}
}

func listMethods() {
	initMethods()
	printJson(methods)
}

func printJson(in any) {
	b, _ := yaml.Marshal(in)
	fmt.Println(string(b))
}

func newClient(service string) reflect.Value {
	conn := grpcclient.Conn(context.Background())
	for _, client := range clientRegisters {
		if reflect.TypeOf(client).Out(0).String() == service {
			f := reflect.ValueOf(client)
			resultValues := f.Call([]reflect.Value{reflect.ValueOf(conn)})
			return resultValues[0]
		}
	}
	return reflect.Value{}
}

var runCmd = &cobra.Command{
	Use: "run",
	Run: func(cmd *cobra.Command, args []string) {
		initMethods()
		serviceList := lo.Keys(methods)
		sort.Strings(serviceList)
		prompt := promptui.Select{
			Label: "Select service",
			Items: serviceList,
		}
		_, service, err := prompt.Run()

		if err != nil {
			fmt.Printf("Prompt failed %v\n", err)
			return
		}
		prompt = promptui.Select{
			Label: "Select method",
			Items: methods[service],
		}
		_, method, err := prompt.Run()
		fmt.Printf("You choose %s %s\n", service, method)
		client := newClient(service)
		methodF := client.MethodByName(method)
		req := methodF.Type().In(1)
		var reqValue reflect.Value
		if req.String() == reflect.TypeOf(&emptypb.Empty{}).String() {
			reqValue = reflect.ValueOf(&emptypb.Empty{})
		} else {
			reqValue = reflect.New(req.Elem())
			// fmt.Println("please input values as json")
			// reader := bufio.NewReader(os.Stdin)
			// text, _ := reader.ReadString('\n')
			// err = json.Unmarshal([]byte(text), reqValue.Interface())
			// if err != nil {
			// 	panic(err)
			// }
		}
		fmt.Println(reqValue)
		ctx := grpcclient.WithToken(context.Background(), viper.GetString("auth.token"))
		result := methodF.Call([]reflect.Value{
			reflect.ValueOf(ctx),
			reqValue,
		})
		table.PrintStruct(result[0].Interface())
		fmt.Println(result[1])
	},
}
