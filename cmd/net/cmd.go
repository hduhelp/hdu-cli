package net

import (
	"fmt"
	"github.com/hduhelp/hdu_cli/pkg/srun"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// Cmd represents the srun command
var Cmd = &cobra.Command{
	Use:   "net",
	Short: "ihdu network auth cli",
	PersistentPreRun: func(cmd *cobra.Command, args []string) {
		portalServer = srun.New(viper.GetString("net.endpoint"), viper.GetString("net.acid"))
	},
}

var portalServer *srun.PortalServer

func init() {
	Cmd.PersistentFlags().StringP("endpoint", "e", "", "endpoint host of srun")
	viper.SetDefault("net.endpoint", "http://192.168.112.30")

	Cmd.PersistentFlags().StringP("acid", "a", "", "ac_id of srun")
	viper.SetDefault("net.acid", "0")

	loginCmd.PersistentFlags().StringP("username", "u", "", "username of srun")
	loginCmd.PersistentFlags().StringP("password", "p", "", "password of srun")
	loginCmd.PersistentFlags().BoolP("daemon", "d", false, "daemon mode")

	logoutCmd.PersistentFlags().StringP("username", "u", "", "username of srun")

	cobra.CheckErr(viper.BindPFlag("net.endpoint", Cmd.PersistentFlags().Lookup("endpoint")))
	cobra.CheckErr(viper.BindPFlag("net.acid", Cmd.PersistentFlags().Lookup("acid")))
	cobra.CheckErr(viper.BindPFlag("net.auth.username", Cmd.PersistentFlags().Lookup("username")))
	cobra.CheckErr(viper.BindPFlag("net.auth.password", Cmd.PersistentFlags().Lookup("password")))

	Cmd.AddCommand(infoCmd, loginCmd, logoutCmd)
}

// infoCmd represents the info command
var infoCmd = &cobra.Command{
	Use:   "info",
	Short: "show info of your srun network",
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
		cobra.CheckErr(portalServer.SetUsername(viper.GetString("net.auth.username")))
		cobra.CheckErr(portalServer.SetPassword(viper.GetString("net.auth.password")))

		challenge, err := portalServer.GetChallenge()
		cobra.CheckErr(err)
		fmt.Println(challenge, err)
		loginResponse, err := portalServer.PortalLogin()
		cobra.CheckErr(err)
		fmt.Println(loginResponse, err)
	},
}

// logoutCmd represents the logout command
var logoutCmd = &cobra.Command{
	Use:   "logout",
	Short: "logout i-hdu of the account",
	Run: func(cmd *cobra.Command, args []string) {
		cobra.CheckErr(portalServer.SetUsername(viper.GetString("net.login.username")))

		challenge, err := portalServer.GetChallenge()
		fmt.Println(challenge, err)
		logoutResponse, err := portalServer.PortalLogout()
		fmt.Println(logoutResponse, err)
	},
}
