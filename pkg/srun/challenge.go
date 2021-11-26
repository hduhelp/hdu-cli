package srun

import (
	"errors"
	"github.com/hduhelp/api_open_sdk/types"
	"github.com/parnurzeal/gorequest"
	"github.com/spf13/viper"
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

	p.challenge = response.Data.(*challenge)
	return response.Data.(*challenge), nil
}

type challenge struct {
	Challenge   string `json:"challenge" chinese:"随机数 Token"` //随机数 Token
	ClientIP    string `json:"client_ip" chinese:"客户端IP"`     //客户端IP
	ErrorCode   int    `json:"ecode" chinese:"错误码"`           //错误码
	Error       string `json:"error" chinese:"错误信息"`          //错误信息
	ErrorMsg    string `json:"error_msg" chinese:"错误信息"`      //错误信息
	Expire      string `json:"expire" chinese:"过期时间 秒"`       //过期时间 秒
	OnlineIp    string `json:"online_ip" chinese:"在线IP"`      //在线IP
	Res         string `json:"res" chinese:"返回结果"`            //返回结果
	SrunVersion string `json:"srun_ver" chinese:"版本号"`        //版本号
	Timestamp   int64  `json:"st" chinese:"时间戳"`              //时间戳
}

func (r challenge) IsOK() (bool, error) {
	if r.Error != "ok" {
		return false, errors.New(r.ErrorMsg)
	}
	return true, nil
}
