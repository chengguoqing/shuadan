//垫付任务类型一：关键字

Vue.component("gjz", {
	props: {
		keyanswer: "",
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
					<span class="ls">  第一步货比三家</span> <span class="ye">点击查看示例</span>
				</p>
				<section class=" fz14 df_jh_deert">

					·请确认使用<span class="red">{{wangwang}}</span>买号登录手机淘宝应用<br> ·打开淘宝/天猫手机客户端后请手动输入关键词,关 键词不可自行修改。
					<br> ·找到目标商品前可浏览至少2个同类产品，至少浏览1分钟，复制并上传分享链接
				</section>
				<p class="ls mt10">货比商品1</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="货比商品链接1" v-model="huobi_a" readonly ="">
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 ab" @tap="set_huobi_a(1)">粘贴</a>

				<p class="ls mt10">货比商品2</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="货比商品链接2" v-model="huobi_b" readonly ="">
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 ab"  @tap="set_huobi_a(2)">粘贴</a>

			</section>

			<section class="pd pt10 pm10 bgff btm">
				<p class="fz16">
					<span class="ls">  第二步浏览店铺</span> <span class="ye">点击查看示例</span>
				</p>

				<section class=" fz14 df_jh_deert">
					·根据商品主图、价格、名称等找到目标商品<br> ·浏览店内任意两个商品,至少浏览1分钟,复制并上传 商品分享链接。
					<br> ·回到目标商品,至上向下至少浏览3分钟,在目标商 品的详情中找到以下问题的答案。
				</section>

				<p class="ls mt10">店铺商品1</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="店铺商品链接1"  v-model="dianpu_a" readonly ="" >
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 ab" @tap="set_huobi_a(3)">粘贴</a>

				<p class="ls mt10">店铺商品2</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="店铺商品链接2" v-model="dianpu_b" readonly ="">
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 ab" @tap="set_huobi_a(4)">粘贴</a>

				<p class="fz14 mt10">
					请在<span class="red">目标商品详情中</span>找到以下答案<span class="ye">如何找到答案</span> 答案提示{{keyanswer}}:

				</p>

				<p class="f_b dsf_jerh_dert pr">
					<input type="text" placeholder="请输入答案" v-model="s_ddrts">
				</p>
				<a class="mui-btn msd_jh_drt yj4 ml10 " @tap="yanzheng">验证</a>

			</section>

			<section class="btm bgff  pd">

				<p class=" pt10 pm10 fz16">
					<span class="ls">第三步 下单支付</span> <span class="ye">点击查看示例</span>
				</p>

				<p>点击"联系客服"按钮，和商家客服至少进行4个问题的互动</p>
				<p>
					把商品加入购物车，确认件数、颜色尺码和留言要求，下单付款
				</p>

				<p>
					付款完成后，在支付宝里截一张付款图

				</p>

				<section class="mui-row  bgff pm10 mt10">
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

				<section class="btm bgff  pd">

					<p class=" pt10 pm10 fz16">
						<span class="ls">第四步 填写实付金额</span> <span class="ye">点击查看示例</span>
					</p>

					<p>实际金额参考：{{jiner_se}}元(填写实际支付款项)</p>
					<p>
						<input type="number" v-model="jiner_se"  class="pl0 fz14" placeholder="请输入实际付款金额">
					</p>
					<p>订单编号:</p>
					<p>
						<input type="text" placeholder="请粘贴订单编号" class="pl0 fz14" v-model="ddbianhao">
					</p>
				</section>

				<section class="btm bgff  pd pt20 pm20">

					<button class="w100 f1z6" @tap="tijiao_rt">提交任务</button>
				</section>	</section>
	`,
	data: function() {
		return {
			jiner_se: 0,
			fdgf_sdf: [{
				url: "",
				name: "聊天"
			}, {
				url: "",
				name: "下单支付"
			}],
			huobi_a: "", //货比三家
			huobi_b: "",
			dianpu_a: "", //店铺商品
			dianpu_b: '',
			s_ddrts: "", //目标详情的答案
			ddbianhao:""//订单编号

		}
	},
	mounted: function() {},
	methods: {
		set_huobi_a(ty) {
			if(ty == 1) {
				this.huobi_a = getClipbordText()
			} else if(ty == 2) {
				this.huobi_b = getClipbordText()
			} else if(ty == 3) {
				this.dianpu_a = getClipbordText()
			} else if(ty == 4) {
				this.dianpu_b = getClipbordText()
			}

		},
		yanzheng: function() { //核对
			if(!this.s_ddrts) {
				mui.toast("请输入目标详情的答案")
				return
			}
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
		tijiao_rt: function() { //提交任务
			if(!this.huobi_a){
				mui.toast("请粘贴货比商品链接1")
				return
				
			}
			if(!this.huobi_b){
				mui.toast("请粘贴货比商品链接2")
				return
				
			}
			
				if(!this.dianpu_a){
				mui.toast("店铺商品1")
				return
				
			}
				if(!this.dianpu_b){
				mui.toast("店铺商品2")
				return
				
			}
				
			if(!this.s_ddrts) {
				mui.toast("请输入目标详情的答案")
				return
			}
			
			
		
			var sd_drrt = true
			for(var i = 0; i < this.fdgf_sdf.length; i++) {
				if(!this.fdgf_sdf[i].url) {
					mui.toast("请上传" + this.fdgf_sdf[i].name)
					return
				}
			}
		

			if(!this.ddbianhao) {
				mui.toast("请输入订单编号")
				return
			}

			var doTaskOrder = {}
			doTaskOrder.key = localStorage.token
			doTaskOrder.orderId = this.orderId
			doTaskOrder.thirdOrderId = this.ddbianhao //第三方平台订单号
			doTaskOrder.compareGoods = [this.huobi_a,this.huobi_b] //货比三家
			doTaskOrder.browseStore = [this.dianpu_a,this.dianpu_b] //浏览店铺
			doTaskOrder.keyAnswer=this.s_ddrts//关键词
			doTaskOrder.goodsPrice = this.jiner_se//实付金额
			m_ajax("/api/order/doTaskOrder", doTaskOrder, function(data) {
				mui.back()
			})

		},

	}
});