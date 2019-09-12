<!--巩固练习-->
<template>
    <div class="Exercise">
        <div class="main_cont">
            <h2 class="jp_title clearfix">
                <span class="borderspan"></span><span class="title_span">{{name}}</span>
            </h2>
            <div class="gglx_part">
                <!-- <div class="gglx_title_div">
                    <h2>巩固习题</h2>
                </div> -->
                <div class="gglx_cont">
                    <div class="gglx_div">
                        <div v-for="(item,index) in data" v-show="index===testId" :key="index">
                            <div class="test_title">{{index+1}}、{{item.title}}</div>
                            <template v-if="radioBox">
                                <el-radio-group v-model="radio">
                                    <el-radio v-for="(option,uid) in item.options" :key="uid" :label="option"
                                              @change="radioChecked(index,option,uid)">{{option}}</el-radio>
                                </el-radio-group>

                            </template>
                            <template v-else>
                                <el-checkbox-group v-model="checked">
                                    <el-checkbox  v-for="(option,uid) in item.options" :key="uid" :label="option"
                                                  @change="checkChecked(index,option,uid)">{{option}}</el-checkbox>
                                </el-checkbox-group>
                            </template>
                            <div class="pre_next_Btn clearfix">
                                <!--提交按钮状态-->
                                <el-button @click="commit(index)">提交</el-button>
                                <el-button :disabled="testId===0" @click="last(index)">上一题</el-button>
                                <el-button :disabled="testId===testTotal" @click="next(index)">下一题</el-button>
                            </div>
                            <div class="my">
                                我的答案：{{curSelected[index]}}
                            </div>
                            <div class="correct" v-if="showAnswer[index]">
                                正确答案：{{data[index].answers}}
                            </div>
                        </div>
                    </div>

                </div>
                <!--<div class="datika_part">
                    <h3>答题卡</h3>
                    <div class="dadika_div">
                        <ul class="clearfix"></ul>
                        <div class="cad-color clearfix">
                            <div class="panel-order-notice">
                                <em>未做</em><i class="a normal"></i>
                                <em>做完</em><i class="a right"></i>
                                <em>选中</em><i class="a click"></i>
                                &lt;!&ndash; <em>错误</em><i class="a error"></i> &ndash;&gt;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit_part clearfix">
                    <a class="btn-again"><span>再考一次</span></a>
                    <a class="btn-submit"><span>保存练习</span></a>
                </div>-->
            </div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    import {Message} from 'element-ui'
    export default {
        name:'Exercise',
        props:['id','name'],
        data(){
            return {
                data:'',
                radio:0,
                checked: [],
                testId:0,
                disabled:false,
                testTotal:0,
                radioBox:true,
                showAnswer:[],
                curSelected:[]
            }

        },
        created(){
            this.$store.commit('updateChapterId',this.id);
            https.fetchPost('/student/chapter/test',{'id':this.id,'number':10}).then(res=>{
                this.data=res.data.data;
                this.testTotal=this.data.length-1;
                this.data[0].answers.length===1?this.radioBox=true:this.radioBox=false;
            }).catch(err=>{
                console.log(err);
            });
        },
        methods:{
            last(index){
                this.testId--;
                //console.log('last answer',this.data[this.testId].answer);
                /*if(!this.data[this.testId].answer){
                    this.showAnswer=false;
                }else{
                    this.showAnswer=true;
                }*/
                //this.showAnswer[this.testId] = this.data[this.testId].answer;
                this.data[this.testId].answers.length===1?this.radioBox=true:this.radioBox=false;
            },
            next(index){
                this.testId++;
                //console.log('next answer',!this.data[this.testId].answer);
                //this.showAnswer[this.testId] = this.data[this.testId].answer;
                this.data[this.testId].answers.length===1?this.radioBox=true:this.radioBox=false;
            },
            checkChecked(index,val,id){
                //console.log('checkChecked',index,val,id);
                this.data[index].answer = this.data[index].answer?this.data[index].answer:[];
                let cur=val.substr(0,1);
                if(this.data[index].answer.indexOf(cur) < 0){
                    this.data[index].answer.push(cur)
                }else{
                    this.data[index].answer.splice(this.data[index].answer.indexOf(cur),1)
                }
                this.data[index].answer.sort();
                this.curSelected[index]=this.data[index].answer.toString();
            },
            radioChecked(index,val,id){
                this.$forceUpdate();
                let cur=val.substr(0,1);
                this.data[index].answer = this.data[index].answer?this.data[index].answer:[];
                this.data[index].answer=cur;
                this.curSelected[index]=this.data[index].answer;
            },
            commit(index){
                if(!this.curSelected[index]){
                    Message({
                        message:'请先做题'
                    });
                    return false;
                }
                this.showAnswer[index]=true;
                this.$forceUpdate();
            }
        }
    }
</script>
<style scoped>
    .Exercise .el-radio,.Exercise .el-checkbox{
        width:100%;
		line-height: 24px;
    }
	.test_title{
		margin-bottom: 10px;
	}
    .gglx_part{
        margin-top: 20px;
    }
    .gglx_cont{
        margin-top: 15px;
    }
    .el-radio,.el-checkbox{
        padding: 10px;
    }
    .pre_next_Btn{
        margin: 10px 0;
    }
    .correct,.my{
        padding-top: 10px;
    }
</style>
