<template>
  <div class="Index">
    <div class="Header">
        <Header></Header>
    </div>
    <div class="MainContent">
        <PerInfo v-if="title==='PerInfo'"></PerInfo>
        <Experiment v-else-if="title==='3d'"></Experiment>
        <Leftnav v-else></Leftnav>
    </div>
  </div>
</template>
<script>
    import Header from '@/components/Header/Header'
    import Leftnav from '@/components/Sidebar/Leftnav'
    import PerInfo from '@/components/Sidebar/PerInfo'
    import Experiment from '@/components/Experiment3d/Experiment'
    import https from '../https.js'
    export default {
        name:'Index',
        components:{
            Header,
            Leftnav,
            PerInfo,
            Experiment
        },
        data(){
            return {
                secondTitlesZh:['章节简介','课程学习','教学课件','微课视频','思维导图','PBL教学','巩固练习'],
                secondTitlesEn:['chapter','','courseware','video','mindMap','PBLTeaching','exercise'],
                thirdTitleEn:['overview','trunk','cervical','headMuscle','lowerLimb','upperLimb','upperLimb','upperLimb','upperLimb','upperLimb']
            }
        },
        created() {
            let menus=[];
            this.subjectId=this.$route.query.id;
            if(this.subjectId){
                menus = this.$store.state.menusModule.menus;
                if(menus.length===0){
                    https.fetchPost('/student/menu', {'id': this.subjectId}).then(res => {
                        //console.log(res.data.data);
                        let chapter = res.data.data;
                        for (let i = 0; i < chapter.length; i++) {
                            let noteData = chapter[i].noteData;
                            let firstTitle = {};
                            firstTitle.sid=chapter[i].id;
                            firstTitle.id = chapter[i].id;
                            firstTitle.name = chapter[i].name;
                            firstTitle.level = '1';
                            firstTitle.type = 'button';
                            firstTitle.isExpanded = false;
                            firstTitle.isSelected = false;
                            firstTitle.subMenu = [];
                            for (let j = 0; j < this.secondTitlesZh.length; j++) {
                                let secondTitle = {};
                                secondTitle.sid=chapter[i].id;
                                secondTitle.id = chapter[i].id+j;
                                secondTitle.name = this.secondTitlesZh[j];
                                secondTitle.title = this.secondTitlesEn[j];
                                secondTitle.level = '2';
                                secondTitle.type = 'link';
                                secondTitle.url = '/' + this.secondTitlesEn[j];
                                secondTitle.content = 'zhangjie';
                                secondTitle.subMenu = [];
                                if (j === 1) {
                                    secondTitle.name ='&nbsp;&nbsp;&nbsp;&nbsp;'+ this.secondTitlesZh[j];
                                    secondTitle.isExpanded = false;
                                    secondTitle.isSelected = false;
                                    secondTitle.type = 'button';
                                    delete secondTitle.url;
                                    for (let k = 0; k < noteData.length; k++) {
                                        let thirdTitle = {};
                                        thirdTitle.sid=noteData[k].id;
                                        thirdTitle.id = noteData[k].id;
                                        thirdTitle.level = '3';
                                        thirdTitle.title = this.thirdTitleEn[k];
                                        thirdTitle.type = 'link';
                                        thirdTitle.url = '/' + this.thirdTitleEn[k];
                                        thirdTitle.name ='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ noteData[k].name;
                                        secondTitle.subMenu.push(thirdTitle);
                                    }
                                }
                                firstTitle.subMenu.push(secondTitle);
                            }
                            menus.push(firstTitle);
                        }
                        //console.log('roueueue',this.secondTitlesEn[0],this.secondTitlesZh[0],chapter[0].id);
                        this.$router.push({
                            path:'/index/'+this.secondTitlesEn[0],
                                query:{
                                title:this.secondTitlesEn[0],
                                    name:this.secondTitlesZh[0],
                                    menuId:chapter[0].id
                            }
                        })
                        //console.log(menus);
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }


            //}
            /*https.fetchPost('/student/chapter/description',{'id':this.subjectId}).then(res=>{
                console.log(res);
            })*/
        },
        computed:{
            title(){
                return this.$route.query.title;
            },
            /*subjectName(){
                return this.$route.query.subjectName;
            },*/
            /*subjectId(){
                return this.$route.query.id;
            }*/
        },
        methods:{

        }

    }
</script>
<style>
    .Index{
        display:flex;
        flex-direction:column;

        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        text-align: left;
    }
    .MainContent{
        /* margin-top: -14px; */
        display:flex;
    }
</style>
