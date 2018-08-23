var km = new Vue({
    el: '#seek_apper',
    data: {
        BindingList: ""
    },
    methods: {
        getdatd() {
            var BindingList = {},
                th = this
            BindingList.key = localStorage.token
            BindingList.platformType = 1
            m_ajax("/api/buyer/getAccountBindingList", BindingList, function (data) {
                th.BindingList = data.list
            })
        }
    },
    mounted: function () {
        this.getdatd()
    },
    filters: { //过滤器   页面上调用{{dt.state|lei}}
        sd_ert(num) {
            var sd_serrt = ""

            if (num == 1) {
                sd_serrt = "未审核"
            }
            if (num == 2) {
                sd_serrt = "审核通过"
            }
            if (num == 3) {
                sd_serrt = "审核不通过"
            }
            return sd_serrt
        }
    }
})





window.addEventListener('refresh', function (e) {
    km.getdatd()
})
