<template>
    <div class="PerInfo">
        <div class="side-bar">
			<li style="background-color: #5C7799; padding-left: 15px; line-height: 56px; color: #fff; font-size: 18px; font-weight: bold;">昆明医科大学海源学院</li>
            <div class="userphoto">
                <img width="180" src="../../assets/images/other/touxiang.png">
                <div class="userphoto_p">
                    <b id="b_Uname">{{name}}</b>
                    <span id="span_banji" class="banji">{{className}}</span>
                </div>
            </div>
            <ul class="page-sidebar-menu">
                <li id="per_info" :class="{clicked:show==='per'}" @click="personal">个人信息</li>
                <li id="change_passw" :class="{clicked:show==='res'}" @click="reserve">实验预约</li>
                <!-- <li :class="{clicked:show==='cha'}" @click="change">修改密码</li> -->
            </ul>
        </div>
        <div class="continer">
            <Personal v-if="show==='per'"></Personal>
            <Reserve  v-if="show==='res'"></Reserve>
            <Change v-if="show==='cha'" ></Change>
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>
<script>
    import Personal from '../PerInfo/Personal';
    import Reserve from '../PerInfo/Reserve';
    import Change from '../PerInfo/Change'
    import https from '../../https'
    export default {
        name:"PerInfo",
        components:{
            Personal,
            Reserve,
            Change
        },
        data(){
            return {
                show:'per',
                name:'',
                className:''
            }
        },
        created() {
            https.fetchPost('/student/info/personal').then(res=>{
                let data=res.data.data;
                this.name=data.name;
                this.className=data.className;
            }).catch(err=>{
                console.log(err);
            })
        },
        methods:{
            personal(){
                this.show='per';

            },
            reserve(){
                this.show='res';
            },
            change(){
                this.show='cha';
            }
        }
    }
</script>
<style scoped>
    .PerInfo{
        width:100%;
        display: flex;
    }
    .side-bar {
        width: 240px;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        font-size: 14px;
        background:#304156;
        color:#bfcbd9;
        position: fixed;
        top: 0;
        left: 0;
    }
    .continer {
        flex: 1;
        min-height: 200px;
        height:100%;
        margin-top: 60px;
        margin-left: 250px;
        background: #fff;
        width: auto;
        /* padding: 6px 30px;
        border-radius: 10px;
        box-shadow: 0 0 15px 1px #d4d6d7; */
    }
    .userphoto {
		padding-top: 30px;
        text-align: center;
        color: #fff;
        height: 280px;
		background-color: #2B3B4F;
    }

    .userphoto .userphoto_p {
        font-size: 16px;
    }

    .userphoto .userphoto_p b {
        font-size: 16px;
    }

    .banji {
        font-size: 14px;
        display: block;
        margin-top: 5px;
    }
    .page-sidebar-menu>li {
        background: #304156;
        padding-left: 15px;
        font-size: 14px;
        color: #bfcbd9;
		height: 56px;
		line-height: 56px;
		cursor: pointer;
    }
    .page-sidebar-menu>li:hover {
        background: #263445;
    }
    .page-sidebar-menu>li.clicked {
        /* background: #409EFF; */
		color: #409eff;
    }
</style>
