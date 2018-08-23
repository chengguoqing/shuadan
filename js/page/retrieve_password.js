//找回密码 
new Vue({
    el: '#seek_apper',
    data: {
        yzm: "",
        form: {
            key: "",
            mobile: "", //	手机号
            verifyCode: "", //验证码	
            jpassword: "", //第一次输入密码
            password: "" //弟二次新密码
        }
    },
    methods: {
        huoqu_er: function () { //获取验证码按钮触发
            if (!yanza.phone(this.form.mobile)) {
                mui.toast("手机号格式不正确");
                return
            }
            var sendCode = {},
                th = this
            sendCode.mobile = this.form.mobile
            sendCode.event = 2
            sendCode.key = localStorage.key_s
            //                 获取验证码接口
            m_ajax("/api/sms/sendCode", sendCode, function (data) {
             
            },true)
        },
        queren_s: function () { //确认按钮触发
            if (!yanza.phone(this.form.mobile)) {
                mui.toast("手机号格式不正确");
                return
            }
            if (!this.form.verifyCode) {
                mui.toast("请输入验证码");
                return
            }
         

            if (!this.form.jpassword) {
                mui.toast("请输入密码");
                return
            }

            if (!this.form.password) {
                mui.toast("请输入确认密码");
                return
            }
            if (this.form.jpassword != this.form.password) {
                mui.toast("两次输入的密码不一致");
                return
            }
            this.form.key = localStorage.key_s
            var th = this
            m_ajax("/api/index/resetPwd", this.form, function (data, user_in) {
                localStorage.user_info = JSON.stringify(user_in)
                th.zhu("login")
            },true)
        }
    },
    mounted: function () {

    }
})
