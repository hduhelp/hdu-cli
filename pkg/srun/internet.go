package srun

import (
	"github.com/parnurzeal/gorequest"
	"log"
	"net/http"
	"net/url"
)

// Internet 通过Http请求是否被302到 srun登陆地址 来判断是否能访问互联网
func (s PortalServer) Internet() bool {
	connect := true
	reqUrl, _ := url.ParseRequestURI(s.internetCheck)
	_, _, errs := gorequest.New().Get(reqUrl.String()).
		RedirectPolicy(func(req gorequest.Request, via []gorequest.Request) error {
			connect = req.URL.Hostname() != reqUrl.Hostname()
			return http.ErrUseLastResponse
		}).End()
	if errs != nil || len(errs) != 0 {
		log.Printf("Internet check failed: %v", errs)
		connect = false
	}
	return connect
}
