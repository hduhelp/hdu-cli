package srun

import (
	"fmt"
	"github.com/parnurzeal/gorequest"
	"net/url"
)

// Internet 通过Http请求是否被302到 srun登陆地址 来判断是否能访问互联网
func (s PortalServer) Internet() bool {
	reqUrl, _ := url.ParseRequestURI(s.internetCheck)
	resp, _, errs := gorequest.New().Get(reqUrl.String()).End()
	if errs != nil {
		fmt.Println(errs)
		return false
	}
	if resp.Request.URL.Hostname() == reqUrl.Hostname() {
		return true
	}
	return false
}
