<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {}
        },
        methods:{
            getSwipe(){
                this.axios.get("http://vue.studyit.io/api/getlunbo").then(result=>{
                    console.log(result.body)
                })
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
}
</style>
