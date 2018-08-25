//垫付任务类型二：截图

Vue.component("renwu", {
	props: {
		wangwang: "",
		shuju_e:""
		
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

					<!--·请确认使用这么麻烦恶心买号登录手机淘宝应用<br> -->·打开淘宝/天猫手机客户端后请手动输入关键词,关 键词不可自行修改。
					<br> ·找到目标商品,对搜索结果页面截图一张,依次点开 列表页任务2个商品,浏览3-5分钟分别截图
				</section>

			</section>

			<section class="bgff">
				<section class="mui-row  bgff pl10">
					<section class="mui-col-xs-4 pr10 mb10" v-for="(sd,idx) in fdgf_sdf" v-if="idx<3" @tap="shangchuan(sd)">
						<section  >
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
					<!--<section class="pr10 pl10 ">
						<p class="cen bgye fz16 pt10 pm10">一键上传图片</p>
					</section>-->

				</section>

				<section class="btm bgff mt10 pd">
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

					<p class=" pt10 pm10 fz16">
						<span class="ls">第二步浏览店铺点击</span> <span class="ye">查看示例</span>
					</p>

					<section class=" fz14 df_jh_deert">

						·根据商品主图、价格、名称等找到目标商品<br> ·点击“进入店铺”按钮依次点开店铺里面任意2个商 品,分另」截图,商品浏览需要慢慢滑动到详情底部返回 到目标商品详情页,从头到尾慢慢浏览,停留至少3分 钟,并在页面头部和底部时分别截图
					</section>

				</section>

			</section>

			<section class="mui-row  bgff pm10">
				<section class="mui-col-xs-4 pr10 mb10 pl10" v-for="(sd,idx) in fdgf_sdf" v-if="idx>2&&idx<7" @tap="shangchuan(sd)">
					<section  >
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
				<!--<section class="pr10 pl10">
					<p class="cen bgye fz16 pt10 pm10">一键上传图片</p>
				</section>-->

			</section>

			<section class="btm bgff  pd">

				<p class=" pt10 pm10 fz16">
					<span class="ls">第三步聊天下单支付</span> <span class="ye">点击查看示例</span>
				</p>

				<section class=" fz14 df_jh_deert">

					·点击“联系客服”按钮,和商家客服至少进行4个问 题的互动,完成后截图一张
					<br> ·把商品加入购物车,确认件数、颜色尺码和留言要 求,下单付款
					<br> ·付款完成后,点击进入订单详情页面,截图一张
				</section>

			</section>

			<section class="mui-row  bgff pm10">
				<section class="mui-col-xs-4 pr10 mb10 pl10" v-for="(sd,idx) in fdgf_sdf" v-if="idx>6" @tap="shangchuan(sd)">
					<section  >
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
				<!--<section class="pr10 pl10">
					<p class="cen bgye fz16 pt10 pm10">一键上传图片</p>
				</section>-->

			</section>

			<section class="btm bgff  pd">

				<p class=" pt10 pm10 fz16">
					<span class="ls">第四步 填写实付金额</span> <span class="ye">点击查看示例</span>
				</p>

				<p>实际金额参考：{{shifu}}元(填写实际支付款项)</p>
				<p>
					<input type="number" v-model="shifu" class="pl0 fz14" placeholder="请输入实际付款金额">
				</p>
				<p>订单编号:</p>
				<p>
					<input type="text" placeholder="请粘贴订单编号" class="pl0 fz14" v-model="ddbianhao">
				</p>
			</section>

			<section class="btm bgff  pd pt20 pm20">

				<button class="w100 f1z6" @tap="tijiao_rt">提交任务</button>
			</section></section>`,
	data: function() {
		return {
			is_yz:false,//地址是否验证
			s_ddrts: "",
			s_ddrts: "",
			fdgf_sdf: [{
				url: "",
				name: "搜索结果"
			}, {
				url: "",
				name: "商品1"
			}, {
				url: "",
				name: "商品2"
			}, {
				url: "",
				name: "店内商品1"
			}, {
				url: "",
				name: "店内商品2"
			}, {
				url: "",
				name: "目标商品头部"
			}, {
				url: "",
				name: "目标商品尾部"
			}, {
				url: "",
				name: "聊天"
			}, {
				url: "",
				name: "下单支付"
			}],
			shifu: "", //实际支付款
			ddbianhao: "" //订单编号

		}
	},
	mounted: function() {

	},
	methods: {
		zandie: function() { //粘贴
			this.s_ddrts = getClipbordText()
		},
		yanzheng: function() { //核对
			var doValidateKeyword = {},
			th=this
			doValidateKeyword.key = localStorage.token
			doValidateKeyword.keyAnswer = this.s_ddrts
			doValidateKeyword.type = 3
			doValidateKeyword.orderId=this.shuju_e.orderId
			m_ajax("/api/order/doValidateKeyword", doValidateKeyword, function(data,data_er,datasi) {
			
				if(datasi.status==1){
					mui.toast("验证成功")
					th.is_yz=true
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
		tijiao_rt: function() { //提交任务
			if(!this.s_ddrts) {
				mui.toast("请核对地址")
				return
			}
			var sd_drrt = true
			if(!this.is_yz){
				mui.toast("请验证地址")
				return
			}
			
			for(var i = 0; i < this.fdgf_sdf.length; i++) {
				if(!this.fdgf_sdf[i].url) {
					mui.toast("请上传" + this.fdgf_sdf[i].name)
					return
				}
			}
			if(!this.shifu) {
				mui.toast("请输入实际付款金额")
				return
			}

			if(!this.ddbianhao) {
				mui.toast("请输入订单编号")
				return
			}

			var doTaskOrder = {},
			th=this
			doTaskOrder.key = localStorage.token
			doTaskOrder.orderId = this.shuju_e.orderId
			doTaskOrder.thirdOrderId = this.ddbianhao //第三方平台订单号
			doTaskOrder.compareGoods = [] //货比三家
			doTaskOrder.browseStore = [] //浏览店铺
			doTaskOrder.chatOrder = [] //聊天记录
			doTaskOrder.goodsPrice = this.shifu
				doTaskOrder.keyAnswer = this.s_ddrts
			this.fdgf_sdf.map(function(a, b) {
				if(b < 3) {
					doTaskOrder.compareGoods.push(a.url)
				}
				if(b > 2 && b < 7) {
					doTaskOrder.browseStore.push(a.url)
				}
				if(b > 6) {
					doTaskOrder.chatOrder.push(a.url)
				}
			})
			console.log(doTaskOrder)


			m_ajax("/api/order/doTaskOrder", doTaskOrder, function(data,dat,data_is) {
				mui.toast(data_is.msg)
//					mui.back()
			})

		},

	}
});