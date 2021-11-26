package srun

import (
	"fmt"
	"github.com/hduhelp/api_open_sdk/types"
	"github.com/parnurzeal/gorequest"
	"net/url"
)

func (p *PortalServer) GetUserInfo() (*userInfo, error) {
	reqUrl := p.apiUri("/cgi-bin/rad_user_info")
	reqUrl.RawQuery = url.Values{
		"callback": {p.callback()},
		"_":        {p.timestampStr},
	}.Encode()
	response := new(types.Jsonp)
	response.Data = new(userInfo)
	fmt.Println(reqUrl.String())
	_, body, errs := gorequest.New().Get(reqUrl.String()).End()
	if len(errs) != 0 {
		return nil, errs[0]
	}
	err := response.UnmarshalJSON([]byte(body))
	if err != nil {
		return nil, err
	}

	p.userInfo = response.Data.(*userInfo)
	return response.Data.(*userInfo), nil
}

type userInfo struct {
	ServerFlag        int64  `json:"ServerFlag"`          //服务器标识
	AddTime           int    `json:"add_time"`            //注册时间
	AllBytes          int    `json:"all_bytes"`           //总流量
	BillingName       string `json:"billing_name"`        //计费名称
	BytesIn           int    `json:"bytes_in"`            //流入流量
	BytesOut          int    `json:"bytes_out"`           //流出流量
	CheckoutDate      int    `json:"checkout_date"`       //结算日期
	Domain            string `json:"domain"`              //域名
	Error             string `json:"error"`               //错误信息
	GroupId           string `json:"group_id"`            //用户组ID
	KeepaliveTime     int    `json:"keepalive_time"`      //心跳时间
	OnlineDeviceTotal string `json:"online_device_total"` //在线设备总数
	OnlineIp          string `json:"online_ip"`           //在线IP
	OnlineIp6         string `json:"online_ip6"`          //在线IP6
	PackageId         string `json:"package_id"`          //套餐ID
	ProductsId        string `json:"products_id"`         //产品ID
	ProductsName      string `json:"products_name"`       //产品名称
	RealName          string `json:"real_name"`           //真实姓名
	RemainBytes       int    `json:"remain_bytes"`        //剩余流量
	RemainSeconds     int    `json:"remain_seconds"`      //剩余时间
	SumBytes          int64  `json:"sum_bytes"`           //总流量
	SumSeconds        int    `json:"sum_seconds"`         //总时间
	SystemVersion     string `json:"sysver"`              //系统版本
	UserBalance       int    `json:"user_balance"`        //用户余额
	UserCharge        int    `json:"user_charge"`         //用户消费
	UserMac           string `json:"user_mac"`            //用户MAC
	UserName          string `json:"user_name"`           //用户名
	WalletBalance     int    `json:"wallet_balance"`      //钱包余额
}
