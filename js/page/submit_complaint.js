new Vue({
	el: '#seek_apper',
	data: {
		tupin_sd: [],
		picker: "",
		s_der_rt: "请选择申述原因",
		orderId: "", //任务订单id
		reasonType: "", //	申诉理由
		content: "", //申诉的详细内容
		image: "" //图片证据
	},
	methods: {

		sd_jh_der: function(dateer) {
			var th = this
			get_TE(function(dtrt_ds) {
				sc.xz('上传图片', function(url_wr) {
					putb64(url_wr, dtrt_ds, function(url_e) {
						th.tupin_sd.push(url_e)
						th.image = url_e
					})
				})
			}, 2)
		},
		deled: function(idx) { //删除
			this.tupin_sd.splice(idx, 1)
		},
		show_er: function() {
			var th = this
			this.picker.show(function(rl) {
				th.s_der_rt = rl[0].text
				th.reasonType = rl[0].value
			})
		},
		tijiao_sr: function() { //提交申诉按钮触发
			if(!this.reasonType) {
				mui.toast("请选择申诉理由");
				return
			}
			if(!this.content) {
				mui.toast("请输入申诉的详细内容");
				return
			}

			var doComplaint = {},
				th = this
			doComplaint.key = localStorage.token
			doComplaint.orderId = this.orderId
			doComplaint.reasonType = this.reasonType
			doComplaint.content = this.content
			doComplaint.image = this.image

			m_ajax("/api/complaint/doComplaint", doComplaint, function(data) {
				th.zhu('complaint_center_xq', '', {
					ytds_id: th.orderId
				})

			})

		}

	},
	mounted: function() {
		mui.previewImage();

		var getComplaintReason = {},
			th = this
		getComplaintReason.key = localStorage.token
		this.picker = new mui.PopPicker({
			"layer": [1]
		});
		m_ajax("/api/complaint/getComplaintReason", getComplaintReason, function(data) {
			data.map(function(a) {
				a.value = a.id
				a.text = a.reason
			})
			th.picker.setData(data)
		})
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var kmn = self.ytds_id; //获取页面传过来的值
			th.orderId=kmn

		})

	}
})