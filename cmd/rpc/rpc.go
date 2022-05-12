package rpc

import (
	"fmt"
	"github.com/hduhelp/hdu-cli/utils"
	"github.com/spf13/viper"
	"sort"

	"github.com/manifoldco/promptui"
	"github.com/samber/lo"
	"github.com/spf13/cobra"
)

var Cmd = &cobra.Command{
	Use: "rpc",
}

func init() {
	Cmd.AddCommand(listCmd, runCmd, execCmd)
}

var listCmd = &cobra.Command{
	Use:   "list [optional service name]",
	Short: "list rpc commands what you can select when exec",
	Run: func(cmd *cobra.Command, args []string) {
		initMethods() // init methods
		if len(args) == 0 {
			listMethods()
		} else {
			// if funcation is too many.
			listMethodsByServiceName(args[0])
		}
	},
}

var execCmd = &cobra.Command{
	Use:   "exec service_name method_name",
	Short: "execute rpc command (Pure Command Mode)",
	Run: func(cmd *cobra.Command, args []string) {
		initMethods()
		service := args[0]
		method := args[1]
		if utils.In(method, methods[service]) {
			execMethod(service, method)
		} else {
			fmt.Println("service or method not found")
		}
	},
}

// authCmd set tokens for your rpc.
var authCmd = &cobra.Command{
	Use:   "auth your_token",
	Short: "auth rpc command (Pure Command Mode)",
	Run: func(cmd *cobra.Command, args []string) {
		// todo: auth // need re-design
		if viper.GetString("auth.token") == "" {
			if viper.WriteConfig() != nil {
				viper.Set("auth.token", args[0])
				cobra.CheckErr(viper.SafeWriteConfig())
			}
		} else {
			fmt.Println("token already set")
		}
	},
}

var runCmd = &cobra.Command{
	Use:   "run",
	Short: "execute rpc command (User Friendly interface)",
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
		execMethod(service, method) // the execution process code is so long.So I put it in a function.
	},
}
