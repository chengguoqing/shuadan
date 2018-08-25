//浏览任务类型一：关键字

Vue.component("llrw_gj", {
	props: {
		wangwang: "",
		orderId: "",
		keyanswer: "",
		shuju_e: ""
	},
	template: `
	<section>
	<p class="pd pt5 pm5   z6">
				<i class="dx icon-bianji fz20 cz"></i> <span class="cz">任务步骤</span>
			</p>
			<section class="pd pt10 pm10 bgff">
				<p class="fz16">
					<span class="ls">浏览任务</span> <span class="ye">点击查看示例</span>
				</p>
				<section class=" fz14 df_jh_deert">

					·请确认使用<span class="red">这么麻烦恶心</span>
					买号登录手机淘宝应用<br> 
					·打开淘宝/天猫手机客户端后请手动输入关键词,关 键词不可自行修改。
					<br> ·找到目标商品 ,至少向下浏览3分钟,在详情中找到以下问题答案，并复制上传商品分享链接   
				</section>
				<p class="ls mt10">目标商品</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="货比商品链接1"  readonly v-model="s_ddrts">
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 ab">粘贴</a>

				
				<p class="fz14 mt10">
					请在<span class="red">目标商品详情中</span>找到以下答案<span class="ye">如何找到答案</span> 答案提示:{{keyanswer}}

				</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="请输入答案" v-model="keyAnswer_r" >
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 " @click="yanzheng">验证</a>
				
				

			</section>

			

			<section class="btm bgff  pd">

				<p class=" pt10 pm10 fz16">
					<span class="ls">收藏领券</span> <span class="ye">点击查看示例</span>
				</p>

				<p>
					1.收藏目标商品，2.将目标商品加入购物车，3分别在商品收藏夹，购物车里显示目标商品的页面截图并上传
				</p>
				

				<section class="mui-row  bgff pm10">
					<section class="mui-col-xs-4 pr10 mb10" v-for="(sd,idx) in fdgf_sdf" @tap="shangchuan(sd)">
						<section>
							<section class="dsf_jh_der_r fz12 cen pr">
								<img :src="sd.url" v-if="sd.url">

								<span class="sd_jh_ceertx" v-if="!sd.url">点击上传图片</span>
								<i class="dx icon-tupian   dsf_hj_deert" v-if="!sd.url"></i>
							</section>
							<p class="cen fz14 mt10">
								{{sd.name}}
							</p>

						</section>
					</section>

					<p class="qc"></p>

				</section>

				
				<section class="btm bgff  pd pt20 pm20">

					<button class="w100 f1z6" @click="tijiao_rt">提交任务</button>
				</section></section>`,
	data: function() {
		return {
			is_yz: false, //地址是否验证
			fdgf_sdf: [],
			s_ddrts: "2222", //目标商品
			keyAnswer_r: "运动健身打底衫", //关键字

		}
	},
	mounted: function() {
		if(this.shuju_e.sub.task_sub_type1 == 1) {
			this.fdgf_sdf.push({
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "收藏商品"
			})
		}
		if(this.shuju_e.sub.task_sub_type2 == 1) {
			this.fdgf_sdf.push({
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "加购物车"
			})
		}
		if(this.shuju_e.sub.task_sub_type3 == 1) {
			this.fdgf_sdf.push({
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "关注店铺列表"
			})
		}
		if(this.shuju_e.sub.task_sub_type4 == 1) {
			this.fdgf_sdf.push({
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "优惠券列表"
			})
		}
	},
	methods: {
		yanzheng: function() { //核对
			var doValidateKeyword = {},
				th = this
			doValidateKeyword.key = localStorage.token
			doValidateKeyword.keyAnswer = this.keyAnswer_r
			doValidateKeyword.type = 4
			doValidateKeyword.orderId = this.shuju_e.orderId
			m_ajax("/api/order/doValidateKeyword", doValidateKeyword, function(data, data_er, datasi) {
				if(datasi.status == 1) {
					mui.toast("验证成功")
					th.is_yz = true
				}
			})
		},

		shangchuan: function(sd) { //上传图片
			var th = this
			get_TE(function(dtrt_ds) {
				var sd_deerrt = "请上传" + sd.name
				sc.xz(sd_deerrt, function(url) {
					putb64(url, dtrt_ds, function(url_e) {
						sd.url = url_e
					})
				})

			})
		},
		zandie: function() { //粘贴
			this.s_ddrts = getClipbordText()
		},
		tijiao_rt: function() { //提交任务
			if(!this.s_ddrts) {
				mui.toast("目标商品链接不能为空")
				return
			}
			var sd_drrt = true
			if(!this.is_yz) {
				mui.toast("请验证地址")
				return
			}
			for(var i = 0; i < this.fdgf_sdf.length; i++) {
				if(!this.fdgf_sdf[i].url) {
					mui.toast("请上传" + this.fdgf_sdf[i].name)
					return
				}
			}
			var doTaskOrder = {},
				th = this
			doTaskOrder.key = localStorage.token
			doTaskOrder.orderId = this.shuju_e.orderId
			doTaskOrder.keyAnswer = this.keyAnswer_r
			doTaskOrder.sub = []
			doTaskOrder.browseStore = []
			doTaskOrder.browseStore[0] = this.s_ddrts
			this.fdgf_sdf.map(function(a, b) {
				doTaskOrder.sub.push(a.url)

			})

			m_ajax("/api/order/doTaskOrder", doTaskOrder, function(data, dat, data_is) {
				mui.toast(data_is.msg)

			})

		},

	}
});