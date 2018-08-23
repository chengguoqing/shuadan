//浏览任务类型一：关键字

Vue.component("llrw_jt", {
	props: {
		wangwang: "",
		orderId: ""
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

					·请确认使用<span class="red">这么麻烦恶心</span> 买号登录手机淘宝应用
					<br> ·打开淘宝/天猫手机客户端后请手动输入关键词,关 键词不可自行修改。
					<br> ·找到目标商品 ,至少向下浏览3分钟,在详情中找到以下问题答案，并复制上传商品分享链接
				</section>

				<section class="mui-row  bgff pm10">
					<section class="mui-col-xs-4 pr10 mb10" v-for="(sd,idx) in fdgf_sdf" @tap="shangchuan(sd)" v-if="idx<3">
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

			</section>

			<section class="btm bgff pt10 pm10 pd">
				<p class=" pt10 pm10 fz16">
					<span class="red">核对店铺及商品是否正确点击</span> <span class="ye">查看示例</span>
				</p>
				<p class="fz14 z3 ">
					1. 商家旺旺名:{{wangwang}}
				</p>
				<div class="fz14 z3 mt10">

					2.
					<p class="f_b dsf_jerh_dert pr">
						<input type="text" placeholder="请点击粘贴地址" readonly :value="s_ddrts">
						<a class="mui-btn mui-btn-yellow fz12 df_jher_deert" @tap="zandie">粘贴</a>
					</p>
					<a class="mui-btn msd_jh_drt yj4 ml10" @tap="yanzheng">核对</a>
				</div>

				

			</section>

	

		<section class="btm bgff  pd">

			<p class=" pt10 pm10 fz16">
				<span class="ls">收藏领券</span> <span class="ye">点击查看示例</span>
			</p>

			<p>
				1.收藏目标商品，2.将目标商品加入购物车，3分别在商品收藏夹，购物车里显示目标商品的页面截图并上传
			</p>

			<section class="mui-row  bgff pm10">
				<section class="mui-col-xs-4 pr10 mb10" v-for="(sd,idx) in fdgf_sdf" @tap="shangchuan(sd)" v-if="idx>2">
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

				<button class="w100 f1z6">提交任务</button>
			</section>
	
	</section>`,
	data: function() {
		return {
			s_ddrts: "",
			fdgf_sdf: [{
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "搜索结果"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "目标商品头部"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "目标商品尾部"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "收藏商品"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "加购物车"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "关注店铺列表"
			}, {
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534529476587&di=d25fcbf9555def2cddc6401609fe3450&imgtype=0&src=http%3A%2F%2Fimg3.100bt.com%2Fupload%2Fscrawl%2F20130512%2F1368358339253.jpg",
				name: "优惠券列表"
			}]

		}
	},
	mounted: function() {},
	methods: {
		zandie: function() { //粘贴
			this.s_ddrts = getClipbordText()
		},
		yanzheng: function() { //核对
			var doValidateKeyword = {}
			doValidateKeyword.key = localStorage.token
			doValidateKeyword.keyAnswer = this.s_ddrts
			doValidateKeyword.type = 3
			m_ajax("/api/order/doValidateKeyword", doValidateKeyword, function(data) {

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
	}
});