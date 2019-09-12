<template>
    <div class="Header">
        <div class="SubjectLogo">
            <router-link to="/">{{subjectName}}</router-link>
        </div>
        <div class="LoginInfo">
            <router-link to="/"><i class="el-icon-monitor"></i><span>首页</span></router-link>
            <router-link to="/" @click.native="layout"><i class="el-icon-switch-button"></i><span>注销</span></router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Header',
        data(){
            return {
            }
        },
        computed:{
            subjectName(){
                return this.$store.state.subjectName
            }
        },
        methods:{
            layout(){
                localStorage.setItem('token', JSON.stringify(''));
                this.$store.commit('updateStorage',JSON.stringify(''));
            }
        }
    }
</script>
<style>
    .Header{
        height:56px;
        width:100%;
        /* background:url("../../assets/images/top-bg.png") no-repeat center; */
        display:flex;
		background-color: #A3B6CC;
		position: fixed;
		top: 0;
		left: 240px;
		z-index: 999;
    }
    .SubjectLogo a{
        display: block;
        line-height: 56px;
		margin-left: 15px;
		font-size: 18px;
		color: #fff;
    }
    .LoginInfo{
        padding-right: 240px;
        flex:1;
        display: flex;
        justify-content: flex-end;
        height:100%;

    }
    .LoginInfo a{
        width:80px;
         display:block;
    }
    .LoginInfo span{
		margin-left: 10px;
		line-height: 56px;
		color: #fff;
    }
    .LoginInfo img{
        margin-top: 15px;
    }
	.LoginInfo i{
		color: #fff;
	}
</style>
