import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import TreeViewDetail from '@/components/Sidebar/TreeViewDetail';
import Login from "../views/Login.vue";
import store from "../store/store";


Vue.use(Router);
const router= new Router({
    //mode: 'history',
    linkActiveClass: 'selected',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index,
        children:[
            {
                path: 'chapter',
                name: 'chapter',
                component: TreeViewDetail
            },
            {
                path: 'courseware',
                name: 'courseware',
                component: TreeViewDetail
            },
            {
                path: 'video',
                name: 'video',
                component: TreeViewDetail
            },
            {
                path: 'mindMap',
                name: 'mindMap',
                component: TreeViewDetail
            },
            {
                path: 'PBLTeaching',
                name: 'PBLTeaching',
                component: TreeViewDetail
            },
            {
                path: 'exercise',
                name: 'exercise',
                component: TreeViewDetail
            },
            {
                path: 'overview',
                name: 'overview',
                component: TreeViewDetail
            },
            {
                path: 'trunk',
                name: 'trunk',
                component: TreeViewDetail
            },
            {
                path: 'cervical',
                name: 'cervical',
                component: TreeViewDetail
            },
            {
                path: 'headMuscle',
                name: 'headMuscle',
                component: TreeViewDetail
            },
            {
                path: 'lowerLimb',
                name: 'lowerLimb',
                component: TreeViewDetail
            },
            {
                path: 'upperLimb',
                name: 'upperLimb',
                component: TreeViewDetail
            }

            ]
        },
        {
            path:"/",
            name:'Login',
            component:Login,
        },
        {
            path:'/index',
            name:'Index',
            /*meta:{auth:true},*/
            component:Index
        },


    ]
});
/*router.beforeEach((to,from,next) => {
    let token=localStorage.getItem('token');
    if(to.path==='/login'){
        next();
    }else{
        if(token==='' || token===null){
            next('/login');
        }else{
            next();
        }
    }
    /!*if(to.matched.some( m => m.meta.auth)){

// 对路由进行验证
        if(store.state.isLogin==='100') { // 已经登陆
            next()   // 正常跳转到你设置好的页面
        }
        else{

// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；

            next({path:'/login',query:{ Rurl: to.fullPath} })
        }
    }else{
        next()
    }*!/
});*/
export default router;
