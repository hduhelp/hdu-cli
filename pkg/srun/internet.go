package srun

import (
	"github.com/parnurzeal/gorequest"
	"net/http"
	"net/url"
)

// Internet 通过Http请求是否被302到 srun登陆地址 来判断是否能访问互联网
func (s PortalServer) Internet() bool {
	redirected := false
	reqUrl, _ := url.ParseRequestURI(s.internetCheck)
	gorequest.New().Get(reqUrl.String()).
		RedirectPolicy(func(req gorequest.Request, via []gorequest.Request) error {
			redirected = req.URL.Hostname() != reqUrl.Hostname()
			return http.ErrUseLastResponse
		}).End()
	return redirected
}
