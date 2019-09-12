<!--思维导图-->
<template>
    <div class="MindMap">
        <div class="main_cont">
            <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{name}}</span></h2>
            <div class="xxyq_part">
                <!--<div class="xxyq_title_div">

                </div>-->
                <div id="app">
                    <main>
                        <!-- 左侧导航 -->
                        <div class="main-left">
                            <el-button style="margin: 10px 0; display: block;"  @click="addNode()">增加一个节点</el-button>
                            <el-button style="margin: 10px 0; display: block;"  @click="delNode()">删除一个节点</el-button>
                            <el-button style="margin: 10px 0; display: block;"  @click="saveNode()">保存</el-button>
                        </div>

                        <!-- 右侧主内容区 -->
                        <div  class="main-right" >
                            <div id="jsmind_container"></div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import jsMind from 'jsmind'
    import https from '../../https'
    export default {
        name:'MindMap',
        props:['id','name'],
        data: function () {
            return {
                active: true,
                mindData:'',
                format:'',
                meta:''
            }
        },
        mounted: function () {
            this.load_jsmind()
        },
        methods: {
            load_jsmind:function(){
                https.fetchPost('/student/chapter/mind/find',{'id':this.id}).then(res=>{
                    //console.log('mind',res.data.data);
                    this.mindData=res.data.data;
                    let arr = Object.keys(this.mindData);
                    let options = {
                        container: 'jsmind_container',
                        editable: true,
                        theme: 'primary'
                    };
                    if(arr.length!==0){
                        let jm = jsMind.show(options,this.mindData);
                    }else{
                        let jm = jsMind.show(options,);
                    }
                }).catch(err=>{
                    console.log(err);
                })

            },
            addNode () {
                let jm = jsMind.current;
                console.log('jjjjj',jsMind.current);
                let selectNode = jm.get_selected_node();
                if (!selectNode) {
                    alert('请选择一个节点')
                } else {
                    let subNodeId;
                    for (;;) {
                        subNodeId = Math.round(Math.random() * 1000);
                        var checkNode = jm.get_node(subNodeId);
                        if (!checkNode) {
                            break
                        }
                    }
                    jm.add_node(selectNode, subNodeId, '分支主题', { 'background-color': '#A3B6CC' })
                }
            },
            delNode () {
                let jm = jsMind.current;
                let selectNode = jm.get_selected_node();
                if (!selectNode) {
                    alert('请选择一个节点')
                } else {
                    jm.remove_node(selectNode)
                }
            },
            saveNode(){
                let jm = jsMind.current;
                let data=jm.get_data();
                console.log('jm',data);
                https.fetchPost('/student/chapter/mind/save',
                    {
                        'mindData':data,
                        'chapterId':this.id
                    }).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style>
    @import '../../../public/jsmind/style/jsmind.css';
    body{margin: 0;}
    #app {
        /* min-width: 1200px;
        margin: 0 auto; */
        font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
    }
    #jsmind_container{
		width: auto;
		/* height: 100%; */
       /*  width:800px;
        height:500px;
       border:solid 1px #ccc;
        background:#f4f4f4; */
    }
    /* 头部导航 */
   /* header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
    header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
    header .el-menu-demo{padding-left: 300px!important;} */

    /* 主内容区 */
    main{    display: -webkit-box;  display: -ms-flexbox;  display: flex; /* min-height: 800px; */    background-color: #FCFCFC;  }
    main .main-left{text-align: center;width: 200px;float: left;}
    main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; }
    main .el-menu{background-color: transparent!important;}
</style>
