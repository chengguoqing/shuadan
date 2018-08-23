var km = new Vue({
    el: '#seek_apper',
    data: {
        page: 1,
        sd: []
    },
    methods: {
        get_data: function () {
            var getCapitalLog = {},
                th = this
            getCapitalLog.key = localStorage.token
            getCapitalLog.page = this.page
              getCapitalLog.type=2
             getCapitalLog.pageSize=20
            m_ajax("/api/account/getWithdrawalLog", getCapitalLog, function (data) {
                data.list.map(function (a) {
                    th.sd.push(a)
                })

            })
        }
    },
    mounted: function () {
        this.get_data()




    }
})

mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        up: {
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});


function pullupRefresh() {
    km.page++
        km.get_data()
    this.endPullupToRefresh(false)


}
