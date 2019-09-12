//登录页科目
let subjects=[];


//左侧导航数据
let menus = [];
let levelNum = 1;
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, id) {
    let sourceItem = '';
    for (let i = 0; i < source.length; i++) {
        sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
        if (sourceItem.indexOf(id) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
            //console.log('source[i].type',source[i].type);
            if (source[i].type === 'button') { // 导航菜单为按钮
                //console.log(sourceItem.indexOf((url)));
                source[i].isSelected = true; // 设置选中高亮
                source[i].isExpanded = true; // 设置为展开
                startExpand.push(source[i]);
// 递归下一级菜单，以此类推
                setExpand(source[i].subMenu, id);
            }
            if(source[i].type==='link'){
                //console.log('linkId',id);
                source[i].isSelected=true;
                startExpand.push(source[i]);
            }
            break;
        }
    }
}
const state = {
    subjects,
    menus,
    levelNum
};
const mutations = {
    findParents(state, payload) {
        if(payload.menu.type==='link'){
        }
        //console.log('payload.menu.type',payload.menu.type);
        if (payload.menu.type === "button") {
            //console.log('playload',payload);
            payload.menu.isExpanded = !payload.menu.isExpanded;
        } else if (payload.menu.type === "link") {
            //console.log('startExpand',startExpand);
            if (startExpand.length > 0) {
                //console.log('startExpand.length',startExpand.length);
                for (let i = 0; i < startExpand.length; i++) {
                    startExpand[i].isSelected = false;
                }
            }
            startExpand = []; // 清空展开菜单记录项
            setExpand(state.menus, payload.menu.id);
        };
    },
    firstInit(state, payload) {
        setExpand(state.menus, payload.id);
    },


};
export default {
    state,
    mutations
};
