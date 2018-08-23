new Vue({
	el: '#seek_apper',
	data: {
		form: {
			bank: "", //	银行
			bankCity: "", //	银行所在城市
			bankAddress: "", //	开户行
			bankAccount: "" //银行账号

		}
	},
	methods: {
		baocun_s: function() {
			if(!this.form.bank) {
				mui.toast("请输入银行");
				return
			}

			if(!this.form.bankCity) {
				mui.toast("请输入银行所在城市");
				return
			}
			if(!this.form.bankAddress) {
				mui.toast("请输入开户行");
				return
			}
			if(!this.form.bankAccount) {
				mui.toast("请输入银行账号");
				return
			}
			this.form.key = localStorage.token
			m_ajax("/api/buyer/doBindingBank", this.form, function(data) {
				mui.back()
			})
		}
	},
	mounted: function() {
		var th = this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var kmn = self.bank_s;
			if(kmn) {
				var getBank = {}
				getBank.key = localStorage.token
				m_ajax("/api/buyer/getBank", getBank, function(data) {
					th.form = data
				})
			}

		})

	}
})

mui.init({
	beforeback: function() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener(); //获取父窗口
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新  
		mui.fire(list, 'refresh');

		//返回true，继续页面关闭逻辑  
		return true;
	}
});