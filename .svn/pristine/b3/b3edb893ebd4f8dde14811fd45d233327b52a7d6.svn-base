<!--概述-->
<template>
    <div class="Overview">
        <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{name}}</span></h2>
        <div class="laboratoryRight" id="laboratory-outer1">
            <div v-html="data"></div>
            <!--<div class="describe">
                <div v-html="data"></div>
            </div>
            <div class="human_right">
                <iframe id="head" src="https://human.biodigital.com/widget/?be=30G4&ui-tools=true&ui-dissect=true&ui-isolate=true&ui-xray=true&ui-cross-section=false&ui-annotations=true&ui-info=false&ui-zoom=true&ui-share=false&camera=-0.33,0.952,-0.596,-0.334,0.915,-0.382,0.006,0.988,-0.154&dk=92fd078e4c4a38a737e9511b38aabaeb8d4875b1"
                        frameborder="0">
                </iframe>
            </div>-->
            <div class="pbl_right">
                <iframe v-for="(url,index) in url3d" :key="index" :src="url" width="400" height="600" frameborder="0" scrolling="auto"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    export default{
        name:"Overview",
        props:["id"],
        data() {
            return {
                data:'',
                name:'',
                url3d:[]
            };
        },
        created(){
            https.fetchPost('/student/chapter/note',{'id':this.id}).then(res=>{
                this.name=res.data.data.name;
                this.data=res.data.data.content;
                this.url3d=res.data.data.url3d;
            }).catch(err=>{
                console.log(err);
            })
        },
        methods: {

        }
    }
</script>
<style>
    .Overview .laboratoryRight{
        display: flex;
        padding: 15px 15px 50px 15px;
    }
    .Overview .laboratoryRight h1{
        font-size: 24px;
        width: 60%;
        text-align: center;
        color: #1976d2;
        margin-bottom: 20px;
    }
    .Overview .laboratoryRight video{
        width: 50%;
        margin-top: 20px
    }
    .Overview .describe,.human_right{
        width:50%;
    }
    .Overview .describe{
        line-height: 30px;
        font-size: 16px;
        text-indent: 2em;
    }
    .Overview .el-table__header-wrapper{
        display: none;
    }
</style>
