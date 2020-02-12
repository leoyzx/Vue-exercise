import VueRouter from 'vue-router'
//webpack默认无法识别.vue文件 需要安装第三方loader

import HomeContainer from "../components/Home.vue";
import CartContainer from "../components/Cart.vue";
import MemberContainer from "../components/Member.vue";
import SearchContainer from "../components/Search.vue";

var router = new VueRouter({
    routes:[
        {path: "/",redirect:"/home"},
        {path: "/home",component:HomeContainer},
        {path: "/cart",component:CartContainer},
        {path: "/member",component:MemberContainer},
        {path: "/search",component:SearchContainer},
    ],
    // linkActiveClass:""
})
export default router

