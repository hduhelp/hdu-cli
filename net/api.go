package net

var baseHost = "https://api.github.com"

type Api struct {
	string
}

func NewApi(s string) *Api {
	return &Api{s}
}

var (
	// jsonp | 用户在线信息
	info = NewApi("/cgi-bin/rad_user_info")
	// jsonp | 用户认证 & 注销
	auth = NewApi("/cgi-bin/srun_portal")
	// jsonp | DM 下线 & 注销
	//loginDM = "/cgi-bin/rad_user_dm"
	// GET   | 微信扫码认证
	//authWechat = "/v1/srun_wechat_code"
	// jsonp | 手机短信认证
	//authSMSPhonestring = "/cgi-bin/srunmobile_portal"
	// GET   | 账号短信认证
	//authSMSAccount = "/v1/srun_portal_sms"
	// jsonp | 获取 Token
	//token = "/cgi-bin/get_challenge"
	// jsonp | 手机发送短信
	//vcodePhone = "/cgi-bin/srunmobile_vcode"
	// GET   | 账号发送短信
	//vcodeAccount = "/v1/srun_portal_sms_code"
	// GET   | 获取 Sign
	//sign = "/v1/srun_portal_sign"
	// GET   | 获取通知
	//notice = "/v2/srun_portal_message"
	// GET   | Portal 日志
	//log = "/v1/srun_portal_log"
	// GET   | 微信扫码认证单点登录
	//ssoWechat = "/v1/srun_wechat_barcode"
	// GET   | 单点登录
	//sso = "/v1/srun_portal_sso"
	// GET   | 获取最新协议
	//protocol = "/v1/srun_portal_agree_new"
	// POST  | 用户同意协议
	//agreeProtocol = "/v1/srun_portal_agree_bind"
	// GET   | 查询用户同意过哪些协议
	//userAgreed = "/v1/srun_portal_agrees"
	// GET   | 企业微信扫码链接
	//authWework = "/v1/srun_portal_wework"
	// GET   | 修改密码获取验证码
	//getPassVcode = "/v1/srun_portal_password_code"
	// POST  | 使用旧密码修改密码
	//changeByPass = "/v1/srun_portal_password_reset"
	// POST  | 使用验证码修改密码
	//changeByVcode = "/v1/srun_portal_password_forget"
	// POST  | Cisco 密码校验
	//ciscoCheck = "/v1/precheck_account"
	// GET   | 获取账号在线设备
	//getOnlineDevice = "/v1/srun_portal_online"
	// GET   | AC 多重定向
	//acDetect = "/v1/srun_portal_detect"
)
