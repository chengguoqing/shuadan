 new Vue({
     el: '#seek_apper',
     data: {
         gender: "", //性别
         age: "", //年龄
         form: {
             accountName: "", //第三方账号	
             shippingName: "", //收货人
             shippingPhone: "", //收货人电话
             shippingProvince: "", //收货人省份
             shippingCity: "", //收货人地级市	
             shippingCounty: "", //市县级市	
             shippingStreet: "", //详细地址	
             accountAttribute: { //账号属性
                 grade: "", //淘宝账号登记
                 category: "" //分类id
             },
             images: "" //图片多个已逗号分割
         },
         is_fen: false,
         xinxs:"",
         picker: "",
         picker_dj: "",
         sd_de_e: "",
         sd_h_xdf: "",
         sd_hjh_der: [{
             img_url: "",
             name: "实名认证"
                }, {
             img_url: "",
             name: "信誉信息"
                }, {
             img_url: "",
             name: "花呗信息"
                }],
         fenlei: "" //分类
     },
     methods: {
         shenhe_e: function () { //提交审核按钮触发
             if (!this.form.accountName) {
                 mui.toast("请输入第三方账号");
                 return
             }
             if (!this.form.shippingName) {
                 mui.toast("请输入收货人");
                 return
             }
             if (!yanza.phone(this.form.shippingPhone)) {
                 mui.toast("收货人电话格式错误");
                 return
             }
             if (!this.sd_de_e) {
                 mui.toast("请现在省份");
                 return
             }
             if (!this.form.shippingStreet) {
                 mui.toast("请输入详细地址");
                 return
             }

             if (!this.form.accountAttribute.grade) {
                 mui.toast("请选择淘宝账号登记");
                 return
             }
             if (!this.form.accountAttribute.category) {
                 mui.toast("请选择分类");
                 return
             }


             if (!this.sd_hjh_der[0].img_url) {
                 mui.toast("请上传实名认证截图");
                 return
             }
             if (!this.sd_hjh_der[1].img_url) {
                 mui.toast("请上传信誉信息");
                 return
             }
             if (!this.sd_hjh_der[2].img_url) {
                 mui.toast("请上传花呗信息");
                 return
             }
             var th = this,
                 sd_jh_df = []
             this.sd_hjh_der.map(function (a) {
                 sd_jh_df.push(a.img_url)
             })
             this.form.images = sd_jh_df.join(",")
             this.form.key = localStorage.token
             m_ajax("/api/buyer/doAccountBinding", this.form, function (data) {
                 mui.back()
             })



         },
         deng_deer() {
             var th = this
             this.picker_dj.show(function (rl) {
                 th.xinxs= rl[0].text
                 th.form.accountAttribute.grade = rl[0].value
             })
         },

         shg_err: function () {
             var th = this
             this.picker.show(function (rl) {
                 th.sd_de_e = rl[0].text + "-" + rl[1].text + "-" + rl[2].text
                 th.form.shippingProvince = rl[0].text
                 th.form.shippingCity = rl[1].text
                 th.form.shippingCounty = rl[2].text
             })
         },
         dfd_drrt: function (dateer) {
             var th = this
             get_TE(function (dtrt_ds) {
                 sc.xz('', function (url_wr) {
                     putb64(url_wr, dtrt_ds, function (url_e) {
                         dateer.img_url = url_e
                     })
                 })
             })
         },
         sd_jgh(sd) {
             var sd_dff = 0,
                 sd_de = 0
             this.fenlei.map(function (a, b) {
                 if (a.cls == "act") {
                     sd_dff++
                     sd_de = b
                 }
             })
             if (sd_dff >= 3) {
                 this.fenlei[sd_de].cls = ""

             }

             if (sd.cls == "act") {
                 sd.cls = ""
             } else {
                 sd.cls = "act"
             }


             var sd_drert = [],
                 ide_sd = []
             this.fenlei.map(function (a, b) {
                 if (a.cls == "act") {
                     sd_drert.push(a.name)
                     ide_sd.push(a.id)
                 }
             })
             this.form.accountAttribute.category = ide_sd.join(",")

             this.sd_h_xdf = sd_drert.join("/")

         }


     },
     mounted: function () {
         this.picker = new mui.PopPicker({
             "layer": [3]
         });
         this.picker.setData(cityData3)

         this.fenlei = fenlei

         mui.previewImage();

         this.picker_dj = new mui.PopPicker({
             "layer": [1]
         });
         this.picker_dj.setData(dengji)

         var th = this
         var getAccountBinding = {}
         getAccountBinding.key = localStorage.token
         m_ajax("/api/buyer/getAccountBinding", getAccountBinding, function (data) {
             th.gender = data.accountAttribute.gender == 1 ? '男' : '女'
             th.age = data.accountAttribute.age
         })



     }
 })


 mui.init({
     beforeback: function () {
         //获得列表界面的webview  
         var list = plus.webview.currentWebview().opener(); //获取父窗口
         //触发列表界面的自定义事件（refresh）,从而进行数据刷新  
         mui.fire(list, 'refresh');

         //返回true，继续页面关闭逻辑  
         return true;
     }
 });
