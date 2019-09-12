<template>
    <div class="Leftnav">
        <div class="side-bar">
			<!-- <li style="position: fixed;padding-left: 15px;background-color: #5C7799; line-height: 56px; color: #fff; font-size: 18px; font-weight: bold;">昆明医科大学海源学院</li> -->
            <TreeViewItem :menus="menus"></TreeViewItem>
        </div>
        <div class="continer">
            <router-view></router-view>
            <!--<Tree-view-detail></Tree-view-detail>-->
        </div>
    </div>
</template>
<script>
    /*import TreeView from "./TreeView";*/
    import TreeViewItem from "./TreeViewItem"
    export default {
        name:"Leftnav",
        components: {
            /*TreeView,*/
            TreeViewItem
        },
        data(){
            return {
                menus:this.$store.state.menusModule.menus
            }
        },
        create(){
        }
    };
</script>
<style scoped>
    .Leftnav{
        width:100%;
        display: flex;
    }
    .side-bar {
        min-width: 240px;
        width: 240px;
        height: 100%;
        background:#304156;
        color:#bfcbd9;
        font-size: 14px;
        position: fixed;
        top: 0;
        left: 0;
		overflow: scroll;

    }
    .continer {
        flex: 1;
        min-height: 200px;
        height:100%;
        margin-top: 60px;
        margin-left: 250px;
        background: #fff;
        width: auto;

    }
</style>
