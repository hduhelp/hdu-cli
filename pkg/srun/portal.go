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

func (s *PortalServer) SetUsername(username string) error {
	if username == "" {
		return errors.New("username is empty")
	}
	s.username = username
	return nil
}

func (s *PortalServer) SetPassword(password string) error {
	if password == "" {
		return errors.New("password is empty")
	}
	s.password = password
	return nil
}

func (s *PortalServer) SetInternetCheckEndpoint(uri string) error {
	if _, err := url.ParseRequestURI(uri); err != nil {
		return err
	}
	s.internetCheck = uri
	return nil
}

type PortalServer struct {
	endPoint string
	// AcID NasID?
	acID          string
	jsonpCallback string

	internetCheck string

	username string
	password string

	timestampStr string

	userInfo       *userInfo
	challenge      *challenge
	loginResponse  *loginResponse
	logoutResponse *logoutResponse
}

func (s PortalServer) callback() string {
	return s.jsonpCallback
}

func (s *PortalServer) SetAcID(acID string) {
	s.acID = acID
}

func (s PortalServer) AcID() string {
	return s.acID
}

func (s PortalServer) apiUri(path string) *url.URL {
	uri, err := url.ParseRequestURI(s.endPoint + path)
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
