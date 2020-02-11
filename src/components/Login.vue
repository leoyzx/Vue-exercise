<template>
    <div>
        <h1>使用.vue定义的组件 --- {{msg}}</h1>
        <mt-button type="default">default</mt-button>
        <router-link to="/account">Account</router-link>
        <router-link to="/items">Items</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                msg: '组件中的msg'
            };
        },
        methods:{
            show(){
                console.log('调用login.vue中的show方法');
            }
        }
    }
    export var title = '.vue文件中的export格式定义的变量 需要使用{}来接收，且名称需要一致';
</script>

<style scoped lang="scss">

</style>
