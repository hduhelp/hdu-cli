package srun

import (
	"fmt"
	"github.com/parnurzeal/gorequest"
)

func (s *PortalServer) GetAcIDFromSrun() {
	req := gorequest.New().Get(s.endPoint)
	resp, _, errs := req.End()
	if errs != nil {
		fmt.Println(errs)
		return
	}
	s.acID = resp.Request.URL.Query().Get("ac_id")
}
