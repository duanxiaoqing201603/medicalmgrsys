<template>
    <div class="Experiment">
        <!--<el-tree
                :data="data"
                 node-key="id"
                :default-checked-keys="[0]"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick"
        >
        </el-tree>-->
        <div class="tree">
            <ul>
				<li style="background-color: #5C7799; line-height: 56px; color: #fff; font-size: 18px; font-weight: bold;">昆明医科大学海源学院</li>
                <li :class="{select:index===curId}" v-for="(item,index) in data" :key="item.id" @click="tab(item.id,index)" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{item.name}}</li>
            </ul>
        </div>
        <div v-show="!experimentFlag" class="content">
			<h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{name}}</span>
				<el-button v-if="url3d" style="position: absolute;right: 30px;" type="primary" @click="doExperiment">我要做实验</el-button>
			</h2>
            <div class="xxyq_part">
                <div class="pbl_left">
                    <div v-html="content"></div>
                </div>
                <div v-if="aliUrl" class="fade" id="fade">
                    <div class="succ-pop">
                        <div v-if="type==='1'" class="experimentVideo" id="div_video" >
                            <div v-for="(item,index) in data" :key="index">
                                <div v-if="index===curId" :id="'div_video'+index"></div>
                            </div>

                        </div>
                        <div v-if="type==='2'">
                            <video v-if="aliUrl" :src="aliUrl" width="600px" height="350px"></video>
                        </div>
                    </div>
                </div>
            </div>

			<!-- 视频结束 -->
        </div>

        <div v-if="experimentFlag" class="content1">
            <div v-if="testContent" class="panel">
                <div class="gglx_title_div" style="display: flex;justify-content: space-between">
                    <h5>{{testTitle}}</h5><span>00:{{showTime}}</span>
                </div>
                <div class="gglx_cont">
                    <div class="gglx_div">
                        <div>
                            <!--<div class="test_title">{{testData.title}}</div>-->
                            <template v-if="radioBox">
                                <el-radio-group v-model="radio">
                                    <el-radio v-for="(option,index) in testData.options" :key="index" :label="option"
                                              @change="radioChecked(option,index)">{{option}}</el-radio>
                                </el-radio-group>
                            </template>
                            <!--<template v-else>
                                <el-checkbox-group v-model="checked">
                                    <el-checkbox  v-for="(option,uid) in item.options" :key="uid" :label="option"
                                                  @change="checkChecked(index,option,uid)">{{option}}</el-checkbox>
                                </el-checkbox-group>
                            </template>-->
                            <div class="pre_next_Btn clearfix">
                                <!--提交按钮状态-->
                                <el-button @click="commit">提交</el-button>
                                <!--<el-button :disabled="testId===testTotal" @click="next">下一题</el-button>-->
                            </div>
                            <!--<div style="padding: 10px 0;">
                                我的答案：{{curSelected[index]}}
                            </div>-->
                            <div style="padding-bottom:30px ;" v-if="showAnswer">
                                答案：{{result}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 100%; margin: 0">
                <!--<iframe id="myWidget"
                        src="https://human.biodigital.com/widget/?be=2sYC&ui-tools=true&ui-dissect=true&ui-isolate=true&ui-xray=true&ui-cross-section=false&ui-annotations=true&ui-info=true&ui-zoom=true&ui-share=false&load-rotate=10&dk=92fd078e4c4a38a737e9511b38aabaeb8d4875b1"
                        width="100%"
                 :"url3d"       height="100%">
                </iframe>-->
                <iframe id="myWidget"
						:src="url3d"
                        width="100%"
                        height="100%">
                </iframe>
            </div>
			<div style="width: 500px;position: absolute;left: 250px; top:60px; height: 60px; line-height: 60px;">
                <el-button @click="back">返回</el-button>
                <el-button v-if="!humanReady" ref="start" @click="start">开始答题</el-button>
				<div style="float: right;">
				    <audio v-if="audioUrl" :src="audioUrl" controls="controls" autoplay="autoplay"></audio>
				</div>
			</div>
            
        </div>

    </div>
</template>
<script>
    import https from '../../https'
	import AliPlayer from '../../api/AliPlayer'
    import {Message,MessageBox,Notification} from 'element-ui'
    var yaw = 0;
    let player;
    export default{
        name:'Experiment',
		components:{
		    //"AliPlayer":AliPlayer
		},
        data(){
            return {
                data:'',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                content: '',
                totalWidth:0,
                imageWidth:667,
                stepEnd:0,
                image:'',
                divFlag:true,
                name:'',
                radio:0,
                checked: [],
                testId:0,
                disabled:false,
                testTotal:0,
                radioBox:true,
                showAnswer:false,
                curSelected:[],
                testData:'',
                id:'',
                url3d:'',
                curId:0,
				showVideo:false,
				browseNum:0,
				videoId:'',
				aliUrl:'',
				aliCoverUrl:'',
				aliTitle:'',
                time:null,
                experimentFlag:false,
                timer:null,
                human:{},
                objects:[],
                object:'',
                objectName:'',
                objectId:'',
                showTime:59,
                curTotal:0,
                result:'',
                score:0,
                answer:0,
                ifFinish:true,
                testContent:false,
                isLast:false,
                testTitle:'',
                humanReady:true,
                type:'',
                url:'',
                audioId:'',
                audioUrl:'',
            }
        },
        created(){
            https.fetchPost('/student/experiment3d/list').then(res=>{
                //console.log('3d',res);
                this.data=res.data.data;
                this.id=this.data[0].id;
                https.fetchPost('/student/experiment3d/detail',{'id':this.id}).then(res=>{
                    let dataList=res.data.data;
                    this.content=dataList.content;
					this.aliUrl=dataList.url;
					this.aliCoverUrl=dataList.coverUrl;
					this.aliTitle=dataList.videoTitle;
                    this.name=dataList.name;
                    this.type=dataList.type;
                    this.audioUrl=dataList.audioUrl;
                    this.image=dataList.image;
                    this.divFlag=this.image.length !== 0;
                    this.totalWidth=this.image.length*this.imageWidth;
                    this.stepEnd=this.image.length-1;
                    //this.testData=dataList.test;
                    this.url3d=dataList.url3d;
					this.videoId=dataList.videoId;
					setTimeout(()=>{
                        this.initAliplayer('div_video0',this.aliUrl,this.coverUrl);
                    },1000);
                }).catch(err=>{
                    console.log(err);
                });

            }).catch(err=>{
                console.log(err);
            });
        },
        methods: {
            tab(id,index){
                this.id=id;
                this.experimentFlag=false;
                this.curId=index;
                https.fetchPost('/student/experiment3d/detail',{'id':id}).then(res=>{
                    let dataList=res.data.data;
                    console.log('dataList',dataList);
                    this.content=dataList.content;
                    this.aliUrl=dataList.url;
                    //console.log('dataList',dataList);
					this.aliCoverUrl=dataList.coverUrl;
					this.aliTitle=dataList.videoTitle;
                    this.type=dataList.type;
                    this.audioUrl=dataList.audioUrl;
                    console.log('this.audioUrl',this.audioUrl);
                    this.name=dataList.name;
                    this.image=dataList.image;
                    this.divFlag=this.image.length !== 0;
                    this.totalWidth=this.image.length*this.imageWidth;
                    this.stepEnd=this.image.length-1;
                    //this.testData=dataList.test;
                    this.url3d=dataList.url3d;
					this.videoId=dataList.videoId;
                    setTimeout(()=>{
                        this.initAliplayer('div_video'+index,this.aliUrl,this.coverUrl);
                    },1000);
                }).catch(err=>{
                    console.log(err);
                });
            },
            radioChecked(val,index){
                this.$forceUpdate();
                let cur=val.substr(0,1);
                this.answer=index+1;
                /*this.data[index].answer = this.data[index].answer?this.data[index].answer:[];
                this.data[index].answer=cur;
                this.curSelected[index]=this.data[index].answer;*/
            },
            commit(){
                clearInterval(this.timer);
                this.showTime=59;
                https.fetchPost('/student/experiment3dTest/check',
                    {
                        id:this.testId,
                        answer:this.answer
                    }).then(res=>{
                        let dataList=res.data.data;
                        this.result=dataList.result===false?'错误':'正确';
                        this.showAnswer=true;
                        this.answer=0;

                        setTimeout(()=>{
                            this.showAnswer=false;
                            this.result='';
                            if(!dataList.isLast){
                                this.testData=dataList.testData;
                                this.objectName=dataList.testData.showName;
                                this.testId=dataList.testData.id;
                                this.testTitle=dataList.testData.title;
                                console.log('commit',this.objectName);
                                this.show3d(this.objectName);
                                //this.showTime=59;
                                this.Interval();
                            }else{
                                this.score=dataList.score;
                                MessageBox.confirm('已经答完题目，分数为'+this.score, '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText:'',
                                    type: 'warning'
                                }).then(()=>{
                                    this.experimentFlag=false;
                                }).catch(()=>{
                                    this.experimentFlag=false;
                                })
                            }
                        },1000);
                    });
            },
			show(title,url,videoId,coverUrl){
			    let _this=this;
			    _this.showVideo=true;
			    _this.aliUrl=url;
			    _this.title=title;
			    let videoItem;
			},
			videoClose(){
			    this.showVideo=false;
			    clearInterval(this.time);
			    this.time=null;
			    this.current=0;
			},
			play(event) {
			    //console.log(event);
			    //console.log(this.$refs.player.getDuration());
			},
            doExperiment(){
                this.answer=0;
                this.result='';
                this.experimentFlag=true;
                this.humanReady=true;
                this.testContent=false;
                setTimeout(()=>{
                    let human = new HumanAPI("myWidget");
                    this.human=human;
                    let _this=this;
                    this.human.on('human.ready',()=>{
                        this.humanReady=false;
                    });
                },1000);
                clearInterval(this.timer);
                this.showTime=59;
                https.fetchPost('/student/experiment3dTest/init',{id:this.id}).then(res=>{
                    let dataList=res.data.data;
                    this.isFinish=dataList.isFinish;
                    this.score=dataList.score;
                    if(!this.isFinish){
                        this.testData=dataList.testData;
                        this.objectName=dataList.testData.showName;
                        this.testId=dataList.testData.id;
                        this.testTitle=dataList.testData.title;
                    }else{
                        MessageBox.confirm('已经答完题目，分数为'+this.score+'，是否重新答题?', '提示', {
                            confirmButtonText: '是',
                            cancelButtonText: '否',
                            type: 'warning'
                        }).then(()=>{
                            https.fetchPost('/student/experiment3dTest/retest',{id:this.id}).then(res=>{
                                console.log('retest',res.data.data);
                                let dataList=res.data.data;
                                this.testData=dataList.testData;
                                this.objectName=dataList.testData.showName;
                                this.testId=dataList.testData.id;
                                this.testTitle=dataList.testData.title;
                                //this.show3d(this.objectName);
                            }).catch(err=>{
                                console.log(err);
                            })
                        }).catch(() => {
                            this.experimentFlag=false;
                        });

                    }
                });


            },
            back(){
                this.experimentFlag=false;
            },
            start(){
                let _this=this;
                this.human.send("scene.info", function(data) {
                    let moduleObjects = data.objects;
                    //console.log('data',data.objects);
                    for (let objectId in moduleObjects) {
                        let object = moduleObjects[objectId];
                        _this.objects.push(object);
                        /*if(name === object.name){
                            console.log(name);
                            _this.object = moduleObjects[objectId];
                        }*/
                    }
                });
                _this.testContent=true;
                setTimeout(()=>{
                    _this.show3d(this.objectName);
                },1000);
				_this.Interval();
				this.humanReady=true;
            },
            show3d(name){
                for(let i=0;i<this.objects.length;i++){
                    if(name===this.objects[i].name){
                        this.object=this.objects[i]
                    }
                }
                    this.objectId=this.object.objectId;
                    let selectObjects = { replace: true };
                    selectObjects[this.objectId] = true;
                this.human.send("scene.selectObjects", selectObjects);
                this.human.send('camera.set',{objectId:this.objectId,animate:true});
            },
            Interval(){
                this.timer=setInterval(()=>{
                    if(!this.isLast){
                        this.showTime--;
                        if(this.showTime===0){
                            this.commit();
                        }
                    }else{
                        clearInterval(this.timer);
                    }
                },1000);
            },
            initAliplayer(container,videoUrl, coverUrl){
                player = new Aliplayer({
                        "id": container,
                        "source": videoUrl,
                        "cover": coverUrl,
                        "width": "600px",
                        "height": "350px",
                        "autoplay": true,
                        "isLive": false,
                        "rePlay": false,
                        "playsinline": true,
                        "preload": false,
                        "playauth": Math.random(),
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
                                    {
                                        "name": "progress",
                                        "align": "blabs",
                                        "x": 0,
                                        "y": 44
                                    },
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
            },
        },

    }
</script>
<style>
    .Experiment {
        width:100%;
        display: flex;
    }
    .Experiment .show{
        display: block;
    }
	.Experiment .el-radio-group{
		line-height: 30px;
	}
    .Experiment .el-tree{
        width: 240px;
        min-width: 240px;
        height: 100%;
        background:#3e4e69;
        color:#bfcbd9;
    }
    .Experiment .tree{
        min-width: 240px;
        width: 240px;
        height: 100%;
        background:#304156;
        color:#bfcbd9;
		font-size: 14px;
        position: fixed;
        top: 0;
        left: 0;
    }
    .Experiment .tree ul li{
        padding-left: 15px;
        height:56px;
        line-height: 56px;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
		cursor: pointer;
    }
    .Experiment .tree ul li.select{
        /* border-right: 6px solid #409EFF; */
		color: #409eff;
		/* background-color: #409EFF; */
    }
    .Experiment .tree ul li:hover{
        background-color:#263445;
    }
    .Experiment .el-tree-node__content{
        height:56px;
        line-height: 56px;
        transition: background-color 0.2s ease-in-out 0s, color 0.3s ease-in-out 0.1s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
    /*.Experiment .el-tree-node__content:hover{
        background-color: #eee;
    }*/
    .Experiment .el-tree-node__label{
        width:100%;
        height:100%;

    }
    .Experiment .el-radio,.Experiment .el-checkbox{
        width:100%;
    }
    .Experiment .content{
        flex: 1;
        min-height: 500px;
        height:100%;
        margin-top: 60px;
        margin-left: 250px;
        background: #fff;
        width: auto;
    }
	.Experiment .content1{
	    flex: 1;
	    min-height: 480px;
	    height:100%;
	    margin-top: 120px;
	    margin-left: 250px;
	    background: #fff;
	    width: auto;

	}

    .Experiment .xxyq_part{
        padding:10px 0 10px 10px;
        display: flex;
		margin-top: 20px;
    }
    .Experiment .pbl_left{
        margin-right: 20px;
        min-width: 100px;
        font-size:16px;
        line-height: 30px;
        text-indent: 2em;
    }
    .Experiment .gglx_part{
        margin-top: 30px;
    }
    .Experiment .gglx_title_div{
        margin-bottom: 10px;
    }
    .Experiment .pbl_right{
        margin:0 30px;
        /*border:1px solid lavender;*/
        height:667px;
    }
    .Experiment .pbl_outer{
        /*display: none;*/
        position:relative;
        width:667px;
        height:667px;
        overflow: hidden;
    }
    .Experiment .pbl_inner{
        display: flex;
        position:absolute;
        top:0;
        left:0;
    }
    .Experiment .pbl_inner div img{
        display: block;
        width:100%;
    }
    .Experiment .pbl_prev,.pbl_next{
        position:absolute;
        top:50%;
        margin-top:-19px;
        width:26px;
        height:38px;
        background:url("../../assets/images/other/pre.png");
        opacity:0.5;
        filter:alpha(opacity=50);
    }
    .Experiment .pbl_prev:hover,.pbl_next:hover{
        opacity:1;
        filter:alpha(opacity=100);
    }
    .Experiment .pbl_prev{
        left:20px;
    }
    .Experiment .pbl_next{
        right:20px;
        background-position:-26px 0;
    }
    .Experiment .imageBg{
        width:667px;
        height:667px;
        position:relative;
    }
	.Experiment .test_title{
		padding: 10px;
	}
	.Experiment .el-checkbox__input {
		padding: 10px;
	}
	.Experiment .pre_next_Btn{
		margin: 10px 0;
	}
	/* ali video */
	.Experiment .course_bb_cont{
		margin-bottom: 40px;
	}
	.Experiment .zw_cont {
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
	.Experiment .course_ul{
	    display: flex;
	}
	.Experiment .course_ul li{
	    width: 208px;
	    height:218px;
	    padding:10px;
	    border: 1px solid #e5e5e5;
	    border-radius: 10px;
	    background: #fafafa;
	    margin: 30px 30px 0 0;
	    cursor: pointer;
	}

	.Experiment .course_ul li:hover {
	    border: 1px solid #409EFF;
	}

	.Experiment .course_ul li:hover .course_name {
	    color: #409EFF;
	}

	.Experiment .course_img_div {
	    background: #e9e9e9;
	    border-radius: 8px;
	    text-align: center;
	    height: 150px;
	    line-height: 150px;
	    position: relative;
	    overflow: hidden;
	}

	.Experiment .course_img_div img {
	    vertical-align: middle;
	    max-height: 150px;
	    margin-left: -30px;
	}

	.Experiment .course_name {
	    color: #212121;
	    font-size: 16px;
	    height: 40px;
	    line-height: 20px;
	    padding: 7px 0;
	}

	.Experiment .videoClass {
	    width: 100%;
	    height: 440px;
	}

	.Experiment .fade, .Experiment .picfade {
        width: 600px;
		padding-right: 30px;

        /* height: 390px; */
	}

	.Experiment .succ-pop {
	    width: 600px;
	    /* height: 390px; */
	    background: #fff;
	    border-radius: 2px;
	}
    .Experiment .experimentVideo{
        width:600px;
        /* height:390px; */
	}
	.Experiment .succ-pop .close {
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

	.Experiment .succ-pop .close:hover {
	    background: #0F9ECA;
	    color: #fff;
	    border-radius: 2px;
	}

	.Experiment .alertbox_title {
	    height:40px;
	    padding: 0 0 0 10px;
	    font-size: 18px;
		background-color: #409EFF;
		color: #fff;
		border-top-left-radius:8px;
		border-top-right-radius:8px;
	}

	.Experiment .alertbox_title .alert_title {
	    float: left;
        height:39px;
	    line-height: 40px;
	}

	.Experiment #div_video{
	    user-select: none;
	}
	/*#div_video,#div_video video,#div_video embed{width: 100%;height: 440px;}*/
	.Experiment .Video .videoButton{
	    position: relative;
	    display: flex;
	    background:lightpink;
	    width:100%;
	    height:75px;
	    /*position:absolute;*/
	    bottom:75px;
	    font-size: 40px;
	}
	.Experiment .Video .videoIcon{
	    margin-left: 40px;
	}

	.Experiment .Video .progress{
	    margin:12px 0 0 20px;
	    font-size: 16px;
	    color:#fff;
	}
	.Experiment .Video .progress .first{
	    text-align: right;
	}
	.Experiment .Video .progress .second{
	    text-align: left;
	}
	.Experiment .Video .volume,.Video .fullscreen{
	    font-size: 34px;
	    position: absolute;
	    right:40px;
	}
	.Experiment .Video .volume{
	    right:90px;
	}
	.Experiment .Video .proBack{
	    position: absolute;
	    bottom:20px;
	    left:5%;
	    width:90%;
	    height:5px;
	    border-radius: 4px;
	    background:lime;
	}
	.Experiment .Video .proFore{
	    display: block;
	    width:10%;
	    height:5px;
	    border-radius: 4px;
	    background:lightseagreen;
	}


    .Experiment iframe {
        border: none;
        height: 99%;
    }

    .Experiment .panel {
        width: 325px;
        position:absolute;
        top:80px;
        right:10px;
        background-color:white;
        padding:10px 15px;
        border-radius: 4px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.15);
    }
    .Experiment audio{

    }

</style>
