new Vue({
	el: '#seek_apper',
	data: {
		user_icon: "",
		sd: "",
		user_meat: [{
				size: "16",
				clsss_s: "aa", //class名字
				jindu: "",
				icon: "icon-fenxiang", //图标名字
				name: "账号绑定",
				url_er: "bind_account" //跳转地址
			},
			{
				size: "18",
				clsss_s: "ab", //class名字
				icon: "icon-shezhi", //图标名字
				name: "设置",
				jindu: "",
				url_er: "setting" //跳转地址
			},
			{
				size: "22",
				clsss_s: "ac", //class名字
				icon: "icon-zhuyi", //图标名字
				name: "完成率",
				jindu: "33%",
				url_er: "percentage_complete" //跳转地址
			},
			{
				size: "18",
				clsss_s: "ad", //class名字
				icon: "icon-lingdang", //图标名字
				name: "新手教学",
				jindu: "",
				url_er: "tutorial" //跳转地址
			}, {
				size: "20",
				clsss_s: "ae", //class名字
				icon: "icon-laba", //图标名字
				name: "推广赚金",
				jindu: "",
				url_er: "expand_gold" //跳转地址
			}, {
				size: "20",
				clsss_s: "af", //class名字
				icon: "icon-feiji", //图标名字
				name: "帮助与客服",
				jindu: "",
				url_er: "customer_service" //跳转地址
			}, {
				size: "16",
				clsss_s: "ag", //class名字
				icon: "icon-banbenqiehuan", //图标名字
				jindu: "",
				name: "版本信息",
				url_er: "versions" //跳转地址
			}
		]
	},
	methods: {

		tishi: function(dateer) {
			var th = this
			get_TE(function(dtrt_ds) {

				sc.xz('', function(url_wr) {
					putb64(url_wr, dtrt_ds, function(url_e) {

						th.user_icon = url_e
						th.shcuang(url_e)

					})
				})
			})

		},
		shcuang: function(avatarUrl) {
			var doAvatar = {},
				th = this
			doAvatar.key = localStorage.token
			doAvatar.avatarUrl = avatarUrl
	
			m_ajax("/api/buyer/doAvatar", doAvatar, function(data) {
				
			})
		},
		getImage: function() {
			//outSet( "开始拍照：" );
			var cmr = plus.camera.getCamera(),
				th = this
			cmr.captureImage(function(p) {
				//outLine( "成功："+p );
				plus.io.resolveLocalFileSystemURL(p, function(entry) {

					th.user_icon = entry.toLocalURL()

				}, function(e) {
					//outLine( "读取拍照文件错误："+e.message );
				});
			}, function(e) {
				//outLine( "失败："+e.message );
			}, {
				filename: "_doc/camera/",
				index: 1
			});
		},
		galleryImgs: function() {
			// 从相册中选择图片
			var th = this
			plus.gallery.pick(function(e) {

				th.user_icon = e.files[0]
			}, function(e) {

			}, {
				filter: "image",
				multiple: true,
				system: false
			});
		}
	},
	mounted: function() {
		var sd_je = {},
			th = this
		sd_je.key = localStorage.token
		m_ajax("/api/buyer/getIndex", sd_je, function(data) {
			th.user_icon = data.avatar
			th.sd = data
			th.user_meat[2].jindu = data.completionRate + "%"

		})
	}
})