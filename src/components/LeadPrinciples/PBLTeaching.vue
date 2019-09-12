<!--PBL教学-->
<template>
    <div class="PBLTeaching">
        <div class="main_cont">
            <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{name}}</span></h2>
            <div class="xxyq_part">
                <div class="pbl_left">
                    <div v-html="content"></div>
                    <div class="gglx_part">
                        <div class="gglx_title_div">
                            <h2>问答</h2>
                        </div>
                        <div class="box">
                            <div class="right" v-for="(item,index) in questionGroup" :key="item.question">
                                <el-tooltip class="item" effect="light" :content="item.answer" placement="right-start">
                                    <el-button>{{index+1}}、{{item.question}}</el-button>
                                </el-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pbl_right">
                    <div class="pbl_outer">
                        <div class="pbl_inner" id="inner" :style="{width:totalWidth+'px'}">
                            <div class="imageBg" v-for="(item,id) in image" :key="id">
                                <img  :src="item"/>
                                <div class="pbl_prev" @click="Previous(id,stepEnd,imageWidth,totalWidth)"></div>
                                <div class="pbl_next" @click="Next(id,stepEnd,imageWidth,totalWidth)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    export default {
        name:'PBLTeaching',
        props:['id','name'],
        data(){
            return {
                content:'',
                image:'',
                totalWidth:0,
                imageWidth:667,
                stepEnd:0,
                questionGroup:[]
            }
        },
        created() {
            this.$store.commit('updateChapterId',this.id);
            https.fetchPost('/student/chapter/pbl',{'id':this.id}).then(res=>{
                console.log(res.data.data);
                this.content=res.data.data.content;
                this.image=res.data.data.image;
                this.totalWidth=this.image.length*667;
                this.questionGroup=res.data.data.question;
                this.stepEnd=this.image.length-1;
            }).catch(err=>{
                console.log(err);
            })
        },
        methods:{
            Previous(imageId,end,imageWidth,totalWidth){
                let inner=document.getElementById('inner');
                imageId--;
                if(imageId<0){
                    imageId=end;
                    inner.style.left=-totalWidth+imageWidth+'px';
                    return
                }
                inner.style.left=-imageId*imageWidth+'px';
            },
            Next(imageId,end,imageWidth,totalWidth){
                let inner=document.getElementById('inner');
                imageId++;
                if(imageId>end){
                    imageId=0;
                    inner.style.left=0;
                    return
                }
                inner.style.left=-imageId*imageWidth+'px';
            },
        }
    }
</script>
<style scoped>
	.gglx_part{
		margin-top: 30px;
	}
	.gglx_title_div{
		margin-bottom: 10px;
	}
    .PBLTeaching .xxyq_part{
        padding:10px 0 10px 10px;
        display: flex;
        margin:30px auto;
    }
    .PBLTeaching .box {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
    .PBLTeaching .el-button{
        border:none;
		padding: 12px 0;
    }
    /*.PBLTeaching .right {
        float: right;
        width: 60px;
    }*/
    .PBLTeaching .el-button:focus,.PBLTeaching .el-button:hover {
        color: #606266;
        border-color: transparent;
        background-color: transparent;
    }
    .PBLTeaching .item {
        margin: 4px;
    }

    .PBLTeaching .left .el-tooltip__popper,
    .PBLTeaching .right .el-tooltip__popper {
        padding: 8px 10px;
    }
    .PBLTeaching .pbl_left{
        margin-right: 20px;
        min-width: 100px;
        font-size:16px;
        line-height: 30px;
        /* text-indent: 2em; */
    }
    .PBLTeaching .pbl_right{
        margin-left: 30px;
        border:1px solid lavender;
        height:667px;
    }
    .PBLTeaching .pbl_outer{
        /*display: none;*/
        position:relative;
        width:667px;
        height:667px;
        overflow: hidden;
    }

    .PBLTeaching .pbl_outer:nth-child(1){
        display: block;
    }

    .PBLTeaching .pbl_inner{
        display: flex;
        position:absolute;
        top:0;
        left:0;
    }
    .PBLTeaching .pbl_inner div img{
        display: block;
        width:100%;
    }
    .PBLTeaching .pbl_prev,.pbl_next{
        position:absolute;
        top:50%;
        margin-top:-19px;
        width:26px;
        height:38px;
        background:url("../../assets/images/other/pre.png");
        opacity:0.5;
        filter:alpha(opacity=50);
    }
    .PBLTeaching .pbl_prev:hover,.PBLTeaching .pbl_next:hover{
        opacity:1;
        filter:alpha(opacity=100);
    }
    .PBLTeaching .pbl_prev{
        left:20px;
    }
    .PBLTeaching .pbl_next{
        right:20px;
        background-position:-26px 0;
    }
    .PBLTeaching .imageBg{
        width:667px;
        height:667px;
        position:relative;
    }
</style>
