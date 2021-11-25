package srun

import (
	"errors"
	"net/url"
	"strconv"
	"time"
)

func New(endpoint, acID string) *PortalServer {
	return &PortalServer{
		endPoint:     endpoint,
		acID:         acID,
		timestampStr: strconv.FormatInt(time.Now().UnixNano(), 10),
	}
}

func (p *PortalServer) SetUsername(username string) error {
	if username == "" {
		return errors.New("username is empty")
	}
	p.username = username
	return nil
}

func (p PortalServer) SetPassword(password string) error {
	if password == "" {
		return errors.New("password is empty")
	}
	p.password = password
	return nil
}

type PortalServer struct {
	endPoint string
	// AcID NasID?
	acID string

	username string
	password string

	timestampStr string

	userInfo       *userInfo
	challenge      *challenge
	loginResponse  *loginResponse
	logoutResponse *logoutResponse
}

func (p PortalServer) callback() string {
	return "jQuery112403771213770126085_" + p.timestampStr
}

func (p *PortalServer) SetAcID(acID string) {
	p.acID = acID
}

func (p PortalServer) AcID() string {
	return p.acID
}

func (p PortalServer) apiUri(path string) *url.URL {
	uri, err := url.ParseRequestURI(p.endPoint + path)
	if err != nil {
		panic("endpoint uri error")
	}
	return uri
}