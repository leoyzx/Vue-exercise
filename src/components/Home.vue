<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>

        </mt-swipe>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: "Home",
        data(){
            return {
                swipeList:[]
            }
        },
        methods:{
            getSwipe(){
                this.axios.get("http://localhost:4000/api/swipe",
                ).then(result=>{
                    if (result.status===200){
                        this.swipeList=result.data.data
                        console.log(this.swipeList)
                    }else{
                        Toast("加载轮播图失败！")
                    }
                }).catch(err=>console.log(err))
            }
        },
        created() {
            this.getSwipe()
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background: #2d8cf0;
        }
        &:nth-child(2){
            background: #19be6b;
        }
        &:nth-child(3){
            background: #ff9900;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
