<!--微课视频-->
<template>
    <div class="Video">
        <div class="main_cont">
            <h2 class="jp_title clearfix">
                <span class="borderspan"></span><span class="title_span">{{name}}</span>
            </h2>
            <div class="zw_cont"></div>
            <div class="course_bb_cont">
                <ul id="ul_shipin" class="course_ul clearfix">
                    <li v-for="(item,index) in data" @click="show(item.name,item.url,item.id,item.coverUrl)" :key="index">
                        <div class="course_img_div">
                            <img :src="item.coverUrl">
                        </div>
                        <p class="course_name">{{item.name}}</p>
                        <div class="browse_collect clearfix">
                            <div class="l_browse">
                                <span>{{item.browserNum}}</span>次观看
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
            <div v-if="showVideo" class="fade" id="fade">
                <div class="succ-pop">
                    <div class="alertbox_title clearfix">
                        <div class="alert_title">{{title}}</div>
                        <div class="close" @click="videoClose">×</div>
                    </div>
                    <div id="div_video" >
                        <!--<ali-player @play="play($event)"
                                    :useFlashPrism="true"
                                    :autoplay="true"
                                    :isLive="false"
                                    :rePlay="false"
                                    :showBuffer="true"
                                    showBarTime="5000"
                                    width="100%"
                                    height="450px"
                                    controlBarVisibility="hover"
                                    :source="videoUrl"
                                    ref="player"
                                    v-if="videoUrl != ''"></ali-player>-->
                        <!--<video id="videoItem" width="100%" height="450" autoplay="autoplay" preload="auto" controls @contextmenu.prevent>
                            <source :src="videoUrl" type="video/mp4">
                        </video>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    import AliPlayer from '../../api/AliPlayer'
    //import AliPlayer from 'vue-aliplayer'
    export default {
        name:'Video',
        props:['id','name'],
        components:{
            //"AliPlayer":AliPlayer
        },
        data(){
            return {
                data:'',
                title:'',
                current:0,
                totalTime:0,
                stop:true,
                videoUrl:'',
                showVideo:false,
                foreWidth:'',
                time:null,
                browseNum:0,
            }
        },
        created(){
            this.$store.commit('updateChapterId',this.id);
            https.fetchPost('/student/chapter/video',{'id':this.id}).then(res=>{
                this.data=res.data.data;
                console.log('video',res.data.data);
            }).catch(err=>{
                console.log(err);
            })

        },
        /*watch:{
            showVideo(){
                if(this.showVideo){
                    console.log('aajfie');
                }
            }
        },*/
        methods:{
            show(title,url,videoId,coverUrl){
                let _this=this;
                _this.showVideo=true;
                _this.videoUrl=url;
                _this.title=title;
                let videoItem;
                setTimeout(()=>{
                    this.initAliplayer(url,coverUrl);
                });

            },
            videoClose(){
                this.showVideo=false;
                clearInterval(this.time);
                this.time=null;
                this.current=0;
            },
            fullScreen(){
                let videoItem=document.getElementById('videoItem');
                videoItem.a();
            },
            play(event) {
                //console.log(event);
                //console.log(this.$refs.player.getDuration());
            },
            initAliplayer(videoUrl, coverUrl){
                let player = new Aliplayer({
                        "id": 'div_video',
                        "source": videoUrl,
                        "cover": coverUrl,
                        "width": "100%",
                        "height": "450px",
                        "autoplay": true,
                        "isLive": false,
                        "rePlay": false,
                        "playsinline": true,
                        "preload": false,
                        "controlBarVisibility": "hover",
                        "useH5Prism": true,
                        "skinLayout": [
                            {
                                "name": "bigPlayButton",
                                "align": "blabs",
                                "x": 30,
                                "y": 80
                            },
                            {
                                "name": "H5Loading",
                                "align": "cc"
                            },
                            {
                                "name": "errorDisplay",
                                "align": "tlabs",
                                "x": 0,
                                "y": 0
                            },
                            {
                                "name": "infoDisplay"
                            },
                            {
                                "name": "tooltip",
                                "align": "blabs",
                                "x": 0,
                                "y": 56
                            },
                            {
                                "name": "thumbnail"
                            },
                            {
                                "name": "controlBar",
                                "align": "blabs",
                                "x": 0,
                                "y": 0,
                                "children": [
                                    /*{
                                        "name": "progress",
                                        "align": "blabs",
                                        "x": 0,
                                        "y": 44
                                    },*/
                                    {
                                        "name": "playButton",
                                        "align": "tl",
                                        "x": 15,
                                        "y": 12
                                    },
                                    {
                                        "name": "timeDisplay",
                                        "align": "tl",
                                        "x": 10,
                                        "y": 7
                                    },
                                    {
                                        "name": "fullScreenButton",
                                        "align": "tr",
                                        "x": 10,
                                        "y": 12
                                    },
                                    {
                                        "name": "volume",
                                        "align": "tr",
                                        "x": 5,
                                        "y": 10
                                    }
                                ]
                            }
                        ]
                    }, function (player) {
                        console.log("播放器创建了。");
                    }
                );
                /*function endedHandle(){
                    let newPlayAuth='';
                    player.dispose();
                    //document.getElementById('div_video').empty();
                    this.initAliplayer(this.aliUrl,this.coverUrl);
                }
                player.on("ended", endedHandle);*/
            },
        }
    }
</script>
<style scoped>
    .zw_cont {
        width: 200px;
        height: 60px;
        position: absolute;
        top: 45%;
        left: 50%;
        margin-left: -100px;
        font-size: 40px;
        line-height: 60px;
        text-align: center;
        color: #ccc;
    }
    .course_ul{
        display: flex;
    }
    .course_ul li{
        width: 208px;
        height:218px;
        padding:10px;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        background: #fafafa;
        margin: 30px 30px 0 0;
        cursor: pointer;
    }

    .course_ul li:hover {
        border: 1px solid #409EFF;
    }

    .course_ul li:hover .course_name {
        color: #409EFF;
    }

    .course_img_div {
        background: #e9e9e9;
        border-radius: 8px;
        text-align: center;
        height: 150px;
        line-height: 150px;
        position: relative;
        overflow: hidden;
    }

    .course_img_div img {
        vertical-align: middle;
        max-height: 150px;
        margin-left: -30px;
    }

    .course_name {
        color: #212121;
        font-size: 16px;
        height: 40px;
        line-height: 20px;
        padding: 7px 0;
		width: 200px;
		overflow: hidden;
    }

    .videoClass {
        width: 100%;
        height: 440px;
    }

    .fade, .picfade {
        width: 100%;
        height: 100%;
        background: url(../../assets/images/other/fade_bg.png);
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 99;
        overflow: auto;
    }

    .succ-pop {
        width: 800px;
        height: 480px;
        background: #fff;
        position: fixed;
        left: 50%;
        top: 32%;
        margin-left: -400px;
        margin-top: -150px;
        z-index: 999;
        border-radius: 2px;
    }

    .succ-pop .close {
        float: right;
        color: #999;
        width: 40px;
        height: 40px;
        font: bold 14px simsun;
        text-align: center;
        line-height: 40px;
        text-shadow: 0 1px 0 #ddd;
        cursor: pointer;
        z-index: 99999;
    }

    .succ-pop .close:hover {
        background: #0F9ECA;
        color: #fff;
        border-radius: 2px;
    }

    .alertbox_title {
        height:39px;
        padding: 0 0 0 10px;
        border-bottom: 1px solid #eee;
        font-size: 18px;
    }

    .alertbox_title .alert_title {
        float: left;
        line-height: 40px;
    }

    #div_video{
        user-select: none;
    }
    /*#div_video,#div_video video,#div_video embed{width: 100%;height: 440px;}*/
    .Video .videoButton{
        position: relative;
        display: flex;
        background:lightpink;
        width:100%;
        height:75px;
        /*position:absolute;*/
        bottom:75px;
        font-size: 40px;
    }
    .Video .videoIcon{
        margin-left: 40px;
    }

    .Video .progress{
        margin:12px 0 0 20px;
        font-size: 16px;
        color:#fff;
    }
    .Video .progress .first{
        text-align: right;
    }
    .Video .progress .second{
        text-align: left;
    }
    .Video .volume,.Video .fullscreen{
        font-size: 34px;
        position: absolute;
        right:40px;
    }
    .Video .volume{
        right:90px;
    }
    .Video .proBack{
        position: absolute;
        bottom:20px;
        left:5%;
        width:90%;
        height:5px;
        border-radius: 4px;
        background:lime;
    }
    .Video .proFore{
        display: block;
        width:10%;
        height:5px;
        border-radius: 4px;
        background:lightseagreen;
    }
</style>
