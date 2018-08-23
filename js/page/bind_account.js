var km = new Vue({
	el: '#seek_apper',
	data: {
		sd: ""
	},
	methods: {
		dingr: function() {
			mui.toast('功能暂未开放');
		}, 
		getdatd: function() {
			var binding = {},
				th = this
			binding.key = localStorage.token
			m_ajax("/api/buyer/getBinding", binding, function(data) {
				th.sd = data
			})
		},
		bang_ddfe_a:function(type){//身份证信息点击
		
			if(type==2){
				this.zhu('collection_room')
			}else{
				this.zhu('new_card')
			}
			
		},
		bang_ddfe:function(tye,bank){//银行卡点击
			if(tye!=2){
				 mui.alert("请先绑定身份证", ' ', '', '', 'div')
				return
			}
			this.zhu('bank_information','',{bank_s:bank})
		},
		bang_ddff:function(tye,bank){//绑定qq
			if(tye!=2){
				 mui.alert("请先绑定身份证", ' ', '', '', 'div')
				return
			}
			this.zhu('xinzhengqq','',{bank_s:bank})
	
		}
	},
	mounted: function() {
		this.getdatd()
	},
	filters: { //过滤器   页面上调用{{dt.state|lei}}
	
	 sd_ert(num) {
			var sd_serrt = ""
			if(num == 0) {
				sd_serrt = "新增"
			}
			if(num == 1) {
				sd_serrt = "待审核"
			}
			if(num == 2) {
				sd_serrt = "已审核"
			}
			if(num == 3) {
				sd_serrt = "审核不通过"
			}
			return sd_serrt
		}
	}
})

window.addEventListener('refresh', function(e) {
	km.getdatd()
})



