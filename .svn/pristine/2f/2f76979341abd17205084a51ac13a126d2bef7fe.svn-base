<template>
    <div>
        <Chapter v-if="title==='chapter'" :id="id" :name="name"></Chapter>
        <Courseware v-else-if="title==='courseware'" :id="id" :name="name"></Courseware>
        <Exercise v-else-if="title==='exercise'" :id="id" :name="name"></Exercise>
        <MindMap v-else-if="title==='mindMap'" :id="id" :name="name"></MindMap>
        <PBLTeaching v-else-if="title==='PBLTeaching'" :id="id" :name="name"></PBLTeaching>
        <Video v-else-if="title==='video'" :id="id" :name="name"></Video>
        <Overview v-else :id="id"></Overview>
        <!--<Cervical v-if="title==='cervical'" :id="id"></Cervical>
        <HeadMuscle v-if="title==='headmuscle'" :id="id"></HeadMuscle>
        <LowerLimb v-if="title==='lowerlimb'" :id="id"></LowerLimb>
        <Trunk v-if="title==='trunk'" :id="id"></Trunk>
        <UpperLimb v-if="title==='upperlimb'" :id="id"></UpperLimb>-->
        <!--<Personal v-if="title==='personal'" :content="content"></Personal>
        <Reserve v-if="title==='reserve'" :content="content"></Reserve>-->
    </div>
</template>
<script>
    import Chapter from '../LeadPrinciples/Chapter';
    import Courseware from '../LeadPrinciples/Courseware';
    import Exercise from '../LeadPrinciples/Exercise';
    import MindMap from '../LeadPrinciples/MindMap';
    import PBLTeaching from '../LeadPrinciples/PBLTeaching';
    import Video from '../LeadPrinciples/Video';
    import Overview from '../Courses/Overview';
    /*import Cervical from '../Courses/Cervical';
    import HeadMuscle from '../Courses/HeadMuscle';
    import LowerLimb from '../Courses/LowerLimb';
    import Trunk from '../Courses/Trunk';
    import UpperLimb from '../Courses/UpperLimb';*/
    export default {
        name: "TreeViewDetail",
        components: {
            Chapter,
            Courseware,
            Exercise,
            MindMap,
            PBLTeaching,
            Video,
            Overview,
            /*Cervical,
            HeadMuscle,
            LowerLimb,
            Trunk,
            UpperLimb*/
        },
        data() {
            return {
                menu:''
            };
        },
        computed:{
            title(){
                return this.$route.query.title
            },
            id(){
                return this.$route.query.menuId
            },
            name(){
                return this.$route.query.name
            }
        },
        watch: {
        //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
            $route: {
                handler: function(val, oldVal) {
                    this.currentRoute = val.name;
                },
                deep: true
            }
        }
    };
</script>
<style scoped>
</style>
