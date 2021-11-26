package srun

import (
	"errors"
	"net/url"
	"strconv"
	"time"
)

func New(endpoint, acID string) *PortalServer {
	timestampStr := strconv.FormatInt(time.Now().UnixNano(), 10)
	return &PortalServer{
		endPoint:      endpoint,
		acID:          acID,
		jsonpCallback: "jQuery112403771213770126085_" + timestampStr,
		timestampStr:  timestampStr,
	}
}

func (p *PortalServer) SetUsername(username string) error {
	if username == "" {
		return errors.New("username is empty")
	}
	p.username = username
	return nil
}

func (p *PortalServer) SetPassword(password string) error {
	if password == "" {
		return errors.New("password is empty")
	}
	p.password = password
	return nil
}

type PortalServer struct {
	endPoint string
	// AcID NasID?
	acID          string
	jsonpCallback string

	username string
	password string

	timestampStr string

	userInfo       *userInfo
	challenge      *challenge
	loginResponse  *loginResponse
	logoutResponse *logoutResponse
}

func (p PortalServer) callback() string {
	return p.jsonpCallback
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

type ResponseError struct {
	ErrorCode interface{} `json:"ecode" chinese:"错误码"`      //错误码
	Error     string      `json:"error" chinese:"错误信息"`     //错误信息
	ErrorMsg  string      `json:"error_msg" chinese:"错误信息"` //错误信息
}

func (e ResponseError) IsOK() (bool, error) {
	if e.Error != "ok" {
		return false, errors.New(e.ErrorMsg)
	}
	return true, nil
}
