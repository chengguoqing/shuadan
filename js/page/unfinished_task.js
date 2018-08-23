var km = new Vue({
	el: '#seek_apper',
	data: {
		group: "",
		sder_er: [{
				id: 1,
				cls: "mui-active ",
				name: "待操作",
				num: 0

			},
			{
				id: 2,
				cls: "",
				name: "待返回",
				num: 0

			}, {
				id: 3,
				cls: "",
				name: "发货中",
				num: 0

			}, {
				id: 4,
				cls: "",
				name: "待确认",
				num: 0

			}
		],
		is_lex: 1,
		sd_deer: [{
			id: 1,
			url: 'dingdan_list.html'
		}, {
			id: 2,
			url: 'dingdan_list.html'
		}, {
			id: 3,
			url: 'dingdan_list.html'
		}, {
			id: 4,
			url: 'dingdan_list.html'
		}]
	},
	methods: {
		sd_hg_e: function(idx) {

//			this.group.switchTab('dingdan_list.html' + idx.id);
		}
	},
	mounted: function() {
		var th = this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();

			var kmn = self.type_e;
			th.is_lex = kmn
			qiehuan(th.sd_deer, function(group) {
				th.group = group
			},self.type_e)
		})
	}
})

function sdf_df(dater) {

	if(km.is_lex == 1) {
		km.sder_er[0].num = dater.status1
		km.sder_er[1].num = dater.status2
		km.sder_er[2].num = dater.status3
		km.sder_er[3].num = dater.status4
	}else{
		km.sder_er[0].num = dater.status1
		km.sder_er[3].num = dater.status4
	}

}