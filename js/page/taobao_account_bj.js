var km = new Vue({
    el: '#seek_apper',
    data: {
        gender: "", //性别
        age: "", //年龄
        orderCount: "",
        id_sdf: "",
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
        xinxs: "",
        is_fen: false,
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

        gengia_d: function () { //更改信息点击触发
            var th = this
            mui.confirm("修改收货信息需要进行人工审核，审核期间无法接受任务，如需紧急处理可在工作时间联系在线客服", '温馨提示', ['确认修改', '取消修改'], function (e) {
                if (e.index == 1) {

                } else {
                    th.zhu("receipt_information", "", {
                        id_y: th.id_sdf
                    })
                }

            }, 'div')
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

        },
        get_sdf: function () {
            var th = this
            mui.plusReady(function () {
                var self = plus.webview.currentWebview();
                var getAccountBinding = {}
                getAccountBinding.key = localStorage.token
                getAccountBinding.id = self.id_y
                th.id_sdf = self.id_y
                alert(th.id_sdf)
                m_ajax("/api/buyer/getAccountBinding", getAccountBinding, function (data) {
                    th.form = data
                    th.sd_de_e = data.shippingProvince + "-" + data.shippingCity + "-" + data.shippingCounty
                    var sd_drert = [],
                        ide_sd = []
                    th.fenlei.map(function (a) {
                        data.accountAttribute.category.split(",").map(function (b) {
                            if (a.id == b) {
                                a.cls = "act"
                                sd_drert.push(a.name) 
                                ide_sd.push(a.id)
                            }
                        })
                    })

                    th.form.accountAttribute.category = ide_sd.join(",")
                    th.sd_h_xdf = sd_drert.join("/")
                    var sd_ddrr = data.images.split(",")
                    th.sd_hjh_der[0].img_url = sd_ddrr[0]
                    th.sd_hjh_der[1].img_url = sd_ddrr[1]
                    th.sd_hjh_der[2].img_url = sd_ddrr[2]
                    th.gender = data.accountAttribute.gender == 1 ? '男' : '女'
                    th.age = data.accountAttribute.age
                    th.orderCount = data.orderCount
                    var sd_xeer = parseFloat(th.form.accountAttribute.grade) - 1
                    th.xinxs = dengji[sd_xeer].text
                })

            })
        }

    },
    mounted: function () {
        this.picker = new mui.PopPicker({
            "layer": [3]
        });
        this.picker.setData(cityData3)
        this.fenlei = fenlei
        mui.previewImage();
        this.get_sdf()

    }
})

mui.previewImage();



window.addEventListener('refresh', function (e) {
    km.get_sdf()
})
