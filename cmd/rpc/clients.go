package rpc

import (
	"context"
	"fmt"
	"github.com/hduhelp/hdu-cli/pkg/table"
	"github.com/spf13/viper"
	"google.golang.org/protobuf/types/known/emptypb"

	healthv1 "github.com/hduhelp/api_open_sdk/campusapis/health/v1"
	libraryv1 "github.com/hduhelp/api_open_sdk/campusapis/library/v1"
	schooltimev1 "github.com/hduhelp/api_open_sdk/campusapis/schoolTime/v1"
	staffv1 "github.com/hduhelp/api_open_sdk/campusapis/staff/v1"
	teachingv1 "github.com/hduhelp/api_open_sdk/campusapis/teaching/v1"
	authv1 "github.com/hduhelp/api_open_sdk/gatewayapis/auth/v1"
	grpcclient "github.com/hduhelp/api_open_sdk/grpcClient"
	"gopkg.in/yaml.v2"
	"reflect"
)

var clients = make(map[string]any)

var methods = make(map[string][]string)

func registerClient(client any) {
	t := reflect.TypeOf(client) // get the type of the client
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

func listMethodsByServiceName(n string) {
	fmt.Println(n)
	printJson(methods[n])
}

func listMethods() {
	printJson(methods)
}

// execMethod execute the method of the client
// todo: fix the bug of zero value
func execMethod(service string, method string, args ...string) {
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
	if token := viper.GetString("auth.token"); token == "" {
		fmt.Println("No Auth Token")
	} else {
		ctx := grpcclient.WithToken(context.Background(), token)
		result := methodF.Call([]reflect.Value{
			reflect.ValueOf(ctx),
			reqValue,
		})
		if result[0].Interface() != nil {
			panic("error: result find nil")
		} else {
			table.PrintStruct(result[0].Interface())
			fmt.Println(result[1])
		}
	}
}
