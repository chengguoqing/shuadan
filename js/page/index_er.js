var km = new Vue({
	el: '#seek_apper',
	data: {
		index_s: ""
	},
	methods: {
		get_dads: function() {
			var getIndex = {},
				th = this
			getIndex.key = localStorage.token
			getIndex.mobileOs = mui.os.ios ? 2 : 1
			getIndex.version = version
			m_ajax("/api/account/getIndex", getIndex, function(data) {
				th.index_s = data
				if(data.isPassedTask == 0) {
					mui.confirm("请先完成新手任务！", "温馨提示", ["取消", "确定"], function(e) {
						if(e.index == 1) {

						}
					}, "div")
				}
			})
		}
	},
	mounted: function() {
		this.get_dads()

	}
})

function chusu_e() {
	km.get_dads()
}