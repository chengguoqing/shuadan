var km = new Vue({
	el: '#seek_apper',
	data: {
		sd: "",
		ytds_id: ""
	},
	methods: {
		cexiaosq: function(mag, tyer) {
			var th = this
			mui.confirm(mag, "提示", ["取消", "确定"], function(e) {
				if(e.index == 1) {
					var sd_der = ""
					if(tyer == 1) { //确定撤销
						sd_der = "/api/complaint/doCancelComplaint"
					} else if(tyer == 2) { //完成申诉
						sd_der = "/api/complaint/doCompleteComplaint"
					}
					var sd_dererr = {}
					sd_dererr.key = localStorage.token
					sd_dererr.id = th.ytds_id
					m_ajax(sd_der, sd_dererr, function(data) {
						mui.back()
					})

				}
			}, "div")
		},
		sehng_de: function() {
			var applyAdmin = {}
			applyAdmin.key = localStorage.token
			applyAdmin.id = this.ytds_id
			m_ajax("/api/complaint/applyAdmin", applyAdmin, function(data) {
				
			})
			
		},
		date_int: function() {
			var getComplaint = {},
				th = this
			mui.plusReady(function() {
				var self = plus.webview.currentWebview();
				var kmn = self.ytds_id; //获取页面传过来的值
				th.ytds_id = kmn
				getComplaint.key = localStorage.token
				getComplaint.id = kmn
				m_ajax("/api/complaint/getComplaint", getComplaint, function(data) {
					th.sd = data
				})
			})
		}

	},
	mounted: function() {
		this.date_int()

	},
	filters: {
		reasonType(num) {
			var s_sdd = [, "", "", '', '', '']
			var sd_der = ""
			if(num == 1) {
				sd_der = "商品错误"
			}
			if(num == 2) {
				sd_der = "返款问题"
			}
			if(num == 3) {
				sd_der = "快递问题"
			}
			if(num == 4) {
				sd_der = "其他问题"
			}
			if(num == 11) {
				sd_der = "买家做任务问题"
			}
			if(num == 12) {
				sd_der = "买家确认收货"
			}
			return sd_der
		}
	}
})

function shuax_s() {
	km.date_int()
}

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