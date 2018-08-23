var km = new Vue({
    el: '#seek_apper',
    data: {
        page: 1,
        sd: [],
        is_jh_drr:false
    },
    methods: { 
        get_data: function (call_der) {
            var getCapitalLog = {},
                th = this
            getCapitalLog.key = localStorage.token
            getCapitalLog.page = this.page
            m_ajax("/api/account/getCapitalLog", getCapitalLog, function (data) {
            	
            	   	try{
            	   		call_der(data.list)
            	   	}catch(e){
            	   		
            	   	}
            	   	
            	if(!data.list){
            		return
            	}
            	
                data.list.map(function (a) {
                    th.sd.push(a)
                })
                th.is_jh_drr=true

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
    var th=this
    km.get_data(function(der){
    	if(der){
    		th.endPullupToRefresh(false)
    	}else{
    		th.endPullupToRefresh(true)
    	}
    
    })
    


}



window.addEventListener('refresh', function (e) {
    km.page=1
    km.sd=[]
    km.get_data()
})

