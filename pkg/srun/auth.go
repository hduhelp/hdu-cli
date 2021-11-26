package srun

import (
	"encoding/json"
	"errors"
	"github.com/hduhelp/api_open_sdk/types"
	"github.com/hduhelp/hdu_cli/utils"
	"github.com/parnurzeal/gorequest"
	"github.com/spf13/viper"
	"net/url"
	"strconv"
	"time"
)

func (p *PortalServer) PortalLogin() (*loginResponse, error) {
	reqUrl := p.apiUri("/cgi-bin/srun_portal")
	reqUrl.RawQuery = url.Values{
		"callback": {p.callback()},
		"action":   {"login"},
		"username": {p.username},
		"password": {"{MD5}" + p.passwordMD5()},
		"os":       {"Windows 10"},
		"name":     {"Windows"},
		// 未开启双栈认证，参数为 0
		// 开启双栈认证，向 Portal 当前页面 IP 认证时，参数为 1
		// 开启双栈认证，向 Portal 另外一种 IP 认证时，参数为 0
		"double_stack": {"0"},
		"chksum":       {p.checkSum()},
		"info":         {p.encryptedUserInfo()},
		"ac_id":        {p.AcID()},
		"ip":           {p.ClientIP()},
		"n":            {"200"},
		"type":         {"1"},
		"_":            {p.timestampStr},
	}.Encode()
	response := new(types.Jsonp)
	response.Data = new(loginResponse)
	if viper.GetBool("verbose") {
		println(reqUrl.String())
	}
	_, body, errs := gorequest.New().Get(reqUrl.String()).End()

	if len(errs) != 0 {
		return nil, errs[0]
	}
	err := response.UnmarshalJSON([]byte(body))
	if err != nil {
		return nil, err
	}

	p.loginResponse = response.Data.(*loginResponse)
	return response.Data.(*loginResponse), nil
}

type loginResponse struct {
	ClientIp    string      `json:"client_ip" chinese:"客户端IP"` //客户端IP
	ErrorCode   interface{} `json:"ecode" chinese:"错误码"`       //错误码
	Error       string      `json:"error" chinese:"错误信息"`      //错误信息
	ErrorMsg    string      `json:"error_msg" chinese:"错误信息"`  //错误信息
	OnlineIp    string      `json:"online_ip" chinese:"在线IP"`  //在线IP
	Res         string      `json:"res" chinese:"返回结果"`        //返回结果
	SrunVersion string      `json:"srun_ver" chinese:"版本号"`    //版本号
	Timestamp   int64       `json:"st" chinese:"时间戳"`          //时间戳
}

func (r loginResponse) IsOK() (bool, error) {
	if r.Error != "ok" {
		return false, errors.New(r.ErrorMsg)
	}
	return true, nil
}

func (p PortalServer) encryptedUserInfo() string {
	info := map[string]string{
		"username": p.username,
		"password": p.password,
		"ip":       p.ClientIP(),
		"acid":     p.AcID(),
		"enc_ver":  "srun_bx1", //用户信息
	}
	jsonB, _ := json.Marshal(info)
	return "{SRBX1}" + IHDUEncoding.EncodeToString(XEncode(string(jsonB), p.token()))
}

func (p PortalServer) checkSum() string {
	str := p.token() + p.username
	str += p.token() + p.passwordMD5()
	str += p.token() + p.AcID()
	str += p.token() + p.ClientIP()
	str += p.token() + "200" //n
	str += p.token() + "1"   //type
	str += p.token() + p.encryptedUserInfo()
	return utils.Sha1(str)
}

func (p PortalServer) token() string {
	if p.challenge.Challenge == "" {
		panic("get challenge error")
	}
	return p.challenge.Challenge
}

func (p PortalServer) passwordMD5() string {
	return utils.EncodeMD5(p.password, p.token())
}

func (p *PortalServer) PortalLogout() (*logoutResponse, error) {
	reqUrl := p.apiUri("/cgi-bin/rad_user_dm")

	timeStr := strconv.FormatInt(time.Now().Unix(), 10)
	sign := utils.Sha1(timeStr + p.username + p.ClientIP() + "1" + timeStr)

	reqUrl.RawQuery = url.Values{
		"callback": {p.callback()},
		"ip":       {p.ClientIP()},
		"username": {p.username},
		"time":     {timeStr},
		"unbind":   {"1"},
		"sign":     {sign},
		"_":        {p.timestampStr},
	}.Encode()

	response := new(types.Jsonp)
	response.Data = new(logoutResponse)
	if viper.GetBool("verbose") {
		println(reqUrl.String())
	}
	_, body, errs := gorequest.New().Get(reqUrl.String()).End()

	if len(errs) != 0 {
		return nil, errs[0]
	}
	err := response.UnmarshalJSON([]byte(body))
	if err != nil {
		return nil, err
	}

	p.logoutResponse = response.Data.(*logoutResponse)
	return response.Data.(*logoutResponse), nil
}

type logoutResponse struct {
	ClientIp  string      `json:"client_ip"`
	ErrorCode interface{} `json:"ecode"`
	Error     string      `json:"error"`
	ErrorMsg  string      `json:"error_msg"`
	OnlineIp  string      `json:"online_ip"`
	Res       string      `json:"res"`
	SrunVer   string      `json:"srun_ver"`
	St        int         `json:"st"`
}

func (r logoutResponse) IsOK() (bool, error) {
	if r.Error != "ok" {
		return false, errors.New(r.ErrorMsg)
	}
	return true, nil
}
