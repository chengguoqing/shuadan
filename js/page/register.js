//注册     
new Vue({
	el: '#seek_apper',
	data: {
		yzm: "", //验证码
		type_y: 0,
		isDisable: false,
		form: {
			pid: "", //邀请人id
			mobile: "", //手机号
			verifyCode: "", //验证码
			jpassword: "", //第一次输入的密码
			password: "", //第二次输入的密码
			mobileImei: "", //手机序列号
			mobileOs: "", //手机操作系统，1：安卓，2：苹果
			key: "" //key值    
		}
	},
	methods: {
		huoqu_er: function() { //获取验证码按钮触发
			if(!yanza.phone(this.form.mobile)) {
				mui.toast("手机号格式不正确");
				return
			} else {
				mui.toast('发送成功')
			}
			var sendCode = {},
			th = this
			sendCode.mobile = this.form.mobile
			sendCode.event = 1
			sendCode.key = localStorage.key_s
			//获取验证码接口
			m_ajax("/api/sms/sendCode", sendCode, function(data) {

			}, true)
		},
		zhuce_s: function() { //注册按钮触发

			if(!yanza.phone(this.form.mobile)) {
				mui.toast("手机号格式不正确");
				return
			}
			if(!this.form.verifyCode) {
				mui.toast("请输入验证码");
				return
			}

			if(!this.form.jpassword) {
				mui.toast("请输入密码");
				return
			}

			if(!this.form.password) {
				mui.toast("请输入确认密码");
				return
			}
			if(this.form.jpassword.length > 16 || this.form.jpassword.length < 8 ){
				mui.toast("请输入6-16位密码")
				return
			}
			if(this.form.jpassword != this.form.password) {
				mui.toast("两次输入的密码不一致");
				return
			}
			this.form.key = localStorage.key_s
			var th = this
			if(!this.form.mobileImei) {
				this.form.mobileImei = "aasdf"
			}
			m_ajax("/api/index/doRegister", this.form, function(data, user_in) {
				localStorage.user_info = JSON.stringify(user_in)
				mui.toast("注册成功")
				setTimeout(function(){
					th.zhu("login")
				},1000)
			}, true)

		}
	},
	mounted: function() {
		this.form.mobileOs = mui.os.ios ? 2 : 1
		var th = this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();

			var kmn = self.type_y; //获取页面传过来的值
			th.type_y = kmn
			th.form.mobileImei = plus.device.uuid
		})
	}
})