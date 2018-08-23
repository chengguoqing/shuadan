//注册
new Vue({
	el: '#seek_apper',
	data: {
		form: {
			mobile: "", //手机号（称作会员名）
			password: "", //密码
			key: "" //key
		}
	},
	methods: {
		zhuce: function() {
			var th = this
			mui.confirm("请选择注册类型", '用户注册', ['拿5元奖励', '没有邀请人'], function(e) {
			
				th.zhu("register","",{type_y:e.index})
			}, 'div')
		},
		deng_lu: function() { //登录按钮触发
			if(!yanza.phone(this.form.mobile)) {
				mui.toast("手机号格式不正确");
				return
			}
			if(!this.form.password) {
				mui.toast("请输入密码");
				return
			}
			this.form.key = localStorage.key_s

			var th = this
			m_ajax("/api/index/doLogin", this.form, function(data, user_in) {
				
				localStorage.token = data.token
				localStorage.user_info = JSON.stringify(user_in)
				var ws = plus.webview.currentWebview() //当前窗口;
				ws.close();
				var seldf = plus.webview.getLaunchWebview()
				seldf.evalJS("sdfwwer_df();");
				plus.webview.show(seldf)
			})
		}
	},
	mounted: function() {
		m_ajax("/api/common/getKey", "", function(data) {
			localStorage.key_s = data.key
		})
		localStorage.user_info = ""
		localStorage.token = ""
	}
})