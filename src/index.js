// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
//创建并导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui'
Vue.use(Mint)
import ViewUI from 'view-design'
Vue.use(ViewUI)
import 'view-design/dist/styles/iview.css'

import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from "./js/router"

var vm = new Vue({
    el:'#app',
    data:{
    },
    render: function (createElement) {
        return createElement(App)
    },
    router
})
