<!--章节简介-->
<template>
    <div class="Chapter">
        <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{name}}</span></h2>
        <div class="xxyq_part">
            <div class="xxyq_title_div">
                <h2>章节简介</h2>
                <div v-html="data"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    export default {
        name:'Chapter',
        props:['id','name'],
        data(){
            return {
                data:''
            }
        },
        created() {
            this.$store.commit('updateChapterId',this.id);
            https.fetchPost('/student/chapter/description',{'id':this.id}).then(res=>{
                this.data=res.data.data;
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>
    .Chapter h2{
        font-weight:bold;
    }
    .xxyq_part p{font-size: 18px;color: #5A5A5A;line-height: 1.5em;padding: 4px 0 4px 2em;}
    .xxyq_part p.xiao_title{padding: 13px 0 13px 0;font-size: 20px;}
    .xxyq_title_div h2{font-size: 26px;text-align: center;color: #3e4e69;}
    .xxyq_part{margin: 15px auto;}
</style>
