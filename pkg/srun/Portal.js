"use strict";

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
        }));
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}

var _api = new WeakMap();

var _onlineInfoMap = new WeakMap();

var _clientTypeHandle = new WeakMap();

var _checkWechatSSO = new WeakMap();

var _checkSSO = new WeakMap();

var _selectDefaultLang = new WeakMap();

var _logoutDm = new WeakMap();

var _logoutNormal = new WeakMap();

var _request = new WeakMap();

var _getUserDevice = new WeakMap();

var _encodeUserInfo = new WeakMap();

var _getToken = new WeakMap();

var _getSign = new WeakMap();

var _createNoticeList = new WeakMap();

var _createAuthQr = new WeakMap();

var _polling = new WeakMap();

var _createWeworkQr = new WeakMap();

var _checkProtStatus = new WeakMap();

var _loginCisco = new WeakMap();

var _loginOtp = new WeakMap();

var _loginAccount = new WeakMap();

var _loginAccountSMS = new WeakMap();

var _loginPhoneSMS = new WeakMap();

var _loginWechat = new WeakMap();

var _sendVcodePhone = new WeakMap();

var _sendVcodeAccount = new WeakMap();

var _setPortalInfo = new WeakMap();

var _showInfo = new WeakMap();

var _getAgentDialLog = new WeakMap();

var _panelPay = new WeakMap();

/**
 * Portal
 * @class
 * @author xr@srun.com
 */
var Portal = /*#__PURE__*/function (_Utils) {
    _inherits(Portal, _Utils);

    var _super = _createSuper(Portal);

    /**
     * 成功回调函数
     * @callback Success
     * @param   {Object}    res             请求操作失败响应参数
     */

    /**
     * 失败回调函数
     * @callback Error
     * @param   {Object}    res             请求操作成功响应参数
     */

    // ************************************************** Constructor ************************************************** //

    /**
     * 构造函数
     * @constructs Portal
     * @param   {Object}    config          Portal 配置
     */
    function Portal(config) {
        var _this;

        var requestHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Portal);

        _this = _super.call(this); // 使用确认框组件

        _defineProperty(_assertThisInitialized(_this), "ajax", {
            get: function get(obj) {
                obj.type = 'GET';

                _classPrivateFieldGet(_assertThisInitialized(_this), _request).call(_assertThisInitialized(_this), obj);
            },
            post: function post(obj) {
                obj.type = 'POST';
                obj.dataType = 'json';

                _classPrivateFieldGet(_assertThisInitialized(_this), _request).call(_assertThisInitialized(_this), obj);
            },
            jsonp: function jsonp(obj) {
                obj.type = 'GET';
                obj.dataType = 'jsonp';

                _classPrivateFieldGet(_assertThisInitialized(_this), _request).call(_assertThisInitialized(_this), obj);
            }
        });

        _api.set(_assertThisInitialized(_this), {
            writable: true,
            value: {
                // jsonp | 用户在线信息
                info: '/cgi-bin/rad_user_info',
                // jsonp | 用户认证 & 注销
                auth: '/cgi-bin/srun_portal',
                // jsonp | DM 下线 & 注销
                loginDM: '/cgi-bin/rad_user_dm',
                // GET   | 微信扫码认证
                authWechat: '/v1/srun_wechat_code',
                // jsonp | 手机短信认证
                authSMSPhone: '/cgi-bin/srunmobile_portal',
                // GET   | 账号短信认证
                authSMSAccount: '/v1/srun_portal_sms',
                // jsonp | 获取 Token
                token: '/cgi-bin/get_challenge',
                // jsonp | 手机发送短信
                vcodePhone: '/cgi-bin/srunmobile_vcode',
                // GET   | 账号发送短信
                vcodeAccount: '/v1/srun_portal_sms_code',
                // GET   | 获取 Sign
                sign: '/v1/srun_portal_sign',
                // GET   | 获取通知
                notice: '/v2/srun_portal_message',
                // GET   | Portal 日志
                log: '/v1/srun_portal_log',
                // GET   | 微信扫码认证单点登录
                ssoWechat: '/v1/srun_wechat_barcode',
                // GET   | 单点登录
                sso: '/v1/srun_portal_sso',
                // GET   | 获取最新协议
                protocol: '/v1/srun_portal_agree_new',
                // POST  | 用户同意协议
                agreeProtocol: '/v1/srun_portal_agree_bind',
                // GET   | 查询用户同意过哪些协议
                userAgreed: '/v1/srun_portal_agrees',
                // GET   | 企业微信扫码链接
                authWework: '/v1/srun_portal_wework',
                // GET   | 修改密码获取验证码
                getPassVcode: '/v1/srun_portal_password_code',
                // POST  | 使用旧密码修改密码
                changeByPass: '/v1/srun_portal_password_reset',
                // POST  | 使用验证码修改密码
                changeByVcode: '/v1/srun_portal_password_forget',
                // POST  | Cisco 密码校验
                ciscoCheck: '/v1/precheck_account',
                // GET   | 获取账号在线设备
                getOnlineDevice: '/v1/srun_portal_online',
                // GET   | AC 多重定向
                acDetect: '/v1/srun_portal_detect'
            }
        });

        _onlineInfoMap.set(_assertThisInitialized(_this), {
            writable: true,
            value: function () {
                var arr = [['username', {
                    id: 'username',
                    field: 'username',
                    label: 'Username'
                }], ['realname', {
                    id: 'realname',
                    field: 'realname',
                    label: 'Realname'
                }], ['usedFlow', {
                    id: 'used-flow',
                    field: 'usedFlow',
                    label: 'UsedFlow'
                }], ['usedTime', {
                    id: 'used-time',
                    field: 'usedTime',
                    label: 'UsedTime'
                }], ['balance', {
                    id: 'balance',
                    field: 'balance',
                    label: 'Balance'
                }], ['ipv4', {
                    id: 'ipv4',
                    field: 'ip',
                    label: 'Ipv4'
                }], ['productName', {
                    id: 'product-name',
                    field: 'productName',
                    label: 'ProductName'
                }], ['billingName', {
                    id: 'billing-name',
                    field: 'billingName',
                    label: 'BillingName'
                }], ['mac', {
                    id: 'user-mac',
                    field: 'mac',
                    label: 'Mac'
                }], ['domain', {
                    id: 'user-domain',
                    field: 'domain',
                    label: 'Domain'
                }], ['deviceTotal', {
                    id: 'device-total',
                    field: 'deviceTotal',
                    label: 'DeviceTotal'
                }]];
                var map = new Map();
                arr.forEach(function (item) {
                    map.set(item[0], item[1]);
                });
                return map;
            }()
        });

        _clientTypeHandle.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(str) {
                if (str === '0') return _this.translate('ClientType0');
                if (str === '1') return _this.translate('ClientType1');
                if (str === '2') return _this.translate('ClientType2');
                if (str === '3') return _this.translate('ClientType3');
                if (str === '4') return _this.translate('ClientType4');
                if (str === '5') return _this.translate('ClientType5');
                if (str === '6') return _this.translate('ClientType6');
                if (str === '7') return _this.translate('ClientType7');
                if (str === '8') return _this.translate('ClientType8');
                if (str === '9') return _this.translate('ClientType9');
                if (str === '10') return _this.translate('ClientType10');
                if (str === '11') return _this.translate('ClientType11');
            }
        });

        _checkWechatSSO.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).ssoWechat,
                    params: {
                        code: _this.getUrlParams('code'),
                        state: _this.getUrlParams('state')
                    },
                    success: function success(res) {
                        return location.href = location.origin;
                    },
                    error: function error(res) {
                        return _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _checkSSO.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).sso + location.search,
                    success: function success(res) {
                        return location.href = res.Redirect || "./srun_portal_success?ac_id=".concat(res.ID);
                    },
                    error: function error(res) {
                        return _this.confirm({
                            message: _this.translate(res),
                            confirm: function confirm() {
                                return _this.toIndex();
                            }
                        });
                    }
                });
            }
        });

        _selectDefaultLang.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                // 获取浏览器的默认语言
                var lang = navigator.language || navigator.userLanguage; // 判断浏览器默认语言是否在支持范围内

                var isSupport = Boolean(Object.keys(translate).find(function (item) {
                    return item.toLocaleLowerCase() === lang.toLocaleLowerCase();
                })); // 若不支持浏览器默认语言，则使用 conf 中配置的默认语言

                if (!isSupport) lang = _this.config.lang; // 若支持浏览器默认语言，则使用当前选择的语言

                if (isSupport) lang = _this.getCookie('lang'); // 判断浏览器是否修改了默认语言

                if (_this.getCookie('lang') && lang.substring(0, 2) !== _this.getCookie('lang').substring(0, 2)) _this.delCookie('lang'); // 浏览器默认语言为英文，修改 portal 的默认语言

                if (!_this.getCookie('lang') && lang.indexOf('en') !== -1) _this.portalInfo.lang = 'en-US';
                if (!_this.getCookie('lang') && lang.indexOf('zh') !== -1) _this.portalInfo.lang = 'zh-CN'; // $('#change-lang').val(this.portalInfo.lang);
                // 使用 cookie 保存浏览器的默认语言，用于判断浏览器默认语言是否该改变，并且使页面指只刷新一次

                if (!_this.getCookie('lang')) {
                    _this.changeLang(_this.portalInfo.lang);

                    document.cookie = "lang=" + _this.portalInfo.lang;
                }
            }
        });

        _logoutDm.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var pendingReqNum = 0;
                var logoutMessage = '';

                var sendLogout = function sendLogout() {
                    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    var time = Date.parse(new Date()) / 1000;
                    var unbind = 1; // 优先使用指定 IP

                    var ip = obj.ip || (_this.portalInfo.doub && host ? '' : _this.userInfo.ip);

                    try {
                        _this.ajax.jsonp({
                            host: host,
                            url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).loginDM,
                            params: {
                                ip: ip,
                                username: _this.userInfo.username,
                                time: time,
                                unbind: unbind,
                                sign: sha1(time + _this.userInfo.username + ip + unbind + time)
                            },
                            success: function success(res) {
                                logoutMessage = res;
                                pendingReqNum -= 1;
                                _this.online = false;
                            },
                            error: function error(res) {
                                // 注销失败给出弹框
                                _this.confirm({
                                    // 翻译注销失败消息
                                    message: _this.translate(res),
                                    confirm: function confirm() {
                                        // 若传入注销失败回调函数，则执行回调函数
                                        if (obj.error) obj.error();
                                    }
                                });
                            }
                        });
                    } catch (err) {
                        pendingReqNum -= 1;
                    }
                }; // 使用 Portal 页面 IP 类型注销


                sendLogout(); // 若符合双栈注销，则进行双栈注销

                if (_this.portalInfo.doub) {
                    var _this$portalInfo = _this.portalInfo,
                        ipv4 = _this$portalInfo.ipv4,
                        ipv6 = _this$portalInfo.ipv6; // 发起另一类型注销

                    sendLogout(_this.portalInfo.nowType === 'ipv4' ? "[".concat(ipv6, "]") : ipv4);
                } // 等待全部请求完成，没有 pending 中的请求则代表全部请求完成，<= 0 防止 catch 与 ajax error 方法重复


                var timer = setInterval(function () {
                    // 全部请求完成，注销成功
                    if (pendingReqNum <= 0 && !_this.online) {
                        clearInterval(timer); // 若传入注销成功回调函数，则执行回调函数

                        if (obj.success) obj.success(logoutMessage); // 若未传入注销成功回调函数，则默认重定向至 index

                        if (!obj.success) _this.toIndex();
                    } // 全部请求完成，认证失败


                    if (pendingReqNum <= 0 && _this.online) {
                        clearInterval(timer);
                    }
                }, 500); // 3s 后清空 Pending Num

                setTimeout(function () {
                    return pendingReqNum = 0;
                }, 3000);
            }
        });

        _logoutNormal.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var pendingReqNum = 0;
                var logoutMessage = ''; // 发送下线请求

                var sendLogout = function sendLogout() {
                    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    pendingReqNum += 1;
                    var params = {
                        action: 'logout',
                        username: _this.userInfo.username + _this.userInfo.domain,
                        // 双栈注销时 IP 参数为空
                        ip: _this.portalInfo.doub && host ? '' : _this.userInfo.ip,
                        ac_id: _this.portalInfo.acid
                    };

                    try {
                        _this.ajax.jsonp({
                            host: host,
                            url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).auth,
                            params: params,
                            success: function success(res) {
                                logoutMessage = res;
                                pendingReqNum -= 1;
                                _this.online = false;
                            },
                            error: function error(res) {
                                pendingReqNum -= 1; // 注销失败给出弹框

                                _this.confirm({
                                    // 翻译注销失败消息
                                    message: _this.translate(res),
                                    confirm: function confirm() {
                                        // 若传入注销失败回调函数，则执行回调函数
                                        if (obj.error) obj.error();
                                    }
                                });
                            }
                        });
                    } catch (err) {
                        pendingReqNum -= 1;
                    }
                }; // 使用 Portal 页面 IP 类型注销


                sendLogout(); // 若符合双栈注销，则进行双栈注销

                if (_this.portalInfo.doub) {
                    var _this$portalInfo2 = _this.portalInfo,
                        ipv4 = _this$portalInfo2.ipv4,
                        ipv6 = _this$portalInfo2.ipv6; // 发起另一类型注销

                    sendLogout(_this.portalInfo.nowType === 'ipv4' ? "[".concat(ipv6, "]") : ipv4);
                } // 等待全部请求完成，没有 pending 中的请求则代表全部请求完成，<= 0 防止 catch 与 ajax error 方法重复


                var timer = setInterval(function () {
                    // 全部请求完成，注销成功
                    if (pendingReqNum <= 0 && !_this.online) {
                        clearInterval(timer); // 若传入注销成功回调函数，则执行回调函数

                        if (obj.success) obj.success(logoutMessage); // 若未传入注销成功回调函数，则默认重定向至 index

                        if (!obj.success) _this.toIndex();
                    } // 全部请求完成，认证失败


                    if (pendingReqNum <= 0 && _this.online) {
                        clearInterval(timer);
                    }
                }, 500); // 3s 后清空 Pending Num

                setTimeout(function () {
                    return pendingReqNum = 0;
                }, 3000);
            }
        });

        _request.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var pact = obj.pact || location.protocol;
                var host = obj.host || location.host;
                var port = obj.port || '';
                var url = "".concat(pact, "//").concat(host).concat(port).concat(obj.url);

                _this.setLog("\u5411\u63A5\u53E3 ".concat(url, " \u53D1\u8D77 ").concat(obj.type, " \u8BF7\u6C42\uFF0C\u8BF7\u6C42\u53C2\u6570\u4E3A"), obj.params);

                $.ajax({
                    url: url,
                    type: obj.type,
                    dataType: obj.dataType,
                    data: obj.params,
                    headers: function () {
                        var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // 自定义请求头
                        Object.keys(_this.requestHead).forEach(function (key) {
                            return headers[key] = _this.requestHead[key];
                        });
                        return headers;
                    }(),
                    success: function success(res) {
                        _this.setLog("\u63A5\u53E3 ".concat(obj.url, " \u8BF7\u6C42\u6210\u529F\uFF0C\u54CD\u5E94\u53C2\u6570\u4E3A"), res); // 使用 code 码做判断


                        if (res.code !== undefined && res.error === undefined) {
                            // code 码为 0，执行操作成功回调
                            if (res.code === 0 && obj.success) obj.success(res); // code 码为其他，执行操作失败回调

                            if (res.code !== 0 && obj.error) obj.error(res);
                        } // 使用 error 码做判断


                        if (res.code === undefined && res.error !== undefined) {
                            // error 码为 ok，执行操作成功回调
                            if (res.error === 'ok' && obj.success) obj.success(res); // error 码为其他，执行操作失败回调

                            if (res.error !== 'ok' && obj.error) obj.error(res);
                        }
                    },
                    // 网络连接错误
                    error: function error(res) {
                        _this.setLog("\u63A5\u53E3 ".concat(obj.url, " \u8BF7\u6C42\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\u4E3A"), res);

                        _this.confirm(_this.translate('NetErr'));
                    }
                });
            }
        });

        _getUserDevice.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                var ua = window.navigator.userAgent;
                var lo = ua.toLowerCase();
                var md = new MobileDetect(ua); // Phone

                if (md.mobile()) return {
                    device: md.os() === 'iOS' ? md.phone() : md.os(),
                    platform: 'Smartphones/PDAs/Tablets'
                }; // Desktop

                if (lo.includes('win') && lo.includes('95')) return {
                    device: 'Windows 95',
                    platform: 'Windows'
                };
                if (lo.includes('win 9x') && lo.includes('4.90')) return {
                    device: 'Windows ME',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('98')) return {
                    device: 'Windows 98',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 5.0')) return {
                    device: 'Windows 2000',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 5.1')) return {
                    device: 'Windows XP',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 6.0')) return {
                    device: 'Windows Vista',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 6.1')) return {
                    device: 'Windows 7',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 6.2')) return {
                    device: 'Windows 8',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 6.3')) return {
                    device: 'Windows 8',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt 10.0')) return {
                    device: 'Windows 10',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('32')) return {
                    device: 'Windows 32',
                    platform: 'Windows'
                };
                if (lo.includes('win') && lo.includes('nt')) return {
                    device: 'Windows NT',
                    platform: 'Windows'
                };
                if (lo.includes('mac os')) return {
                    device: 'Mac OS',
                    platform: 'Macintosh'
                };
                if (lo.includes('linux')) return {
                    device: 'Linux',
                    platform: 'Linux'
                };
                if (lo.includes('unix')) return {
                    device: 'Unix',
                    platform: 'Linux'
                };
                if (lo.includes('sun') && lo.includes('os')) return {
                    device: 'SunOS',
                    platform: 'Linux'
                };
                if (lo.includes('ibm') && lo.includes('os')) return {
                    device: 'IBM OS/2',
                    platform: 'Linux'
                };
                if (lo.includes('mac') && lo.includes('pc')) return {
                    device: 'Macintosh',
                    platform: 'Macintosh'
                };
                if (lo.includes('powerpc')) return {
                    device: 'PowerPC',
                    platform: 'Linux'
                };
                if (lo.includes('aix')) return {
                    device: 'AIX',
                    platform: 'Linux'
                };
                if (lo.includes('hpux')) return {
                    device: 'HPUX',
                    platform: 'Linux'
                };
                if (lo.includes('netbsd')) return {
                    device: 'NetBSD',
                    platform: 'Linux'
                };
                if (lo.includes('bsd')) return {
                    device: 'BSD',
                    platform: 'Linux'
                };
                if (lo.includes('osf1')) return {
                    device: 'OSF1',
                    platform: 'Linux'
                };
                if (lo.includes('irix')) return {
                    device: 'IRIX',
                    platform: 'Linux'
                };
                if (lo.includes('freebsd')) return {
                    device: 'FreeBSD',
                    platform: 'Linux'
                };
                return {
                    device: 'Windows NT',
                    platform: 'Windows'
                };
            }
        });

        _encodeUserInfo.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(info, token) {
                // 克隆自 $.base64，防止污染
                var base64 = _this.clone($.base64); // base64 设置 Alpha

                base64.setAlpha('LVoJPiCN2R8G90yg+hmFHuacZ1OWMnrsSTXkYpUq/3dlbfKwv6xztjI7DeBE45QA'); // 用户信息转 JSON

                info = JSON.stringify(info);

                function encode(str, key) {
                    if (str === '') return '';
                    var v = s(str, true);
                    var k = s(key, false);
                    if (k.length < 4) k.length = 4;
                    var n = v.length - 1,
                        z = v[n],
                        y = v[0],
                        c = 0x86014019 | 0x183639A0,
                        m,
                        e,
                        p,
                        q = Math.floor(6 + 52 / (n + 1)),
                        d = 0;

                    while (0 < q--) {
                        d = d + c & (0x8CE0D9BF | 0x731F2640);
                        e = d >>> 2 & 3;

                        for (p = 0; p < n; p++) {
                            y = v[p + 1];
                            m = z >>> 5 ^ y << 2;
                            m += y >>> 3 ^ z << 4 ^ (d ^ y);
                            m += k[p & 3 ^ e] ^ z;
                            z = v[p] = v[p] + m & (0xEFB8D130 | 0x10472ECF);
                        }

                        y = v[0];
                        m = z >>> 5 ^ y << 2;
                        m += y >>> 3 ^ z << 4 ^ (d ^ y);
                        m += k[p & 3 ^ e] ^ z;
                        z = v[n] = v[n] + m & (0xBB390742 | 0x44C6F8BD);
                    }

                    return l(v, false);
                }

                function s(a, b) {
                    var c = a.length;
                    var v = [];

                    for (var i = 0; i < c; i += 4) {
                        v[i >> 2] = a.charCodeAt(i) | a.charCodeAt(i + 1) << 8 | a.charCodeAt(i + 2) << 16 | a.charCodeAt(i + 3) << 24;
                    }

                    if (b) v[v.length] = c;
                    return v;
                }

                function l(a, b) {
                    var d = a.length;
                    var c = d - 1 << 2;

                    if (b) {
                        var m = a[d - 1];
                        if (m < c - 3 || m > c) return null;
                        c = m;
                    }

                    for (var i = 0; i < d; i++) {
                        a[i] = String.fromCharCode(a[i] & 0xff, a[i] >>> 8 & 0xff, a[i] >>> 16 & 0xff, a[i] >>> 24 & 0xff);
                    }

                    return b ? a.join('').substring(0, c) : a.join('');
                }

                return '{SRBX1}' + base64.encode(encode(info, token));
            }
        });

        _getToken.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(host, ip, callback) {
                _this.ajax.jsonp({
                    host: host,
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).token,
                    params: {
                        username: _this.userInfo.username + _this.userInfo.domain,
                        ip: _this.portalInfo.doub && host ? '' : _this.userInfo.ip
                    },
                    success: function success(res) {
                        return callback(res.challenge);
                    },
                    // 获取 Token 失败给出弹框
                    error: function error(res) {
                        return _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _getSign.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(params, callback) {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).sign,
                    params: params,
                    success: function success(res) {
                        return callback(res.Token, res.Sign);
                    },
                    // 获取 Token 失败给出弹框
                    error: function error(res) {
                        _this.running = {};

                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _createNoticeList.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(data, option) {
                var that = _assertThisInitialized(_this); // 通知条数


                var num = data.length; // 生成通知列表

                var list = function () {
                    var html = '';
                    data.forEach(function (item, index) {
                        html += "\n                <div class=\"list-item\">\n                    ".concat(option.index ? "<span class=\"list-index\">".concat(index + 1, "</span>") : '', "\n                    <span class=\"list-title\">").concat(item.Title, "</span>\n                    <time>").concat(option.time === 'update' ? _this.formatDate(item.Updated_at, 'yyyy-MM-dd') : _this.formatDate(item.Created_at, 'yyyy-MM-dd'), "\n                    </time>\n                </div>\n                ");
                    });
                    return "<div class=\"list-group\">".concat(html, "</div>");
                }(); // 写入通知列表


                $('#notice-container').html(list); // 通知列表 点击通知标题

                $(document).on('click', '#notice-container .list-item .list-title', function () {
                    // 获取点击标题索引
                    var index = $('#notice-container .list-item .list-title').index($(this)); // 若开启通知弹窗，则在 Portal 页面中显示通知

                    if (option.alert) that.confirm({
                        title: data[index].Title,
                        message: data[index].Content
                    }); // 若未开启通知弹窗，则开启自助服务页面显示通知

                    if (!option.alert) that.toSelfService("/news/view?id=".concat(data[index].Id));
                });
            }
        });

        _createAuthQr.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var info = {
                    "pip": location.host,
                    "ac_id": _this.portalInfo.acid,
                    "ip": _this.userInfo.ip
                }; // 克隆自 $.base64，防止污染

                var base64 = _this.clone($.base64); // base64 设置 Alpha


                base64.setAlpha('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
                var i = base64.encode(JSON.stringify(info));
                var text = "".concat(_this.portalInfo.selfServiceIp, "/visitor/scan-qrcode?data=").concat(encodeURIComponent(i));

                _this.qrCode({
                    el: '#scan_qrcode',
                    text: text,
                    background: CREATER.background,
                    foreground: CREATER.foreground,
                    size: CREATER.size
                });

                _classPrivateFieldGet(_assertThisInitialized(_this), _polling).call(_assertThisInitialized(_this));
            }
        });

        _polling.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                var countTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
                // 轮询 (每隔三秒请求一下rad_user_info接口，若用户在线,跳转到成功页面)
                var timer = setInterval(function () {
                    countTime -= time;

                    if (countTime <= 0) {
                        clearInterval(timer);
                        return _this.confirm({
                            message: _this.translate('TimeoutError'),
                            confirm: function confirm() {
                                return location.reload();
                            }
                        });
                    }

                    _this.ajax.jsonp({
                        url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).info,
                        success: function success(res) {
                            return _this.toSuccess();
                        }
                    });
                }, time * 1000);
            }
        });

        _createWeworkQr.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).authWework,
                    params: {
                        ac_id: _this.portalInfo.acid
                    },
                    success: function success(res) {
                        _this.qrCode({
                            el: '#wework_qrcode',
                            text: res.data.url,
                            background: CREATER.weworkBackground,
                            foreground: CREATER.weworkForeground,
                            size: CREATER.size
                        });

                        $('.panel-notice').height($('.panel-login').height());

                        _classPrivateFieldGet(_assertThisInitialized(_this), _polling).call(_assertThisInitialized(_this), 3, res.data.expire_time);
                    },
                    error: function error(res) {
                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _checkProtStatus.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(callback) {
                // 查询防抖
                if (_this.running.checkProt) return; // 若未勾选协议

                if (!$('#protocol').prop('checked')) return _this.confirm(_this.translate('ReadAgreement')); // 更改查询状态为进行中

                _this.running.checkProt = true; // 发起查询请求

                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).userAgreed,
                    params: {
                        user_name: _this.userInfo.username || _this.userInfo.phone
                    },
                    success: function success(res) {
                        // 更改查询状态为结束
                        _this.running.checkProt = false; // 用户同意了哪些协议

                        _this.userInfo.agreedList = res.data; // 把用户同意过的协议存在 cookie

                        _this.setCookie('protocol', JSON.stringify(res.data)); // 用户同意最新协议


                        if (_this.userInfo.agreedList.includes(_this.portalInfo.protocol.id)) return callback(); // 用户未同意最新协议，但用户本次勾选了同意协议

                        if ($('#protocol').prop('checked')) return _this.agreeProtocol(function () {
                            return callback();
                        }); // 用户未同意最新协议，且用户未同意过任何协议

                        if (!res.data.length) return _this.confirm(_this.translate('ReadAgreement')); // 用户未同意最新协议，但用户同意过其他协议

                        if (res.data.length) return _this.confirm(_this.translate('NewAgreement'));
                    },
                    error: function error(res) {
                        // 更改查询状态为结束
                        _this.running.checkProt = false;

                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _loginCisco.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                _this.ajax.post({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).ciscoCheck,
                    params: {
                        user_name: _this.userInfo.username || _this.userInfo.phone,
                        password: _this.userInfo.password || _this.userInfo.vcode
                    },
                    success: function success() {
                        _this.running.login = false;
                        $('#form-cisco').submit();
                    },
                    error: function error(res) {
                        _this.running.login = false;

                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _loginOtp.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                _this.userInfo.otp = true;

                _classPrivateFieldGet(_assertThisInitialized(_this), _loginAccount).call(_assertThisInitialized(_this), obj);
            }
        });

        _loginAccount.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                // 加密常量
                var type = 1;
                var n = 200;
                var enc = 'srun_bx1'; // 用户信息

                var username = _this.userInfo.username + _this.userInfo.domain;
                var password = _this.userInfo.password;
                var ac_id = _this.portalInfo.acid; // 正在等待中的请求

                var pendingReqNum = 0; // 请求成功的消息

                var successMsg = ''; // 发起认证方法

                var sendAuth = function sendAuth() {
                    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    // 双栈认证时 IP 参数为空
                    var ip = _this.portalInfo.doub && host ? '' : _this.userInfo.ip; // 获取 Token

                    _classPrivateFieldGet(_assertThisInitialized(_this), _getToken).call(_assertThisInitialized(_this), host, ip, function (token) {
                        // 用户密码 MD5 加密
                        var hmd5 = md5(password, token); // 用户信息加密

                        var i = _classPrivateFieldGet(_assertThisInitialized(_this), _encodeUserInfo).call(_assertThisInitialized(_this), {
                            username: username,
                            password: password,
                            ip: ip,
                            acid: ac_id,
                            enc_ver: enc
                        }, token);

                        var str = token + username;
                        str += token + hmd5;
                        str += token + ac_id;
                        str += token + ip;
                        str += token + n;
                        str += token + type;
                        str += token + i; // 防止 IPv6 请求网络不通进行 try catch

                        try {
                            pendingReqNum += 1; // 发起认证请求

                            _this.ajax.jsonp({
                                host: host,
                                url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).auth,
                                params: {
                                    action: 'login',
                                    username: username,
                                    password: _this.userInfo.otp ? '{OTP}' + password : '{MD5}' + hmd5,
                                    os: _this.portalInfo.userDevice.device,
                                    name: _this.portalInfo.userDevice.platform,
                                    // 未开启双栈认证，参数为 0
                                    // 开启双栈认证，向 Portal 当前页面 IP 认证时，参数为 1
                                    // 开启双栈认证，向 Portal 另外一种 IP 认证时，参数为 0
                                    double_stack: _this.portalInfo.doub && !host ? 1 : 0,
                                    chksum: sha1(str),
                                    info: i,
                                    ac_id: ac_id,
                                    ip: ip,
                                    n: n,
                                    type: type
                                },
                                success: function success(res) {
                                    pendingReqNum -= 1; // 认证成功，用户上线

                                    _this.online = true; // 更改登录状态为结束

                                    _this.running.login = false; // IP 已经在线了 - 给出提示

                                    if (res.suc_msg === 'ip_already_online_error' && obj.error) return _this.confirm({
                                        message: _this.translate('ip_already_online_error'),
                                        confirm: function confirm() {
                                            if (obj.error) obj.error();
                                        }
                                    }); // 翻译后的认证成功信息

                                    successMsg = _this.translate(res);
                                },
                                error: function error(res) {
                                    pendingReqNum -= 1; // 更改登录状态为结束

                                    _this.running.login = false; // 保存修改密码错数

                                    var errNum = localStorage.getItem(username);
                                    localStorage.setItem(username, Number(errNum) + 1);

                                    if (localStorage.getItem(username) >= 4) {
                                        return _this.confirm({
                                            message: '您的账号密码错误次数过多，如果遗忘密码请去数字杭电修改密码或点击下方《修改密码》进行操作',
                                            confirmText: '修改密码',
                                            confirm: function confirm() {
                                                $('#pcode').focus();
                                                $('#pcode').val('');
                                                $('#codeImg').click(); // 杭电修改密码链接
                                                window.open('https://cas.hdu.edu.cn/cas/pwd')
                                            }
                                        });
                                    }

                                    if (localStorage.getItem(username) >= 1) {
                                        $("#vcode").css('display', 'block');
                                        $("#vcode").css('visibility', 'visible');
                                        $("#vcode").css('height', '40px');
                                        $("#vcode").css('margin-bottom', '20px');
                                        $('#pcode').focus();
                                        $('#pcode').val('');
                                        $('#codeImg').click();
                                    } // 若 ecode 为 E2620 且开启了在线设备管理功能
                                    // E2620: 超出允许的在线数目


                                    if (res.ecode === 'E2620' && CREATER.useOnlineDeviceMgr) return _this.confirm({
                                        message: _this.translate('E2620Tips'),
                                        confirm: function confirm() {
                                            _this.dialog.open('onlineDeviceMgr', function () {
                                                _this.getOnlineDevice();
                                            });
                                        }
                                    }); // IP 已经在线了 - 重新认证

                                    if (res.error_msg === 'ip_already_online_error') return _this.reAuth(obj); // 需要查询日志的情况

                                    if (res.error_msg === 'not_online_error') return _this.showLog();
                                    if (res.error_msg === 'no_response_data_error') return _this.showLog();
                                    if (res.error_msg === 'RD000') return _this.showLog(); // 若提示修改密码

                                    if (res.error_msg === 'user_must_modify_password') return _this.confirm({
                                        message: _this.translate(res),
                                        confirmText: _this.translate('ToChangePassword'),
                                        confirm: function confirm() {
                                            return $('#forget').click();
                                        },
                                        cancel: function cancel() {
                                        }
                                    }); // 错误提示

                                    _this.confirm({
                                        message: _this.translate(res),
                                        confirm: function confirm() {
                                            if (obj.error) obj.error(res);
                                        }
                                    });
                                }
                            });
                        } catch (err) {
                            // 因为 IPv6 网络问题导致的认证失败
                            pendingReqNum -= 1;
                        }
                    });
                }; // 使用 Portal 页面 IP 类型认证


                sendAuth(); // 若符合双栈认证，则进行双栈认证

                if (_this.portalInfo.doub) {
                    var _this$portalInfo3 = _this.portalInfo,
                        ipv4 = _this$portalInfo3.ipv4,
                        ipv6 = _this$portalInfo3.ipv6; // 发起另一类型认证

                    sendAuth(_this.portalInfo.nowType === 'ipv4' ? "[".concat(ipv6, "]") : ipv4);
                } // 等待全部请求完成，没有 pending 中的请求则代表全部请求完成，<= 0 防止 catch 与 ajax error 方法重复


                var timer = setInterval(function () {
                    // 全部请求完成，认证成功
                    if (pendingReqNum <= 0 && _this.online) {
                        clearInterval(timer); // 认证成功

                        if (obj.success) obj.success(successMsg); // 若未传入注销成功回调函数，则默认重定向至 index

                        if (!obj.success) _this.toSuccess();
                    } // 全部请求完成，认证失败


                    if (pendingReqNum <= 0 && !_this.online) {
                        clearInterval(timer);
                    }
                }, 500); // 3s 后清空 Pending Num

                setTimeout(function () {
                    return pendingReqNum = 0;
                }, 3000);
            }
        });

        _loginAccountSMS.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).authSMSAccount,
                    params: {
                        username: (_this.userInfo.username || _this.userInfo.phone) + _this.userInfo.domain,
                        code: _this.userInfo.vcode,
                        ac_id: _this.portalInfo.acid,
                        ip: _this.userInfo.ip
                    },
                    success: function success(res) {
                        // 更改登录状态为结束
                        _this.running.login = false;
                        if (obj.success) obj.success(res);
                        if (!obj.success) _this.toSuccess();
                    },
                    error: function error(res) {
                        // 更改登录状态为结束
                        _this.running.login = false;

                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _loginPhoneSMS.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var params = {
                    phone: _this.userInfo.username || _this.userInfo.phone,
                    vcode: _this.userInfo.vcode,
                    ip: _this.userInfo.ip,
                    ac_id: _this.portalInfo.acid,
                    type: 'auth',
                    t: Date.parse(new Date()) / 1000
                };

                _classPrivateFieldGet(_assertThisInitialized(_this), _getSign).call(_assertThisInitialized(_this), params, function (token, sign) {
                    params.token = token;
                    params.sign = sign;
                    params.mac = _this.userInfo.mac;
                    params.type = 1;
                    params.os = _this.portalInfo.userDevice.device;
                    params.name = _this.portalInfo.userDevice.platform;

                    _this.ajax.jsonp({
                        url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).authSMSPhone,
                        params: params,
                        success: function success(res) {
                            // 更改登录状态为结束
                            _this.running.login = false;
                            if (obj.success) obj.success(res);
                            if (!obj.success) _this.toSuccess();
                        },
                        error: function error(res) {
                            // 更改登录状态为结束
                            _this.running.login = false;

                            _this.confirm(_this.translate(res));
                        }
                    });
                });
            }
        });

        _loginWechat.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).authWechat,
                    // success : (res) => location.href = res.data,
                    success: function success(res) {
                        return window.open(res.data);
                    }
                });
            }
        });

        _sendVcodePhone.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                var params = {
                    phone: obj.phone,
                    t: Date.parse(new Date()) / 1000,
                    ip: _this.userInfo.ip,
                    type: 'send'
                }; // 获取 Token

                _classPrivateFieldGet(_assertThisInitialized(_this), _getSign).call(_assertThisInitialized(_this), params, function (token, sign) {
                    params.token = token;
                    params.sign = sign;
                    params.mac = _this.userInfo.mac;
                    delete params.type;
                    if (_typeof(obj.extend) === 'object') Object.assign(params, obj.extend);

                    _this.ajax.jsonp({
                        url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).vcodePhone,
                        params: params,
                        success: function success(res) {
                            _this.running.sendSMS = false;
                            if (obj.success) obj.success(res);
                        },
                        error: function error(res) {
                            _this.running.sendSMS = false;

                            _this.confirm(_this.translate(res));
                        }
                    });
                });
            }
        });

        _sendVcodeAccount.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                _this.ajax.get({
                    url: _classPrivateFieldGet(_assertThisInitialized(_this), _api).vcodeAccount,
                    params: {
                        username: _this.userInfo.phone
                    },
                    success: function success(res) {
                        _this.running.sendSMS = false;
                        if (obj.success) obj.success(res);
                    },
                    error: function error(res) {
                        _this.running.sendSMS = false;

                        _this.confirm(_this.translate(res));
                    }
                });
            }
        });

        _setPortalInfo.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                // 设备当前 IP
                _this.userInfo.ip = _this.config.ip; // 用户 Mac 地址

                _this.userInfo.mac = _this.config.mac; // Nas IP

                _this.portalInfo.nasIp = _this.getUrlParams('nas_ip'); // 语言类型

                _this.portalInfo.lang = _this.config.lang; // AC ID

                _this.portalInfo.acid = _this.getUrlParams('ac_id'); // 流量进位方式 1024 | 1000，默认 1024

                _this.portalInfo.flowMode = Number(_this.config.portal.TrafficCarry) || 1024; // 当前 IP 类型

                _this.portalInfo.nowType = _this.config.isIPV6 ? 'ipv6' : 'ipv4'; // IPv4 认证地址

                _this.portalInfo.ipv4 = _this.config.portal.AuthIP; // IPv6 认证地址

                _this.portalInfo.ipv6 = _this.config.portal.AuthIP6; // 是否开启双栈认证 (需保证当前设备类型符合开启的双栈认证方式)

                _this.portalInfo.doub = !Portal.mobile && _this.config.portal.DoubleStackPC || Portal.mobile && _this.config.portal.DoubleStackMobile; // 用户设备信息

                _this.portalInfo.userDevice = _classPrivateFieldGet(_assertThisInitialized(_this), _getUserDevice).call(_assertThisInitialized(_this)); // 自服务地址

                _this.portalInfo.selfServiceIp = _this.config.portal.ServiceIP || "".concat(location.protocol, "//").concat(location.hostname, ":8800"); // 通知类型

                _this.portalInfo.noticeType = _this.config.notice; // 选择默认语言

                _classPrivateFieldGet(_assertThisInitialized(_this), _selectDefaultLang).call(_assertThisInitialized(_this)); // 设置工具类语言包


                _this.setToolsLang({
                    notify: _this.translate('Notify'),
                    confirm: _this.translate('Confirm'),
                    cancel: _this.translate('Cancel'),
                    year: _this.translate('Year'),
                    month: _this.translate('Month'),
                    day: _this.translate('Day'),
                    hour: _this.translate('Hour'),
                    minute: _this.translate('Minute'),
                    second: _this.translate('Second')
                });
            }
        });

        _showInfo.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                var dom = '';
                CREATER.onlineInfo.forEach(function (item) {
                    var info = _classPrivateFieldGet(_assertThisInitialized(_this), _onlineInfoMap).get(item);

                    dom += "\n            <div class=\"panel-row\">\n                <span class=\"label\">".concat(_this.translate(info.label), "</span>\n                <span class=\"value\" id=\"").concat(info.id, "\">").concat(_this.userInfo[info.field] || '-', "</span>\n            </div>");
                });
                $('.panel-login .title-container').after(dom); // 同步通知高度

                $('.panel-notice').height($('.panel-login').height());
            }
        });

        _getAgentDialLog.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value(obj) {
                _this.showLog({
                    success: function success() {
                        // 日志查询成功，继续认证
                        _classPrivateFieldGet(_assertThisInitialized(_this), _loginAccount).call(_assertThisInitialized(_this), obj);
                    },
                    error: function error(res) {
                        // 日志查询错误，错误信息以 代拨失败 开头
                        _this.confirm({
                            message: _this.translate(res),
                            confirmText: _this.translate('Next'),
                            cancelText: _this.translate('IKnow'),
                            confirm: function confirm() {
                                return _classPrivateFieldGet(_assertThisInitialized(_this), _loginAccount).call(_assertThisInitialized(_this), obj);
                            },
                            cancel: function cancel() {
                                // 更改登录状态为结束
                                _this.running.login = false;
                            }
                        });
                    }
                });
            }
        });

        _panelPay.set(_assertThisInitialized(_this), {
            writable: true,
            value: function value() {
                var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                // 手动输入支付金额默认金额 (默认 300)
                conf.inputPriceDef = conf.inputPriceDef || 300; // 支付宝字段名称 (默认 alipay)

                conf.alipay = conf.alipay || 'alipay'; // 微信支付字段名称 (默认 wechat)

                conf.wechat = conf.wechat || 'wechat'; //支付状态检查间隔 (默认 3s)

                conf.checkInterval = conf.checkInterval || 3; // 支付状态检查时长 (默认 30s)

                conf.checkTime = conf.checkTime || 30;

                var that = _assertThisInitialized(_this);

                var offline = typeof success === 'undefined' || !success;
                var prodId = '';
                var prodName = '';
                var payPrice = conf.priceList[0];
                var payMethod = conf.alipay;
                var payStatus = false;
                var orderID = '';

                _this.use('confirm');

                _this.use('loading');

                _this.use('statusAnimate');

                _this.showPanelProd = function () {
                    return showPanelProd();
                }; // 创建面板


                appendPanel(); // 绑定键盘按下事件，监听 ESC 与 Enter

                $(window).keydown(function (event) {
                    // ESC
                    if (event.keyCode === 27) return closePanelProd();
                }); // 关闭订单面板

                $(document).on('click', '.portal-dialog.panel-prod .btn-close', function () {
                    closePanelProd();
                }); // 选择套餐

                $(document).on('click', '.portal-dialog.panel-prod .item-list li', function () {
                    var _this2 = this;

                    var label = $(this).text();
                    var value = $(this).attr('data-id');

                    var change = function change() {
                        $('.panel-prod .item-list li').removeClass('active');
                        $(_this2).addClass('active');
                        prodId = value;
                        prodName = label;
                        that.confirm({
                            message: "\u5957\u9910\u5DF2\u66F4\u6539\u4E3A\u300C".concat(label, "\u300D,\u9700\u91CD\u65B0\u8FDB\u884C\u8BA4\u8BC1"),
                            confirm: function confirm() {
                                location.href = './index_' + $('#ac_id').val() + '.html';
                            },
                            cancel: function cancel() {
                            }
                        }); // that.loadingEnd();
                    };

                    that.loading(taht.translate('PackageChanging') + "......");
                    that.ajax.post({
                        url: conf.api.prodChange,
                        params: {
                            user_name: that.userInfo.username || that.userInfo.phone,
                            products_id_from: prodId,
                            products_id_to: value
                        },
                        success: function success(res) {
                            if (res.code === 0) {
                                change();
                            } else {
                                that.confirm(that.translate('PackageChangeFailed'));
                                that.loadingEnd();
                            }
                        },
                        // 网络连接错误
                        error: function error() {
                            return that.confirm(that.translate('NetErr'));
                        }
                    });
                }); // 选择缴费金额

                $(document).on('click', '.portal-dialog.panel-prod .pay-num-grid .module', function () {
                    $('.panel-prod .pay-num-grid .module').removeClass('active');
                    $(this).addClass('active');
                    var selected = $(this).attr('data-price');

                    if (selected === 'other') {
                        payPrice = conf.inputPriceDef;
                        $('.panel-prod .input-price').show().val(conf.inputPriceDef);
                    } else {
                        payPrice = Number(selected);
                        $('.panel-prod .input-price').hide();
                    }
                }); // 输入缴费金额

                $(document).on('keyup', '.portal-dialog.panel-prod .input-price', function () {
                    payPrice = Number($(this).val());
                }); // 确认订单

                $(document).on('click', '.portal-dialog.panel-prod .btn-confirm-prod', function () {
                    if (payPrice <= 0) return that.confirm(that.translate('AmountLimit'));
                    showPanelPay();
                }); // 显示选择支付方式

                $(document).on('click', '.portal-dialog.panel-pay .pay-method', function () {
                    $('.panel-pay .pay-method-select').addClass('active');
                    $(".panel-pay .pay-method-select [data-value=\"".concat(payMethod, "\"] .icon-selected")).show();
                }); // 选择支付方式

                $(document).on('click', '.portal-dialog.panel-pay .pay-method-select .item-list li', function () {
                    payMethod = $(this).attr('data-value');
                    $('.panel-pay .pay-method-select .icon-selected').hide();
                    $(this).find('.icon-selected').show();
                    backOrder();
                }); // 返回付款信息

                $(document).on('click', '.portal-dialog.panel-pay .btn-back-pay', function () {
                    backOrder();
                }); // 关闭支付面板

                $(document).on('click', '.portal-dialog.panel-pay .panel-bg', function () {
                    closePanelPay();
                    $('#pay-qr').html('');
                    $('.btn-confirm.btn-confirm-pay').show();
                }); // 确认付款

                $(document).on('click', '.portal-dialog.panel-pay .btn-confirm-pay', function () {
                    createOrder();

                    if (Portal.mobile) {
                        closePanelPay();
                        closePanelProd();
                        that.loading(taht.translate('Paying'));
                    }
                }); // 缴费按钮

                $(document).on('click', '#btn-pay', function () {
                    // 账号认证校验
                    if (that.config.page === 'account') {
                        that.userInfo.username = $('#username').val().replace(/ /g, '');
                        if (!that.userInfo.username) return that.confirm(that.translate('AccountVerification'));
                    } // 短信认证校验


                    if (that.config.page.indexOf('sms') !== -1) {
                        that.userInfo.phone = $('#phone').val().replace(/ /g, '');
                        if (!that.fieldCheck(that.userInfo.phone, 'phone')) return that.confirm(that.translate('PhoneNumberFormatIsWrong'));
                    } // 若用户为在线状态或未启用协议，直接开启缴费面板


                    if (that.online || !that.config.portal.UserAgreeSwitch) return that.showPanelProd(); // 查询用户是否同意协议，若同意则开启面板

                    _classPrivateFieldGet(that, _checkProtStatus).call(that, function () {
                        return that.showPanelProd();
                    });
                }); // 返回付款信息

                function backOrder() {
                    getOrderInfo();
                    $('.panel-pay .pay-method-select').removeClass('active');
                }

                function closePanelProd() {
                    $('.panel-prod').removeClass('active');
                }

                function closePanelPay() {
                    $('.panel-pay').removeClass('active');
                    $('.panel-pay .pay-method-select').removeClass('active');
                }

                function showPanelProd() {
                    getProduct(function () {
                        $('.panel-prod').addClass('active');
                    });
                }

                function showPanelPay() {
                    getOrderInfo();
                    $('.panel-pay').addClass('active');
                }

                function createProdDom(prodList) {
                    var dom = '';
                    prodList.forEach(function (item, index) {
                        dom += "<li class=\"".concat(prodId === item.products_id ? 'active' : '', "\"\n                            data-id=\"").concat(item.products_id, "\">").concat(item.products_name, "</li>");
                    });
                    return dom;
                }

                function createPriceDom() {
                    var dom = '';
                    conf.priceList.forEach(function (item, index) {
                        dom += "\n                    <div class=\"module ".concat(index === 0 ? 'active' : '', "\"\n                        data-price=\"").concat(item, "\">\n                        <div class=\"module-container\">\n                            <span class=\"value\">").concat(item, "</span>\n                            <span class=\"unit\">") + that.translate('Yuan') + "</span>\n                        </div>\n                    </div>\n                ";
                    });
                    return dom;
                }

                function appendPanel() {
                    var dom = "\n                <div class=\"portal-dialog panel-prod\">\n                    <div class=\"panel-bg\"></div>\n                    <div class=\"panel-content\">\n                        <div class=\"row panel-header\">\n                            <button type=\"button\" class=\"btn-close\">\n                                <i class=\"icon ion-ios-arrow-back\"></i>\n                                <span>" + that.translate('Back') + "</span>\n                            </button>\n                            <h3 class=\"header-title\">" + that.translate('Recharge') + "</h3>\n                        </div>\n                        <div class=\"change-product\" style=\"display: none\">\n                            <div class=\"row item-title\">\n                                <i class=\"icon ion-md-cube\"></i>\n                                <!--<span>" + that.translate('ChoosePackage') + "</span>-->\n                                <span>" + that.translate('ChangePackage') + "</span>\n                            </div>\n                            <div class=\"row item-list\">\n                                <ul></ul>\n                            </div>\n                        </div>\n                        <div class=\"row item-title\">\n                            <i class=\"icon ion-md-wallet\"></i>\n                            <span>" + that.translate('PaymentAmount') + "</span>\n                        </div>\n                        <div class=\"row pay-num-grid\">\n                            ".concat(createPriceDom(), "\n                            <div class=\"module\" data-price=\"other\">\n                                <div class=\"module-container\">\n                                    <span class=\"unit\">") + that.translate('Other') + "</span>\n                                </div>\n                            </div>\n                            <div class=\"input-price-container\">\n                                <input type=\"tel\" placeholder=\"" + that.translate('EnterPaymentAmount') + "\" class=\"input-price\">\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"btn-confirm btn-confirm-prod\">" + that.translate('ConfirmOrder') + "</button>\n                    </div>\n                </div>\n                <div class=\"portal-dialog panel-pay\">\n                    <div class=\"panel-bg\"></div>\n                    <div class=\"panel-content\">\n                        <div class=\"order-info\">\n                            <h3 class=\"pay-title\">" + that.translate('ConfirmOrder') + "</h3>\n                            <ul>\n                                <li>\n                                    <span class=\"label\">" + that.translate('PaymentNumber') + "</span>\n                                    <span class=\"value info-pay-phone\"></span>\n                                </li>\n                                <li>\n                                    <span class=\"label\">" + that.translate('PackageName') + "</span>\n                                    <span class=\"value info-pay-prod\"></span>\n                                </li>\n                                <li>\n                                    <span class=\"label\">" + that.translate('PaymentAmount') + "</span>\n                                    <span class=\"value info-pay-price\"></span>\n                                </li>\n                                <li class=\"pay-method\">\n                                    <span class=\"label\">" + that.translate('PaymentMethod') + "</span>\n                                    <i class=\"icon ion-ios-arrow-forward\"></i>\n                                    <span class=\"value info-pay-method\"></span>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"info-pay-total\"></div>\n                        <button type=\"button\" class=\"btn-confirm btn-confirm-pay\">" + that.translate('ConfirmPayment') + "</button>\n                        <div id=\"pay-qr\" style=\"text-align:center\"></div>\n                        <div class=\"pay-method-select\">\n                            <div class=\"row panel-header\">\n                                <button type=\"button\" class=\"btn-back-pay\">\n                                    <i class=\"icon ion-ios-arrow-back\"></i>\n                                    <span>" + that.translate('Back') + "</span>\n                                </button>\n                                <h3 class=\"header-title\">" + that.translate('PaymentMethod') + "</h3>\n                            </div>\n                            <div class=\"row item-list\">\n                                <ul>\n                                    <li class=\"alipay\" data-value=\"".concat(conf.alipay, "\">\n                                        <i class=\"icon icon-selected ion-md-checkmark-circle-outline\"></i>\n                                        <span>") + that.translate('Alipay') + "</span>\n                                        <img class=\"icon-img\" src=\"./static/themes/elves/images/alipay.png\" alt=\"\">\n                                    </li>\n                                    <li class=\"wechat\" data-value=\"".concat(conf.wechat, "\">\n                                        <i class=\"icon icon-selected ion-md-checkmark-circle-outline\"></i>\n                                        <span>") + that.translate('Wechat') + "</span>\n                                        <img class=\"icon-img\" src=\"./static/themes/elves/images/wechat.png\" alt=\"\">\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ";
                    that.appendDom({
                        position: 'body',
                        name: 'div',
                        content: dom
                    });
                    if (!offline) $('.change-product').show();
                    checkOrderInfo();
                }

                function getProduct(callback) {
                    that.ajax.get({
                        url: conf.api.prodList,
                        params: {
                            username: that.userInfo.username || that.userInfo.phone
                        },
                        success: function success(res) {
                            if (!res.data) {
                                that.confirm(that.translate(res));
                            } else {
                                // prodId = res.data[0].products_id;
                                // prodName = res.data[0].products_name;
                                getPordNow(res.data);
                                callback();
                            }
                        },
                        // 网络连接错误
                        error: function error() {
                            return that.confirm(that.translate('NetErr'));
                        }
                    });
                }

                function getPordNow(data) {
                    that.ajax.get({
                        url: conf.api.prodNow,
                        params: {
                            user_name: that.userInfo.username || that.userInfo.phone
                        },
                        success: function success(res) {
                            prodId = res.data;
                            prodName = data.filter(function (item) {
                                return item.products_id === prodId;
                            })[0].products_name;
                            $('.portal-dialog.panel-prod .item-list ul').html(createProdDom(data));
                        },
                        // 网络连接错误
                        error: function error() {
                            return that.confirm(that.translate('NetErr'));
                        }
                    });
                }

                function getOrderInfo() {
                    $('.panel-pay .info-pay-phone').html(that.userInfo.username || that.userInfo.phone);
                    $('.panel-pay .info-pay-prod').html(prodName);
                    $('.panel-pay .info-pay-method').html(getPayMethodName(payMethod));
                    $('.panel-pay .info-pay-price').html("".concat(payPrice, " ") + that.translate('Yuan'));
                    $('.panel-pay .info-pay-total').html("\xA5 ".concat(Number(payPrice).toFixed(2)));
                }

                function getPayMethodName(method) {
                    switch (method) {
                        case conf.alipay:
                            return that.translate('Alipay');

                        case conf.wechat:
                            return that.translate('Wechat');

                        default:
                    }
                }

                function createOrderId() {
                    var yyyyMMddHHmmss = that.formatDate(Date.now(), 'yyyyMMddHHmmss');
                    var random1 = that.randomNum(100000, 999999);
                    var random2 = that.randomNum(100000, 999999);
                    return yyyyMMddHHmmss + random1 + random2;
                }

                function createOrder() {
                    orderID = createOrderId();
                    var phone = that.userInfo.username || that.userInfo.phone;
                    that.ajax.post({
                        url: conf.api.pay,
                        params: {
                            order_id: orderID,
                            phone: phone,
                            product_id: prodId,
                            product_name: prodName,
                            pay_method: payMethod,
                            price: payPrice
                        },
                        success: function success(res) {
                            var payLink = res.data.replace(/amp;/g, ''); // FIXME: 是否启用轮询，轮询测试
                            // loopCheckPay();

                            saveOrderInfo({
                                order_id: orderID,
                                phone: phone
                            });
                            if (Portal.mobile) location.href = payLink;
                            if (!Portal.mobile) createQr(payLink);
                        },
                        // 网络连接错误
                        error: function error() {
                            return that.confirm(that.translate('NetErr'));
                        }
                    });
                }

                function createQr(url) {
                    $('.btn-confirm.btn-confirm-pay').hide();
                    $('#pay-qr').qrcode({
                        text: url,
                        height: 300,
                        width: 300,
                        correctLevel: 0,
                        background: '#FFFFFF',
                        foreground: '#4086CE'
                    });
                }

                function saveOrderInfo(data) {
                    data = JSON.stringify(data);
                    data = $.base64.encode(data);
                    localStorage.setItem('orderinfo', data);
                }

                function clearOrderInfo() {
                    localStorage.removeItem('orderinfo');
                }

                function checkOrderInfo() {
                    var orderInfo = localStorage.getItem('orderinfo');
                    if (!orderInfo) return false;
                    orderInfo = $.base64.decode(orderInfo);
                    orderInfo = JSON.parse(orderInfo);
                    orderID = orderInfo.order_id;
                    var phone = orderInfo.phone;
                    that.confirm({
                        message: that.translate('PaymentConfirm'),
                        confirm: function confirm() {
                            checkPayStatus();
                        },
                        cancel: function cancel() {
                            that.confirm(that.translate('CancelRecharge'));
                            clearOrderInfo();
                        }
                    });
                }

                function checkPayStatus(timer) {
                    that.ajax.get({
                        url: conf.api.payStatus,
                        params: {
                            order_id: orderID
                        },
                        success: function success(res) {
                            payStatus = Boolean(res.data === '2');
                            if (payStatus) paySuccess(timer);
                            if (!payStatus && !timer) payError();
                        },
                        // 网络连接错误
                        error: function error() {
                            that.confirm(that.translate('NetErr'));
                            if (!timer) payError();
                        }
                    });
                }

                function loopCheckPay() {
                    var time = 0;
                    var timer = setInterval(function () {
                        time += conf.checkInterval * 1000;
                        if (time >= conf.checkTime * 1000 && !payStatus) payTimeout(timer);
                        checkPayStatus(timer);
                    }, conf.checkInterval * 1000);
                }

                function paySuccess(timer) {
                    if (timer) clearInterval(timer);
                    that.loadingEnd();
                    that.statusAnimate('success', that.translate('RechargeSuccess'));
                    clearOrderInfo();
                }

                function payError() {
                    that.statusAnimate('error', that.translate('RechargeFailed'));
                    clearOrderInfo();
                }

                function payTimeout(timer) {
                    clearInterval(timer);
                    that.loadingEnd();
                    that.confirm({
                        message: that.translate('PaymentConfirm'),
                        confirm: function confirm() {
                            checkPayStatus();
                        },
                        cancel: function cancel() {
                            that.confirm(that.translate('CancelRecharge'));
                            clearOrderInfo();
                        }
                    });
                }
            }
        });

        _this.use('confirm');

        _this.use('dialog'); // 构造函数传入配置


        _this.config = config; // 要添加的请求头

        _this.requestHead = requestHead; // 在线状态

        _this.online = _this.config.page === 'success'; // 用户信息

        _this.userInfo = {}; // Portal 信息

        _this.portalInfo = {}; // 进行中状态

        _this.running = {}; // 写入 Portal 信息

        _classPrivateFieldGet(_assertThisInitialized(_this), _setPortalInfo).call(_assertThisInitialized(_this)); // 获取最新协议


        _this.getProtocol(); // 新增链接


        _this.newCertification(); // 使用在线设备管理


        _this.useOnlineDeviceMgr();

        if (Portal.debugMode) {
            _this.setLog('页面重新加载，当前 URL', location.href);

            _this.confirm({
                message: '当前处于 Debug 模式！',
                confirmText: '继续 Debug',
                cancelText: '停止 Debug',
                cancel: function cancel() {
                    Portal.debug('stop');
                }
            });
        }

        return _this;
    }

    _createClass(Portal, [{
        key: "info",
        value: // **************************************************    Public    ************************************************** //

            /**
             * 查询用户在线状态
             * @method
             * @param   {Success}   obj.online      用户在线回调函数
             * @param   {Error}     obj.offline     用户离线回调函数
             */
            function info() {
                var _this3 = this;

                var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                //准备查询在线信息
                Portal.prototype.setLog("\u51C6\u5907\u67E5\u8BE2\u5728\u7EBF\u4FE1\u606F"); // 单点登录阻止查询用户在线状态

                if (this.config.page === 'wechat') return _classPrivateFieldGet(this, _checkWechatSSO).call(this);
                if (this.config.page === 'sso') return _classPrivateFieldGet(this, _checkSSO).call(this);
                if (this.config.page === 'qrcode') _classPrivateFieldGet(this, _createAuthQr).call(this);
                if (this.config.page === 'wework') _classPrivateFieldGet(this, _createWeworkQr).call(this); // 查询在线延迟时间

                var lazyTime = this.config.page === 'success' ? 0 : CREATER.lazyInfo || 0;
                //查询在线信息延迟时间（ms）
                Portal.prototype.setLog("\u67E5\u8BE2\u5728\u7EBF\u4FE1\u606F\u5EF6\u8FDF\u65F6\u95F4\uFF08ms\uFF09", lazyTime); // 查询在线表

                setTimeout(function () {
                    _this3.ajax.jsonp({
                        url: _classPrivateFieldGet(_this3, _api).info,
                        params: obj.params,
                        success: function success(res) {
                            Portal.prototype.setLog("\u7528\u6237\u4E3A\u5728\u7EBF\u72B6\u6001"); // 在认证页面用户为在线状态则跳转到成功页面

                            if (!_this3.online) return _this3.toSuccess(); // String 用户 Mac 地址

                            _this3.userInfo.mac = res.user_mac; // String 用户账号 (不会携带域)

                            _this3.userInfo.username = res.user_name; // String 真实姓名

                            _this3.userInfo.realname = res.real_name; // String 用户域 Ex:域为账号 xingrong@cmcc 中的 @cmcc

                            _this3.userInfo.domain = res.domain ? "@".concat(res.domain) : ''; // String 产品名称

                            _this3.userInfo.productName = res.products_name; // String 产品 ID

                            _this3.userInfo.productId = res.products_id; // String 计费策略名称

                            _this3.userInfo.billingName = res.billing_name; // String 在线设备数量

                            _this3.userInfo.deviceTotal = "".concat(res.online_device_total, "\u53F0"); // Number 余额

                            _this3.userInfo.balance = res.user_balance.toFixed(2); // Number 结算日期

                            _this3.userInfo.checkoutDate = res.checkout_date; // Number 已用流量 B

                            _this3.userInfo.usedFlow = _this3.formatFlow(res.sum_bytes, _this3.portalInfo.flowMode); // Number已用时长 s

                            _this3.userInfo.usedTime = _this3.formatTime(res.sum_seconds); // 显示用户在线信息

                            _classPrivateFieldGet(_this3, _showInfo).call(_this3);

                            $("#real-name").html(_this3.userInfo.username); // 若传入在线回调函数，则执行回调函数

                            if (obj.online) obj.online(res);
                        },
                        error: function error(res) {
                            Portal.prototype.setLog("\u7528\u6237\u4E3A\u79BB\u7EBF\u72B6\u6001"); // 在成功页面用户为离线状态则跳转到认证页面

                            if (_this3.online) return _this3.toIndex(); // 若传入离线回调函数，则执行回调函数

                            if (obj.offline) obj.offline(res);
                            if (res.error !== 'not_online_error') _this3.confirm(_this3.translate(res));
                        }
                    });
                }, lazyTime);
            }
        /**
         * Portal 消息格式转换
         * @method
         * @param   {String}    message        需要转换的字符串
         */

    }, {
        key: "formatConversion",
        value: function formatConversion(message) {
            message = message.replace(/(_|, | |^)\S/g, function (s) {
                return s.replace(/(_|, | )/, '').toUpperCase();
            }).replace(/\./g, '');
            return message;
        }
        /**
         * 使用充值缴费功能
         * @method
         */

    }, {
        key: "usePay",
        value: function usePay() {
            var config = {
                api: {
                    prodList: '/v1/products',
                    prodNow: '/v1/srun_product',
                    prodChange: '/v1/srun_products_recharge',
                    pay: '/v1/pay/alipay',
                    payStatus: '/v1/pay/status'
                },
                priceList: this.config.priceList.Prices.split(','),
                inputPriceDef: Number(this.config.priceList.Default),
                checkTime: 30,
                wechat: Portal.mobile ? 'wechat' : 'wechat_native',
                alipay: Portal.mobile ? 'alipay' : 'alipay_native'
            };
            Portal.prototype.setLog("\u542F\u7528\u5145\u503C\u7F34\u8D39\uFF0C\u914D\u7F6E\u4E3A", config);

            _classPrivateFieldGet(this, _panelPay).call(this, config);
        }
        /**
         * 使用忘记密码功能
         * @method
         */

    }, {
        key: "useForget",
        value: function useForget() {
            var _this4 = this;

            var dom = "\n        <div class=\"change-password\">\n            <div class=\"row\">\n                <label for=\"dialog-username\"></label>\n                <input class=\"input-text\" type=\"text\" id=\"dialog-username\" placeholder=\"".concat(this.translate('EnterUsername'), "\"/>\n            </div>\n            <div class=\"row\" style=\"display: ").concat(CREATER.portalChange.length === 1 ? 'none' : 'block', "\">\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn-radio pass\" data-method=\"pass\">").concat(this.translate('CheckByPass'), "</button>\n                    <button type=\"button\" class=\"btn-radio sms active\" data-method=\"sms\">").concat(this.translate('CheckBySms'), "</button>\n                    <button type=\"button\" class=\"btn-radio mail\" data-method=\"mail\">").concat(this.translate('CheckByMail'), "</button>\n                </div>\n            </div>\n            <div class=\"row vcode-pass\" style=\"display: none\">\n                <label for=\"dialog-vcode-pass\"></label>\n                <input class=\"input-text input-vcode\" type=\"password\" id=\"dialog-vcode-pass\" placeholder=\"").concat(this.translate('EnterPassOld'), "\"/>\n            </div>\n            <div class=\"row vcode-sms\">\n                <label for=\"dialog-vcode-sms\"></label>\n                <input class=\"input-text input-vcode\" type=\"password\" id=\"dialog-vcode-sms\" placeholder=\"").concat(this.translate('EnterVcodeSms'), "\"/>\n                <button type=\"button\" class=\"btn-get-vcode btn-sms\">").concat(this.translate('GetVcodeSms'), "</button>\n            </div>\n            <div class=\"row vcode-mail\" style=\"display: none\">\n                <label for=\"dialog-vcode-mail\"></label>\n                <input class=\"input-text input-vcode\" type=\"password\" id=\"dialog-vcode-mail\" placeholder=\"").concat(this.translate('EnterVcodeMail'), "\"/>\n                <button type=\"button\" class=\"btn-get-vcode btn-mail\">").concat(this.translate('GetVcodeMail'), "</button>\n            </div>\n            <div class=\"row\">\n                <label for=\"dialog-password-new\"></label>\n                <input class=\"input-text\" type=\"password\" id=\"dialog-password-new\" placeholder=\"").concat(this.translate('EnterPassNew'), "\"/>\n            </div>\n            <div class=\"row\">\n                <label for=\"dialog-password-repeat\"></label>\n                <input class=\"input-text\" type=\"password\" id=\"dialog-password-repeat\" placeholder=\"").concat(this.translate('EnterPassAgain'), "\"/>\n            </div>\n        </div>"); // 清空对话框

            var closeDialog = function closeDialog() {
                _this4.setLog('关闭了修改密码面板');

                _this4.dialog.close('changePassword');

                $('.change-password input').val('');
            }; // 获取验证码


            var getVcode = function getVcode(method, username) {
                _this4.setLog('获取修改密码的短信验证码');

                _this4.ajax.get({
                    url: _classPrivateFieldGet(_this4, _api).getPassVcode,
                    params: {
                        // '0' 手机 '1' 邮箱
                        way: method === 'sms' ? '0' : '1',
                        user_name: username
                    },
                    success: function success(res) {
                        _this4.setLog('短信验证码获取成功');

                        _this4.confirm(_this4.translate(res));

                        var time = 60;

                        _this4.setLog("\u5F00\u59CB\u65F6\u957F\u4E3A ".concat(time, " \u79D2\u7684\u5012\u8BA1\u65F6\uFF0C\u671F\u95F4\u7981\u6B62\u591A\u6B21\u83B7\u53D6\u9A8C\u8BC1\u7801"));

                        var timer = setInterval(function () {
                            $('.change-password .btn-get-vcode').attr('data-status', 'disable').html(time + _this4.translate('SendAgain'));
                            time -= 1;

                            if (time === 0) {
                                if (method === 'sms') $('.change-password .btn-get-vcode.btn-sms').attr('data-status', '').html(_this4.translate('GetVcodeSms'));
                                if (method === 'mail') $('.change-password .btn-get-vcode.btn-mail').attr('data-status', '').html(_this4.translate('GetVcodeMail'));
                                clearInterval(timer);

                                _this4.setLog("\u5012\u8BA1\u65F6\u7ED3\u675F\uFF0C\u91CD\u65B0\u5141\u8BB8\u83B7\u53D6\u4FEE\u6539\u5BC6\u7801\u7684\u77ED\u4FE1\u9A8C\u8BC1\u7801");
                            }
                        }, 1000);
                    },
                    error: function error(res) {
                        _this4.setLog("\u77ED\u4FE1\u9A8C\u8BC1\u7801\u83B7\u53D6\u5931\u8D25");

                        _this4.confirm(_this4.translate(res));
                    }
                });
            }; // 使用旧密码修改密码


            var changePassByPass = function changePassByPass(params) {
                _this4.setLog("\u4F7F\u7528\u65E7\u5BC6\u7801\u4FEE\u6539\u5BC6\u7801");

                if (!params.vcodePass) return _this4.confirm(_this4.translate('ErrPassOld'));

                _this4.ajax.post({
                    url: _classPrivateFieldGet(_this4, _api).changeByPass,
                    params: {
                        user_name: params.username,
                        old_password: params.vcodePass,
                        new_password: params.password,
                        re_password: params.repeat
                    },
                    success: function success(res) {
                        _this4.setLog("\u5BC6\u7801\u4FEE\u6539\u6210\u529F");

                        _this4.confirm(_this4.translate(res));

                        closeDialog();
                    },
                    error: function error(res) {
                        _this4.setLog.err("\u5BC6\u7801\u4FEE\u6539\u5931\u8D25");

                        _this4.confirm(_this4.translate(res));
                    }
                });
            }; // 使用验证码修改密码


            var changePassByVcode = function changePassByVcode(params) {
                var vcode = params.method === 'sms' ? params.vcodeSMS : params.vcodeMail;
                if (!vcode) return _this4.confirm(_this4.translate('ErrVcodeBlank'));

                _this4.setLog("\u4F7F\u7528\u9A8C\u8BC1\u7801\u4FEE\u6539\u5BC6\u7801", params.method === 'sms' ? '短信' : '邮箱');

                _this4.ajax.post({
                    url: _classPrivateFieldGet(_this4, _api).changeByVcode,
                    params: {
                        user_name: params.username,
                        // '0' 手机 '1' 邮箱
                        way: params.method === 'sms' ? '0' : '1',
                        code: vcode,
                        new_password: params.password
                    },
                    success: function success(res) {
                        _this4.setLog("\u5BC6\u7801\u4FEE\u6539\u6210\u529F");

                        _this4.confirm(_this4.translate(res));

                        closeDialog();
                    },
                    error: function error(res) {
                        _this4.setLog.err("\u5BC6\u7801\u4FEE\u6539\u5931\u8D25");

                        _this4.confirm(_this4.translate(res));
                    }
                });
            }; // 对话框中事件


            var event = function event() {
                var that = _this4; // 切换密码验证方式

                $('.change-password .btn-group .btn-radio').click(function () {
                    var method = $(this).attr('data-method');
                    $('.change-password .btn-group .btn-radio').removeClass('active');
                    $(this).addClass('active');
                    $('.change-password .input-vcode').val('');

                    if (method === 'pass') {
                        that.setLog("\u4FEE\u6539\u5BC6\u7801\u65B9\u5F0F\u66F4\u6362\u4E3A\u4F7F\u7528\u65E7\u5BC6\u7801\u4FEE\u6539");
                        $('.promt .header').html(that.translate('ChangePass'));
                        $('#dialog-vcode-pass').parents('.row').show();
                        $('#dialog-vcode-sms').parents('.row').hide();
                        $('#dialog-vcode-mail').parents('.row').hide();
                    }

                    if (method === 'sms') {
                        that.setLog("\u4FEE\u6539\u5BC6\u7801\u65B9\u5F0F\u66F4\u6362\u4E3A\u4F7F\u7528\u77ED\u4FE1\u9A8C\u8BC1\u7801\u4FEE\u6539");
                        $('.promt .header').html(that.translate('ChangePass'));
                        $('#dialog-vcode-pass').parents('.row').hide();
                        $('#dialog-vcode-sms').parents('.row').show();
                        $('#dialog-vcode-mail').parents('.row').hide();
                    }

                    if (method === 'mail') {
                        that.setLog("\u4FEE\u6539\u5BC6\u7801\u65B9\u5F0F\u66F4\u6362\u4E3A\u4F7F\u7528\u90AE\u7BB1\u9A8C\u8BC1\u7801\u4FEE\u6539");
                        $('.promt .header').html(that.translate('ChangePass'));
                        $('#dialog-vcode-pass').parents('.row').hide();
                        $('#dialog-vcode-sms').parents('.row').hide();
                        $('#dialog-vcode-mail').parents('.row').show();
                    }
                }); // 根据数组长度修改按钮宽度样式

                if (CREATER.portalChange.length === 2) {
                    $('.change-password .btn-radio').css('width', '50%');
                }

                if (CREATER.portalChange.length === 1) {
                    $('.change-password .btn-radio').css('width', '100%');
                } // portal 找回\修改密码方式


                if (!CREATER.portalChange.includes('pass')) {
                    $('.change-password .pass').hide();
                }

                if (!CREATER.portalChange.includes('sms')) {
                    $('.change-password .sms').hide();
                }

                if (!CREATER.portalChange.includes('mail')) {
                    $('.change-password .mail').hide();
                } // portal 默认找回密码方式


                if (CREATER.defaultMethod === 'pass') {
                    $('.change-password .pass')[0].click();
                }

                if (CREATER.defaultMethod === 'sms' + '') {
                    $('.change-password .sms')[0].click();
                }

                if (CREATER.defaultMethod === 'mail') {
                    $('.change-password .mail')[0].click();
                } // 获取验证码


                $('.change-password .btn-get-vcode').click(function () {
                    if ($(this).attr('data-status') === 'disable') return;
                    var method = $('.change-password .btn-group .btn-radio.active').attr('data-method');
                    var username = $('#dialog-username').val();
                    if (!username) return that.confirm(that.translate('ErrUserBlank'));
                    getVcode(method, username);
                });
            }; // 创建对话框


            this.dialog.create({
                name: 'changePassword',
                title: this.translate('ForgetPass'),
                dom: dom,
                event: event,
                confirm: function confirm() {
                    _this4.setLog("\u51C6\u5907\u63D0\u4EA4\u4FEE\u6539\u5BC6\u7801\u8BF7\u6C42");

                    var params = {
                        method: $('.change-password .btn-group .btn-radio.active').attr('data-method'),
                        username: $('#dialog-username').val(),
                        vcodePass: $('#dialog-vcode-pass').val(),
                        vcodeSMS: $('#dialog-vcode-sms').val(),
                        vcodeMail: $('#dialog-vcode-mail').val(),
                        password: $('#dialog-password-new').val(),
                        repeat: $('#dialog-password-repeat').val()
                    }; // 账号不能为空

                    if (!params.username) return _this4.confirm(_this4.translate('ErrUserBlank')); // 新密码不能为空

                    if (!params.password) return _this4.confirm(_this4.translate('ErrPassBlank')); // 校验两次密码是否输入相同

                    if (params.password !== params.repeat) return _this4.confirm(_this4.translate('ErrPassRepeat')); // 使用原密码修改密码

                    if (params.method === 'pass') return changePassByPass(params); // 使用验证码修改密码

                    if (params.method !== 'pass') return changePassByVcode(params);
                },
                cancel: function cancel() {
                    _this4.setLog("\u53D6\u6D88\u4FEE\u6539\u5BC6\u7801");

                    $('#dialog-username').val('');
                    $('#dialog-vcode-pass').val('');
                    $('#dialog-vcode-sms').val('');
                    $('#dialog-vcode-mail').val('');
                    $('#dialog-password-new').val('');
                    $('#dialog-password-repeat').val('');
                    $('.change-password .vcode-pass').hide();
                    $('.change-password .vcode-sms').hide();
                    $('.change-password .vcode-mail').hide();
                    if (CREATER.defaultMethod === 'pass') $('.change-password .vcode-pass').show();
                    if (CREATER.defaultMethod === 'sms') $('.change-password .vcode-sms').show();
                    if (CREATER.defaultMethod === 'mail') $('.change-password .vcode-mail').show();
                    $('.change-password .btn-group .btn-radio').removeClass('active');
                    $(".change-password .btn-group .btn-radio.".concat(CREATER.defaultMethod)).addClass('active');
                }
            });
        }
        /**
         * 使用在线设备管理功能
         * @method
         */

    }, {
        key: "useOnlineDeviceMgr",
        value: function useOnlineDeviceMgr() {
            var _this5 = this;

            var dom = "\n            <div class=\"online-device-manager\">\n                <table>\n                    <thead>\n                        <th>#</th>\n                        <th>".concat(this.translate('Username'), "</th>\n                        <th>IP</th>\n                        <th>").concat(this.translate('ClientType'), "</th>\n                        <th>").concat(this.translate('System'), "</th>\n                        <th>").concat(this.translate('AddTime'), "</th>\n                        <th>").concat(this.translate('Operate'), "</th>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");

            var event = function event() {
                var that = _this5;
                $(document).on('click', '.online-device-manager .btn-logout', function () {
                    _classPrivateFieldGet(that, _logoutDm).call(that, {
                        ip: $(this).attr('data-ip'),
                        success: function success(res) {
                            that.confirm({
                                message: that.translate('Success'),
                                confirm: function confirm() {
                                    that.getOnlineDevice();
                                }
                            });
                        }
                    });
                });
            }; // 创建对话框


            this.dialog.create({
                name: 'onlineDeviceMgr',
                title: this.translate('OnlineDeviceManager'),
                dom: dom,
                event: event,
                cancelText: this.translate('Close'),
                cancel: function cancel() {
                    _this5.setLog("\u53D6\u6D88\u5728\u7EBF\u8BBE\u5907\u7BA1\u7406");
                }
            });
        }
        /**
         * 获取最新协议
         * @method
         */

    }, {
        key: "getProtocol",
        value: function getProtocol() {
            var _this6 = this;

            this.setLog("\u83B7\u53D6\u6700\u65B0\u4F7F\u7528\u534F\u8BAE"); // 8081 配置未开启使用协议功能，则不获取最新协议

            if (!this.config.portal.UserAgreeSwitch) return; // 如果当前页面是认证成功页面、微信页面、单点登录页面、扫码页面时，则不获取最新协议

            if (['success', 'wechat', 'sso', 'qrcode'].includes(this.config.page)) return; // 协议类型默认为普通用户 (普通用户为 1，访客为 2)

            var type = 1; // 邀请码认证，协议类型为访客

            if (this.config.page === 'token') type = 2; // 短信认证且短信类型为访客，协议类型为访客

            if (this.config.page === 'smsPhone' && CREATER.SMSVisitor) type = 2;
            this.ajax.get({
                url: _classPrivateFieldGet(this, _api).protocol,
                params: {
                    agree_type: type
                },
                success: function success(res) {
                    _this6.setLog("\u4F7F\u7528\u534F\u8BAE\u83B7\u53D6\u6210\u529F"); // 请求成功时，将返回的值保存在 portalInfo.protocol 对象中


                    _this6.portalInfo.protocol = {
                        // 最新协议 ID
                        id: res.data.id,
                        // 最新协议 标题
                        title: res.data.title,
                        // 最新协议 内容
                        content: res.data.content
                    }; // 通过 Cookie 判断已经同意过最新协议，则为同意协议打钩

                    if (JSON.parse(_this6.getCookie('protocol') || '[]').includes(_this6.portalInfo.protocol.id)) $('#protocol').prop('checked', true);
                },
                error: function error(res) {
                    _this6.setLog.err("\u4F7F\u7528\u534F\u8BAE\u83B7\u53D6\u5931\u8D25");

                    _this6.confirm(_this6.translate(res));
                }
            });
        }
        /**
         * 同意最新协议
         * @method
         */

    }, {
        key: "agreeProtocol",
        value: function agreeProtocol(callback) {
            var _this7 = this;

            // 判断当前是账号登录还是短信
            this.ajax.post({
                url: _classPrivateFieldGet(this, _api).agreeProtocol,
                params: {
                    agree_id: this.portalInfo.protocol.id,
                    user_name: this.userInfo.username || this.userInfo.phone
                },
                success: function success(res) {
                    // 将最新协议的 id 增加到用户已经同意协议的数组中
                    _this7.userInfo.agreedList.push(_this7.portalInfo.protocol.id); // 更新 cookie 缓存


                    _this7.setCookie('protocol', JSON.stringify(_this7.userInfo.agreedList));

                    if (callback) callback(res);
                },
                error: function error(res) {
                    return _this7.confirm(_this7.translate(res));
                }
            });
        }
        /**
         * 新增认证方式
         * @method
         */

    }, {
        key: "newCertification",
        value: function newCertification() {
            if (CREATER.authentication.length) {
                var html = '';
                CREATER.authentication.forEach(function (item) {
                    html += "\n                    <div class=\"panel-row-item login-mode mode-add\" data-mode=\"add\">\n                        <a href=".concat(item.authHref, " class=\"add-href\" target=\"_blank\">\n                            <i class=\"icon ionicons ion-ios-link\"></i>\n                            ").concat(item.authName, "\n                        </a>\n                    </div>\n                ");
                });
                $(".login-addmode").append(html);
            }
        }
        /**
         * 读取 Portal 通知
         * @method
         * @param   {Boolean}   option.alert    点击通知的展现方式
         * @param   {Boolean}   option.index    通知是否显示索引
         * @param   {String}    option.time     通知时间显示类型
         */

    }, {
        key: "getNotice",
        value: function getNotice(option) {
            var _this8 = this;

            this.setLog("\u83B7\u53D6\u901A\u77E5\u6D88\u606F");
            this.ajax.get({
                url: _classPrivateFieldGet(this, _api).notice,
                success: function success(res) {
                    _this8.setLog("\u83B7\u53D6\u901A\u77E5\u6D88\u606F\u6210\u529F"); // 若没有通知内容，则不显示通知模块


                    if (!res.data.length) return; // 延迟 .5s 显示，防止高度错位

                    setTimeout(function () {
                        // 通知模块高度与认证模块相同
                        $('.panel-notice').show().height($('.panel-login').height()); // 若通知总条数为一条 或 通知类型为单条显示
                        // TODO: 此处不判断 MsgApi，需验证是否可行，若可行，需验证 app.conf 是否可以移除 MsgApi 参数

                        if (_this8.portalInfo.noticeType === 'one' || res.data.length === 1) {
                            $('#notice-title').html(res.data[0].msg_head || res.data[0].Title);
                            $('#notice-content').html(res.data[0].msg_con || res.data[0].Content);
                        } // 若通知类型为列表显示


                        if (_this8.portalInfo.noticeType === 'list' && res.data.length !== 1) _classPrivateFieldGet(_this8, _createNoticeList).call(_this8, res.data, option);
                    }, 500);
                },
                error: function error(res) {
                    _this8.setLog.err("\u83B7\u53D6\u901A\u77E5\u6D88\u606F\u5931\u8D25");

                    _this8.translate(res);

                    return;
                }
            });
        }
        /**
         * 用户认证
         * @method
         * @param   {String}    obj.type        认证方式
         * @param   {String}    obj.host        若传入对象中存在参数 host，则代表进行双栈登录
         * @param   {Success}   obj.success     认证成功回调函数
         * @param   {Error}     obj.error       认证失败回调函数
         */

    }, {
        key: "login",
        value: function login() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.setLog('正在进行登陆操作'); // 默认进行拦截

            if (obj.intercept === undefined) obj.intercept = true; // 如果管理员未开启使用协议功能，则不进行拦截

            if (!this.config.portal.UserAgreeSwitch) obj.intercept = false; // 若认证方式为不需要使用协议的认证，则不进行拦截

            if (['wechat', 'sso', 'qrcode', 'cisco'].includes(obj.type)) obj.intercept = false; // 拦截认证，查询用户是否同意过最新协议

            if (obj.intercept) {
                if (!$('#protocol').prop('checked')) return this.confirm(this.translate('ReadAgreement'));
            } // 登录防抖


            if (this.running.login) {
                this.setLog('触发登陆防抖进行拦截（短时间内多次进行登陆操作）');
                return;
            } // 更改登录状态为进行中


            this.running.login = true; // 账号认证

            if (obj.type === 'account') {
                // v1.7.1 判断是否为代拨
                if (this.config.portal.DialSwitch) return _classPrivateFieldGet(this, _getAgentDialLog).call(this, obj); // 若未开启代拨，则正常认证

                _classPrivateFieldGet(this, _loginAccount).call(this, obj);
            } // 短信认证 - 手机短信


            if (obj.type === 'sms' && this.config.page === 'smsPhone') _classPrivateFieldGet(this, _loginPhoneSMS).call(this, obj); // 短信认证 - 账号短信

            if (obj.type === 'sms' && this.config.page === 'smsAccount') _classPrivateFieldGet(this, _loginAccountSMS).call(this, obj); // 微信扫码认证

            if (obj.type === 'wechat') _classPrivateFieldGet(this, _loginWechat).call(this); // OTP 认证

            if (obj.type === 'otp') _classPrivateFieldGet(this, _loginOtp).call(this, obj); // Cisco 认证

            if (obj.type === 'cisco') _classPrivateFieldGet(this, _loginCisco).call(this, obj);
        }
        /**
         * 发送短信验证码
         * @method
         */

    }, {
        key: "sendVCode",
        value: function sendVCode(obj) {
            this.setLog('准备发送短信验证码'); // 登录防抖

            if (this.running.sendSMS) {
                this.setLog('短时间内禁止大量发送短信验证码');
                return;
            } // 更改登录状态为进行中


            this.running.sendSMS = true; // 发送短信验证码 - 手机号码

            if (this.config.page === 'smsPhone' || this.config.page === 'cisco') _classPrivateFieldGet(this, _sendVcodePhone).call(this, obj); // 发送短信验证码 - 账号绑定的手机号码

            if (this.config.page === 'smsAccount') _classPrivateFieldGet(this, _sendVcodeAccount).call(this, obj);
        }
        /**
         * 重新认证
         * @method
         * @param   {Object}    obj             认证参数
         */

    }, {
        key: "reAuth",
        value: function reAuth(obj) {
            var _this9 = this;

            this.setLog('重新发起认证请求');
            this.logout({
                success: function success() {
                    return _this9.login(obj);
                }
            });
        }
        /**
         * 高并发预案
         * @method
         * @param   {String}    url             跳转地址
         */

    }, {
        key: "highBurstPlan",
        value: function highBurstPlan(url) {
            var _this10 = this;

            this.setLog('触发高并发预案');
            this.confirm({
                message: "".concat(this.translate('HighBurstPlan'), " ").concat(url),
                confirm: function confirm() {
                    location.href = url;
                },
                cancel: function cancel() {
                    _this10.toSuccess();
                }
            });
        }
        /**
         * 查询 Portal 日志
         * @method
         */

    }, {
        key: "showLog",
        value: function showLog() {
            var _this11 = this;

            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.setLog('无响应数据，准备查询 Portal 日志');
            this.ajax.get({
                url: _classPrivateFieldGet(this, _api).log,
                params: {
                    username: this.userInfo.username
                },
                success: function success(res) {
                    _this11.setLog('Portal 日志查询成功'); // 若传入回调函数，优先执行回调


                    if (obj.success) return obj.success(res); // 若 ecode 为 E2620 且开启了在线设备管理功能
                    // E2620: 超出允许的在线数目

                    if (res.message.startsWith('E2620') && CREATER.useOnlineDeviceMgr) {
                        _this11.setLog('触发在线设备管理功能');

                        return _this11.confirm({
                            message: _this11.translate('E2620Tips'),
                            confirm: function confirm() {
                                _this11.setLog('开启在线设备管理面板');

                                _this11.dialog.open('onlineDeviceMgr', function () {
                                    _this11.getOnlineDevice();
                                });
                            }
                        });
                    }

                    _this11.confirm(_this11.translate(res));
                },
                error: function error(res) {
                    _this11.setLog.err('Portal 日志查询失败'); // 若传入回调函数，优先执行回调


                    if (obj.error) return obj.error(res);

                    _this11.confirm(_this11.translate(res));
                }
            });
        }
        /**
         * 用户注销
         * @method
         * @param   {String}    obj.host        若传入对象中存在参数 host，则代表进行双栈注销
         * @param   {Success}   obj.success     注销成功回调函数
         * @param   {Error}     obj.error       注销失败回调函数
         */

    }, {
        key: "logout",
        value: function logout() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.setLog('进行用户注销操作');
            this.config.portal.MacAuth ? _classPrivateFieldGet(this, _logoutDm).call(this, obj) : _classPrivateFieldGet(this, _logoutNormal).call(this, obj);
        }
        /**
         * 重定向至 Index
         * @method
         */

    }, {
        key: "toIndex",
        value: function toIndex() {
            var url = './index_' + this.portalInfo.acid + '.html';
            this.setLog('返回到 Portal index 页面，地址为', url);
            location.href = url;
        }
        /**
         * 重定向至成功页面
         * @method
         */

    }, {
        key: "toSuccess",
        value: function toSuccess() {
            var _location = location,
                protocol = _location.protocol,
                search = _location.search; // v4 认证地址

            var authV4 = this.config.portal.AuthIP; // v6 认证地址

            var authV6 = this.config.portal.AuthIP6 ? "[".concat(this.config.portal.AuthIP6, "]") : '';
            var url = !authV4 && !authV6 ? "./srun_portal_success".concat(search) : "".concat(protocol, "//").concat(this.config.isIPV6 ? authV6 : authV4, "/srun_portal_success").concat(search);
            this.setLog('重定向到认证成功页面', url); // 重定向成功页面

            location.href = url;
        }
        /**
         * 重定向至 8800 自助服务系统
         * @method
         */

    }, {
        key: "toSelfService",
        value: function toSelfService(route) {
            this.setLog('重定向到自服务页面，传入路由为', route); // 若传入路由，则跳转至自助服务对应路由

            if (route) return window.open(this.portalInfo.selfServiceIp + route); // 克隆自 $.base64，防止污染

            var base64 = this.clone($.base64); // base64 设置 Alpha

            base64.setAlpha('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'); // 用户信息

            var _this$userInfo = this.userInfo,
                username = _this$userInfo.username,
                password = _this$userInfo.password; // Portal 信息

            var lang = this.portalInfo.lang; // 单点登录数据

            var data = ''; // 若只有账号

            if (username && !password) data = base64.encode(lang); // 若存在账号与密码

            if (username && password) data = base64.encode(lang + ':' + username + ':' + md5(password)); // 若为在线状态

            if (this.online) data = base64.encode(lang + ':' + username);
            var url = this.portalInfo.selfServiceIp + '/site/sso?data=' + data;
            this.setLog('自服务地址拼接', url); // 开启页面

            window.open(url);
        }
        /**
         * 翻译请求响应消息
         * @method
         * @param   {String|Object}    res             要翻译的消息 或 请求响应参数
         * @return  {String}                           请求响应信息翻译结果
         */

    }, {
        key: "translate",
        value: function (_translate) {
            function translate(_x) {
                return _translate.apply(this, arguments);
            }

            translate.toString = function () {
                return _translate.toString();
            };

            return translate;
        }(function (res) {
                var that = this; // 若传入的是字符串则直接翻译

                if (typeof res === 'string') return translateStr(res); // 使用 error 码的请求

                if (res.error !== undefined && res.code === undefined) return translateError(); // 使用 code 码的请求

                if (res.error === undefined && res.code !== undefined) return translateCode(); // 翻译使用 code 码的请求

                function translateCode() {
                    var code = res.code,
                        message = res.message; // 若存在 ploy_msg 且 ploy_msg 不以 E0000 开头

                    if (res.ploy_msg && !res.ploy_msg.startsWith('E0000')) return translateStr(res.ploy_msg); // 在存在 message 的情况下使用 message 进行翻译

                    if (message) return translateStr(message); // 否则对 code 码进行翻译

                    if (code === 0) return translateStr('Success');
                    if (code !== 1) return translateStr('Error');
                } // 翻译使用 error 码的请求


                function translateError() {
                    var error = res.error,
                        ecode = res.ecode,
                        error_msg = res.error_msg; // 若存在 ploy_msg 且 ploy_msg 不以 E0000 开头

                    if (res.ploy_msg && !res.ploy_msg.startsWith('E0000')) return translateStr(res.ploy_msg); // 若 ecode 码为 E2901，则直接使用 error_msg 进行翻译

                    if (ecode === 'E2901') return translateStr(error_msg); // 优先使用 ecode 码进行翻译

                    if (ecode) return translateStr(ecode); // 否则使用格式化后的 error_msg 进行翻译

                    if (error_msg) return translateStr(error_msg); // 连 error_msg 都不存在则对操作状态进行翻译

                    if (!error_msg) return translateStr(error);
                } // 特殊错误：message 以 E + 四个数字的 ecode 码类型开头，且不为 E2901


                function specialErr(message) {
                    if (message.startsWith('E2901')) return false;
                    return message.startsWith('E') && Number(message.substring(1, 5));
                } // 翻译字符串


                function translateStr(str) {
                    // 若 message 以 E1111 这种形式开头
                    if (specialErr(str)) str = str.substring(0, 5); // 若 lang.js 中无法翻译则原样显示

                    return translate[that.portalInfo.lang][that.formatConversion(str)] || str;
                }
            }
            /**
             * 记住密码功能
             * @method
             * @param   {Boolean}   action          是否记住密码
             * @param   {Number}    day             记住密码天数 (默认 7 天)
             */
        )
    }, {
        key: "remember",
        value: function remember(action) {
            var day = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;

            // 若动作为记住密码
            if (action) {
                // 用户信息
                var info = {
                    username: this.userInfo.username,
                    password: this.userInfo.password
                }; // 克隆自 $.base64，防止污染

                var base64 = this.clone($.base64); // base64 设置 Alpha

                base64.setAlpha('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'); // 设置 Cookie

                this.setCookie('remember', base64.encode(JSON.stringify(info)), day);
            } // 若动作为取消记住密码，则清除 Cookie


            if (!action) this.delCookie('remember');
        }
        /**
         * 更换语言
         * @method
         * @param   {String}    lang            传入语言 zh-CN | en-US
         */

    }, {
        key: "changeLang",
        value: function changeLang() {
            var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.portalInfo.lang;
            if (lang === 'default') return;
            this.setLog('语言更换为', lang);
            document.cookie = "lang=" + lang + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            location.reload();
        }
        /**
         * 设置 Portal 请求头
         * @method
         * @param   {Object}    obj             要增加的请求头
         */

    }, {
        key: "setRequestHead",
        value: function setRequestHead() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.requestHead = Object.assign(this.requestHead, obj);
        }
        /**
         * Portal 请求
         */

    }, {
        key: "vcodeCountdown",
        value:
            /**
             * 短信验证码倒计时
             * @method
             * @param   {Object}    btn             jQuery 选择的倒计时按钮
             * @param   {Number}    time            倒计时时长，默认 60
             */
            function vcodeCountdown(btn) {
                var _this12 = this;

                var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
                var timer = setInterval(function () {
                    btn.attr('data-status', 'disable').html(time + _this12.translate('SendAgain'));
                    time -= 1;

                    if (time === 0) {
                        btn.attr('data-status', '').html(_this12.translate('GetVerifyCode'));
                        clearInterval(timer);
                    }
                }, 1000);
            }
        /**
         * 获取账号在线设备
         */

    }, {
        key: "getOnlineDevice",
        value: function getOnlineDevice() {
            var _this13 = this;

            this.setLog('获取账号当前的在线设备');
            $('.online-device-manager tbody').html('');
            this.ajax.get({
                url: _classPrivateFieldGet(this, _api).getOnlineDevice,
                params: {
                    user_name: this.userInfo.username + this.userInfo.domain,
                    password: md5(this.userInfo.password)
                },
                success: function success(res) {
                    _this13.setLog("\u5728\u7EBF\u8BBE\u5907\u83B7\u53D6\u6210\u529F");

                    var tbod = '';
                    res.data.forEach(function (item, index) {
                        tbod += "\n                        <tr>\n                            <td>".concat(index + 1, "</td>\n                            <td>").concat(item.user_name, "</td>\n                            <td>").concat(item.ip, "</td>\n                            <td>").concat(_classPrivateFieldGet(_this13, _clientTypeHandle).call(_this13, item.client_type), "</td>\n                            <td>").concat(item.os_name, "</td>\n                            <td>").concat(item.add_time, "</td>\n                            <td>\n                                <button type=\"button\" class=\"btn-logout\" data-ip=\"").concat(item.ip, "\">").concat(_this13.translate('Logout'), "</button>\n                            </td>\n                        </tr>\n                        ");
                    });
                    $('.online-device-manager tbody').html(tbod);
                },
                error: function error(res) {
                    _this13.setLog.err("\u5728\u7EBF\u8BBE\u5907\u83B7\u53D6\u5931\u8D25");

                    _this13.confirm(res);
                }
            });
        }
        /**
         * AC 多重定向
         * @method
         * @param   {String}    action          重定向方式 open || href
         * @param   {Function}  callback        回调函数
         */

    }, {
        key: "acDetect",
        value: function acDetect() {
            var _this14 = this;

            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'href';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            };
            this.setLog("\u83B7\u53D6 8081 AC \u591A\u91CD\u5B9A\u5411\u914D\u7F6E");
            this.ajax.get({
                url: _classPrivateFieldGet(this, _api).acDetect,
                success: function success(res) {
                    _this14.setLog("AC \u591A\u91CD\u5B9A\u5411\u914D\u7F6E\u83B7\u53D6\u6210\u529F");

                    var url = ''; // 当前设备存在重定向地址

                    if (Portal.mobile && res.Mobile) url = res.Mobile;
                    if (!Portal.mobile && res.Pc) url = res.Pc; // 若后端未开启或无 URL

                    if (!res.Redirect || !url) return callback(); // 根据配置进行不同方式重定向

                    if (action === 'open') return window.open(url);
                    if (action === 'href') return location.href = url;
                },
                error: function error(res) {
                    _this14.setLog.err("AC \u591A\u91CD\u5B9A\u5411\u914D\u7F6E\u83B7\u53D6\u5931\u8D25");

                    _this14.confirm(res);
                }
            });
        }
        /**
         * 写入日志
         * @method
         * @param   {String}    name    名称
         * @param   {String}    message 消息
         * @param   {String}    action  行为
         */

    }, {
        key: "setLog",
        value: function setLog(name) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Info';
            if (!Portal.debugMode) return;
            var time = this.formatDate(Date.now(), 'yyyy-MM-dd HH:mm:ss');
            action = " ".concat(action.padEnd(5, ' '), " ");
            message = message === '' ? '' : ' ' + JSON.stringify(message);
            Portal.debugLog.push(time + action + name + message);
            localStorage.setItem('debugLog', JSON.stringify(Portal.debugLog));
        } // **************************************************    Private Config   ************************************************** //

        /**
         * API 接口
         * @private
         */

    }], [{
        key: "redirect",
        value:
            /**
             * Portal 重定向
             * @method
             * @static
             * @param   {String}    url             重定向到的 portal 地址
             */
            function redirect(url) {
                Portal.prototype.setLog("\u7531 ".concat(location.href, " \u91CD\u5B9A\u5411\u5230\u8DEF\u7531"), url);
                if (url === '/srun_portal_sso') window.open(url + location.search);
                if (url !== '/srun_portal_sso') location.href = url + location.search;
            }
        /**
         * Portal 消息格式转换
         * @method
         * @static
         * @param   {String}    obj.message        需要转换的字符串
         * @param   {String}    obj.zh             字符串中文翻译
         * @param   {String}    obj.en             字符串英文翻译
         */

    }, {
        key: "translateHelper",
        value: function translateHelper(obj) {
            var str = Portal.prototype.formatConversion(obj.message);
            translate['zh-CN'][str] = obj.zh;
            translate['en-US'][str] = obj.en;
            var langContent = 'var translate = ' + JSON.stringify(translate);
            Portal.funDownload('lang.js', langContent);
        }
        /**
         * 浏览器下载文件
         * @method
         * @static
         * @param   {String}    filename       文件名称
         * @param   {String}    content        下载文件内容
         */

    }, {
        key: "funDownload",
        value: function funDownload(filename, content) {
            // 创建隐藏的可下载链接
            var eleLink = document.createElement('a');
            eleLink.download = filename;
            eleLink.style.display = 'none'; // 字符内容转变成blob地址

            var blob = new Blob([content]);
            eleLink.href = URL.createObjectURL(blob); // 触发点击

            document.body.appendChild(eleLink);
            eleLink.click(); // 然后移除

            document.body.removeChild(eleLink);
        }
        /**
         * 调试模式
         * @method
         * @static
         * @param   {String}    action         debug 行为（可选值暂为 stop）
         */

    }, {
        key: "debug",
        value: function debug(action) {
            if (action === 'stop') {
                Portal.debugMode = false;
                Portal.debugLog = [];
                localStorage.setItem('debugMode', Portal.debugMode);
                localStorage.setItem('debugLog', JSON.stringify(Portal.debugLog));
                alert('Debug 模式已关闭，Debug 日志已清空');
                return 'Debug 模式已关闭，Debug 日志已清空';
            }

            Portal.debugMode = true;
            Portal.debugLog = [];
            localStorage.setItem('debugMode', Portal.debugMode);
            localStorage.setItem('debugLog', JSON.stringify(Portal.debugLog));
            Portal.prototype.setLog('开启 Debug 模式');
            Portal.prototype.setLog('前端版本', Portal.version);
            Portal.prototype.setLog('前端接收到的 8081 与 app.conf 配置:', CONFIG);
            Portal.prototype.setLog('前端接配置的 creater.js 信息:', CREATER);
            Portal.prototype.setLog('当前 URL', location.href);
            alert('Debug 模式已开启，执行 Portal.debug() 可导出 Debug 日志');
            return 'Debug 模式已开启，执行 Portal.debug() 可导出 Debug 日志';
        }
        /**
         * 导出日志
         * @method
         * @static
         */

    }, {
        key: "log",
        value: function log() {
            if (Portal.debugMode === false) return '请先执行 Portal.debug() 开启调试模式'; // 输出 Debug 日志

            Portal.funDownload("SrunPortalLog-".concat(Portal.prototype.formatDate(Date.now(), 'yyyy-MM-dd HH-mm'), ".log"), Portal.debugLog.join('\n'));
            confirm('Debug 日志已输出，是否继续 Debug？') ? '' : Portal.debug('stop');
            return 'Debug 日志已输出';
        }
    }]);

    return Portal;
}(Utils);

_defineProperty(Portal, "version", 'v1.7.2');

_defineProperty(Portal, "debugMode", function () {
    var value;

    try {
        value = localStorage.getItem('debugMode') === 'true';
    } catch (e) {
        value = false;
    }

    return value;
}());

_defineProperty(Portal, "debugLog", function () {
    var value;

    try {
        value = JSON.parse(localStorage.getItem('debugLog')) || [];
    } catch (e) {
        value = [];
    }

    return value;
}());

_defineProperty(Portal, "mobile", Boolean(new MobileDetect(window.navigator.userAgent).mobile()));

Portal.prototype.setLog.err = function (name, message) {
    Portal.prototype.setLog(name, message, 'Error');
};
