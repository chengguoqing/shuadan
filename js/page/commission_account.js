var km = new Vue({
	el: '#seek_apper',
	data: {
		page: 1,
		sd: []
	},
	methods: {
		get_data: function(call_back) {
			var getCapitalLog = {},
				th = this
			getCapitalLog.key = localStorage.token
			getCapitalLog.page = this.page
			getCapitalLog.type = 3
			m_ajax("/api/account/getCommissionLog", getCapitalLog, function(data) {
				try{
					call_back(data.list||[])
				}catch(e){
					
				}
				data.list.map(function(a) {
					th.sd.push(a)
				})

			})
		}
	},
	mounted: function() {

	}
})

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});

function pullupRefresh() {
	km.page++
	var th=this
	km.get_data(function(dads_e){
		if(dads_e>=10){
			th.endPullupToRefresh(false)
		}else{
			th.endPullupToRefresh(true)
		}
	})

}

window.addEventListener('refresh', function(e) {
	km.page = 1
	km.sd = []
	km.get_data()
})