package srun

import (
	"fmt"
	"github.com/hduhelp/api_open_sdk/types"
	"github.com/parnurzeal/gorequest"
	"net/url"
)

func (p *PortalServer) GetChallenge() (*challenge, error) {
	reqUrl := p.apiUri("/cgi-bin/get_challenge")
	reqUrl.RawQuery = url.Values{
		"callback": {p.callback()},
		"username": {p.username},
		//"ip":       {p.ClientIP()},
		"_": {p.timestampStr},
	}.Encode()
	response := new(types.Jsonp)
	response.Data = new(challenge)
	fmt.Println(reqUrl.String())
	_, body, errs := gorequest.New().Get(reqUrl.String()).End()
	if len(errs) != 0 {
		return nil, errs[0]
	}
	err := response.UnmarshalJSON([]byte(body))
	if err != nil {
		return nil, err
	}

	p.challenge = response.Data.(*challenge)
	return response.Data.(*challenge), nil
}

func (p PortalServer) ClientIP() string {
	// 双栈认证时 IP 参数为空
	return p.challenge.ClientIP
}

type challenge struct {
	Challenge   string `json:"challenge"` //随机数
	ClientIP    string `json:"client_ip"` //客户端IP
	ErrorCode   int    `json:"ecode"`     //错误码
	Error       string `json:"error"`     //错误信息
	ErrorMsg    string `json:"error_msg"` //错误信息
	Expire      string `json:"expire"`    //过期时间 秒
	OnlineIp    string `json:"online_ip"` //在线IP
	Res         string `json:"res"`       //返回结果
	SrunVersion string `json:"srun_ver"`  //版本号
	Timestamp   int64  `json:"st"`        //时间戳
}
