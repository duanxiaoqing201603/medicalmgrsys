<!--教学课件-->
<template>
    <div class="Courseware">
        <h2 class="jp_title">
            <span class="borderspan"></span><span class="title_span">{{name}}</span>
        </h2>
        <div class="xxyq_part">
            <div class="xxyq_title_div">
                <div class="main">
                    <div class="leftppt">
                        <ul class="nav">
                            <li v-for="(item,index) in items" :class="{selected:index===curId}" @click="tab(index)" :key="index">{{item.name}}</li>
                        </ul>
                        <div class="ppt_down">
                            <!--<el-button type="primary" :id="curId" @click="download(curId)">下载PPT</el-button>-->
                            <a :href="downUrl" download>下载PPT</a>
                        </div>

                    </div>
                    <div class="rightppt">
                        <!--<div class="outer" v-for="(divContent,index) in divContents" v-show="index===curId" :key="index">
                            <div class="inner" id="inner" :style="{width:divContent.totalWidth+'px'}">
                                <div class="imageBg" v-for="(item,id) in divContent.divImage" :key="id">
                                    <img  :src="item.image"/>
                                    <div class="prev" @click="Previous(id,index,divContent.stepEnd,divContent.imageWidth,divContent.totalWidth)"></div>
                                    <div class="next" @click="Next(id,index,divContent.stepEnd,divContent.imageWidth,divContent.totalWidth)"></div>
                                </div>
                            </div>
                        </div>-->
                        <div class="outer" v-for="(item,index) in items" v-show="index===curId" :key="index">
                            <div class="inner" id="inner" :style="{width:totalWidth[index]+'px'}">
                                <div class="imageBg" v-for="(item,id) in images" :key="id">
                                    <img style="width: 720px; height: 540px;"  :src="item"/>
                                    <div class="prev" @click="Previous(id,index,stepEnd,imageWidth,totalWidth[index])"></div>
                                    <div class="next" @click="Next(id,index,stepEnd,imageWidth,totalWidth[index])"></div>
                                </div>
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
        name:'Courseware',
        props:['id','name'],
        data(){
            return {
                curId:0,
                pptId:'',
                pptIds:[],
                firstPPT:0,
                items:{},
                imageWidth:720,
                divContents:{},
                images:[],
                totalWidth:[],
                stepEnd:0,
                pptName:'',
                downUrl:''
            }
        },
        watch:{
            curId(){
                this.pptId=this.pptIds[this.curId];
            },
            pptId(){
                https.fetchPost('/student/chapter/ppt/detail',{'id':this.pptId}).then(res=>{
                    this.images=res.data.data.imageArray;
                    this.downUrl=res.data.data.downloadUrl;
                    this.totalWidth[this.curId]=this.images.length*720;
                    this.stepEnd=this.images.length-1;
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        created(){
            this.$store.commit('updateChapterId',this.id);
            https.fetchPost('/student/chapter/ppt',{'id':this.id}).then(res=>{
                //console.log('ppt',res.data.data);
                this.items=res.data.data;
                for(let i=0;i<this.items.length;i++){
                    this.pptIds.push(this.items[i].id);
                }
                this.pptId=this.items[0].id;
                this.pptName=this.items[0].fileName;

                https.fetchPost('/student/chapter/ppt/detail',{'id':this.pptId}).then(res=>{
                    //console.log('detail',res.data.data);
                    this.downUrl=res.data.data.downloadUrl;
                    this.images=res.data.data.imageArray;
                    this.totalWidth[this.curId]=this.images.length*720;
                    this.stepEnd=this.images.length-1;
                }).catch(err=>{
                    console.log(err);
                })

            }).catch(err=>{
                console.log(err);
            });

        },
        methods:{
            tab(index){
                this.curId=index;
                this.pptId=this.pptIds[index];
                this.pptName=this.items[index].fileName;
            },
            Previous(imageId,curId,end,imageWidth,totalWidth){

                let inner=document.getElementsByClassName('inner')[curId];
                imageId--;
                if(imageId<0){
                    imageId=end;
                    inner.style.left=-totalWidth+imageWidth+'px';
                    return
                }
                inner.style.left=-imageId*imageWidth+'px';
            },
            Next(imageId,curId,end,imageWidth,totalWidth){
                let inner=document.getElementsByClassName('inner')[curId];
                imageId++;
                if(imageId>end){
                    imageId=0;
                    inner.style.left=0;
                    return
                }
                inner.style.left=-imageId*imageWidth+'px';
            },
            download(curId){
                //window.open(this.downUrl);
               /* https.fetchGetTest('/student/chapter/ppt/download/'+this.pptId).then(resp => {
                    console.log('resp data',resp.data);
                    console.log('resp',resp.config.url);
                    window.open(resp.config.url);
                    /!*const headers = resp.headers
                    const contentType = headers['content-type']
                    if (!resp.data) {
                        return false
                    } else {
                        const blob = new Blob([resp.data], { type: contentType })
                        const contentDisposition = resp.headers['content-disposition']

                        this.downFile(blob, this.pptName);
                    }*!/
                }).catch(function(error) {
                    console.log(error)
                })*/
            },
            /*downFile(blob, fileName) {
                // 非IE下载
                if ('download' in document.createElement('a')) {
                    const link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob) // 创建下载的链接
                    link.download = fileName// 下载后文件名
                    link.style.display = 'none'
                    document.body.appendChild(link)
                    link.click() // 点击下载
                    window.URL.revokeObjectURL(link.href) // 释放掉blob对象
                    document.body.removeChild(link) // 下载完成移除元素
                } else {
                    // IE10+下载
                    window.navigator.msSaveBlob(blob)
                }
            }*/
        }
    }
</script>
<style scoped>
    .Courseware{
        user-select: none;
    }
    .main{
        display: flex;
        margin:30px 0;

    }
    .leftppt{
        width:200px;
    }
    .nav{
        display: flex;
        flex-direction:column;
    }
    .rightppt{
        border-left:1px solid #f2f2f2;
        /* padding:0 0 0 30px; */
		margin-left: 30px;
    }
    .leftppt .nav li{
        padding-left:10px;
        line-height: 50px;
        text-align: left;
        cursor:pointer;
        color:#686a76;
        margin-bottom:5px;
        font-size: 16px;
        border-radius: 4px;
    }
    .leftppt .nav li:hover{
        background:#eaf2ff;
        color: #409EFF;
    }
    .leftppt .nav li.selected{
        background:#409EFF;
        color: #fff;
    }
    .ppt_down{
        margin-top: 100px;
    }
    .ppt_down a{
        background-color: #409EFF;
        color: #fff;
        width: 120px;
        display: block;
        height: 46px;
        border-radius: 4px;
        margin:0 auto;
        cursor: pointer;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
    }
    .ppt_down button{
        background-color: #409EFF;
        color: #fff;
        width: 120px;
        display: block;
        height: 46px;
        border-radius: 4px;
        margin:0 auto;
        cursor: pointer;
    }
    .outer{
        position:relative;
        width:720px;
        height:540px;
        overflow: hidden;
    }
    .inner{
        height:100%;
        position:absolute;
        left:0;
        top:0;
        display: flex;
    }
    .prev,.next{
        position:absolute;
        top:50%;
        margin-top:-19px;
        width:26px;
        height:38px;
        background:url("../../assets/images/other/pre.png");
        opacity:0.5;
        filter:alpha(opacity=50);
    }
    .prev:hover,.next:hover{
        opacity:1;
        filter:alpha(opacity=100);
    }
    .prev{
        left:20px;
    }
    .next{
        right:20px;
        background-position:-26px 0;
    }
    .imageBg{
        width:720px;
        height:540px;
        position:relative;
    }
</style>
