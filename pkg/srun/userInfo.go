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
	ServerFlag        int64  `json:"ServerFlag" chinese:"服务器标识"`           //服务器标识
	AddTime           int    `json:"add_time" chinese:"注册时间"`              //注册时间
	AllBytes          int    `json:"all_bytes" chinese:"总流量"`              //总流量
	BillingName       string `json:"billing_name" chinese:"计费名称"`          //计费名称
	BytesIn           int    `json:"bytes_in" chinese:"流入流量"`              //流入流量
	BytesOut          int    `json:"bytes_out" chinese:"流出流量"`             //流出流量
	CheckoutDate      int    `json:"checkout_date" chinese:"结算日期"`         //结算日期
	Domain            string `json:"domain" chinese:"域名"`                  //域名
	Error             string `json:"error" chinese:"错误信息"`                 //错误信息
	GroupId           string `json:"group_id" chinese:"用户组ID"`             //用户组ID
	KeepaliveTime     int    `json:"keepalive_time" chinese:"心跳时间"`        //心跳时间
	OnlineDeviceTotal string `json:"online_device_total" chinese:"在线设备总数"` //在线设备总数
	OnlineIp          string `json:"online_ip" chinese:"在线IP"`             //在线IP
	OnlineIp6         string `json:"online_ip6" chinese:"在线IP6"`           //在线IP6
	PackageId         string `json:"package_id" chinese:"套餐ID"`            //套餐ID
	ProductsId        string `json:"products_id" chinese:"产品ID"`           //产品ID
	ProductsName      string `json:"products_name" chinese:"产品名称"`         //产品名称
	RealName          string `json:"real_name" chinese:"真实姓名"`             //真实姓名
	RemainBytes       int    `json:"remain_bytes" chinese:"剩余流量"`          //剩余流量
	RemainSeconds     int    `json:"remain_seconds" chinese:"剩余时间"`        //剩余时间
	SumBytes          int64  `json:"sum_bytes" chinese:"总流量"`              //总流量
	SumSeconds        int    `json:"sum_seconds" chinese:"总时间"`            //总时间
	SystemVersion     string `json:"sysver" chinese:"系统版本"`                //系统版本
	UserBalance       int    `json:"user_balance" chinese:"用户余额"`          //用户余额
	UserCharge        int    `json:"user_charge" chinese:"用户消费"`           //用户消费
	UserMac           string `json:"user_mac" chinese:"用户MAC"`             //用户MAC
	UserName          string `json:"user_name" chinese:"用户名"`              //用户名
	WalletBalance     int    `json:"wallet_balance" chinese:"钱包余额"`        //钱包余额
}
