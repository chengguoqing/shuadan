new Vue({
	el: '#seek_apper',
	data: {
		QiniuToken: "",
		form: {
			key: "",
			realName: "", //真实姓名 
			identity: "", //身份证号
			identityImg: "" //身份证手执照片
		},
		sd_hjh_der: [{
			img_url: "",
			name: "身份证正面图片"
		}]
	},
	methods: {
		dfd_drrt: function(dateer) {
			var th = this
			get_TE(function(dtrt_ds) {
				sc.xz('', function(url_wr) {
					putb64(url_wr, dtrt_ds, function(url_e) {
						alert(url_e)
						th.sd_hjh_der[0].img_url = url_e
						th.form.identityImg = url_e
					})
				})
			})
		},
		baocun_s: function() { //保存按钮触发

			if(!this.form.realName) {
				mui.toast("请输入您的真实姓名");
				return
			}
			if(!yanza.car_t(this.form.identity)) {
				mui.toast("身份证号输入错误");
				return
			}
			if(!this.form.identityImg) {
				mui.toast("请上传身份证信息");
				return
			}
			this.form.key = localStorage.token

			m_ajax("/api/buyer/doBindingIdentity", this.form, function(data, user_in) {
				mui.back()
			})
		}
	},
	mounted: function() {
		var getIdentity = {},
		th=this
		getIdentity.key = localStorage.token
		m_ajax("/api/buyer/getIdentity", getIdentity, function(data, user_in) {
			if(data.realName){
				th.form=data
				th.sd_hjh_der[0].img_url = data.identityImg
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