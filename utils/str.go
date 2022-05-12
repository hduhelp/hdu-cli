package utils

import (
	"crypto/hmac"
	"crypto/md5"
	"crypto/sha1"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"io"
)

func B64encode(content string) string {
	return base64.StdEncoding.EncodeToString([]byte(content))
}

func B64decode(content string) (string, error) {
	data, err := base64.StdEncoding.DecodeString(content)
	if err != nil {
		return "", err
	}
	return string(data), nil
}

func Sha1(content string) string {
	h := sha1.New()
	h.Write([]byte(content))
	bs := h.Sum(nil)
	return fmt.Sprintf("%x", bs)
}

func Md5(content string) string {
	w := md5.New()
	_, _ = io.WriteString(w, content)
	return fmt.Sprintf("%x", w.Sum(nil))
}

func EncodeMD5(data, key string) string {
	mac := hmac.New(md5.New, []byte(key))
	mac.Write([]byte(data))
	return hex.EncodeToString(mac.Sum(nil))
}

// In method is find if the string is in the array.
func In(s string, ss []string) bool {
	for _, v := range ss {
		if s == v {
			return true
		}
	}
	return false
}
