<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import store from "./store/store";
    export default{
      created () {
        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        }

        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
        })
      },
      mounted() {
        let that = this;
        //设置超时退出
        let lastTime = new Date().getTime();
        let currentTime = new Date().getTime();
        let timeOut = 30* 60 * 1000; //设置超时时间： 10分

        /*$(function(){
          /!* 鼠标移动事件 *!/
          $(document).mouseover(function(){
            lastTime = new Date().getTime(); //更新操作时间

          });
        });*/
        document.getElementById('app').onmouseover=function(){
          lastTime=new Date().getTime();
        };

        function testTime(){
          currentTime = new Date().getTime(); //更新当前时间
          if(currentTime - lastTime > timeOut){ //判断是否超时
            //console.log("超时");
            localStorage.setItem('token', JSON.stringify(''));
            //this.$store.commit('updateStorage',JSON.stringify(''));
            that.$router.push({
              path:"/"
            })
          }
        }

        /* 定时器  间隔1秒检测是否长时间未操作页面  */
        window.setInterval(testTime, 1000);
      },
      destroyed: function() {

        console.log("已销毁");

      }
    }
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #FFF;*/
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
