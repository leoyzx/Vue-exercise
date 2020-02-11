<template>
    <div class="app-container">
    <!--        顶部Header-->
        <div class="header">
            <mt-header fixed title="顶部导航栏"></mt-header>
        </div>

        <div class="footer">
            <mt-tabbar v-model="selected">

                <mt-tab-item id="home">
                    <router-link to="/home">
                        <div>
                            <Icon type="ios-home" class="icon" size="36" />
                            <br>首页
                        </div>
                    </router-link>
                </mt-tab-item>

                <mt-tab-item id="member">
                    <router-link to="/member">
                        <div>
                            <Icon type="ios-person" size="36" />
                            <br>会员
                        </div>
                    </router-link>
                </mt-tab-item>

                <mt-tab-item id="cart">
                    <router-link to="/cart">
                        <div>
                            <Icon type="ios-cart" size="36" />
                            <br>购物车
                        </div>
                    </router-link>
                </mt-tab-item>

                <mt-tab-item id="setting">
                    <router-link to="/search">
                        <div>
                            <Icon type="ios-search" size="36" />
                            <br>搜索
                        </div>
                    </router-link>
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
    export default {
        name: "App",
        data(){
            return{
                selected:"home"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
         padding-top: 40px
     }
    .footer{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
