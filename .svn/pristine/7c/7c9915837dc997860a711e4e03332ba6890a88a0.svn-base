<!--个人信息-->
<template>
    <div class="Personal">
        <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">个人信息</span></h2>
        <div class="scorepart">
            <div class="score">
                <h4 class="clearfix"><!-- <img src="../../assets/images/other/record-icon.png"/>本周记录 -->
                    <div class="jifen_div fright"><span>本周累计积分：<span id="lab_ZSum">{{weekTime}}</span>分 </span>
                        <span>总累计积分：<span id="lab_Sum">{{totalTime}}</span>分</span>
                    </div>
                </h4>
                <div class="chart_div">
                    <div class="chart_div">
                        <div ref="container" style="min-width:240px;height:300px" data-highcharts-chart="1">
                        </div>
                    </div>
                </div>
            </div>
           <!-- <div class="kh_pj">
                <div class="kh_title">
                    <h4 class="clearfix"><img src="../../assets/images/other/wenjian-icon.png"/>考核评价</h4>
                    <div class="selectSub">
                        <span>选择学科：</span>
                        &lt;!&ndash;<select id="selectAll">
                            <option id="subName">系统解剖学</option>
                            <option>护理学</option>
                            <option>组织胚胎学</option>
                            <option>医学生理学</option>
                        </select>&ndash;&gt;
                        &lt;!&ndash;<el-select v-model="subjectId" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.collegeId"
                                    :label="item.name"
                                    :value="item.collegeId">
                            </el-option>
                        </el-select>&ndash;&gt;
                    </div>
                </div>
                <div id="contDiv" class="chart_div chart2">
                    <div :id="id" style="min-width:240px;height:360px;"></div>
                    &lt;!&ndash;<div :id2="id2" style="min-width:240px;height:360px;"></div>
                    <div :id3="id3" style="min-width:240px;height:360px;"></div>
                    <div :id4="id4" style="min-width:240px;height:360px;"></div>&ndash;&gt;
                </div>
            </div>-->
        </div>
        <!--<div class="collection">
            <h4><img src="../../assets/images/other/star-icon.png"/>我的收藏</h4>
            <div id="div_bb_shoucang" class="collection_div">
                <div class="zw_cont">暂无内容</div>
            </div>
        </div>-->
    </div>
</template>
<script>
    import https from '../../https';
    import echarts from 'echarts'

    export default {
        name: "Personal",
        data() {
            return {
                id: 'container1',
                /*id2:'container2',
                id3:'container3',
                id4:'container4'*/
                options: [],
                online:'',
                xData:[],
                yData:[],
                weekTime:'',
                totalTime:''
            }
        },
        created() {

        },
        mounted() {
            /*if(!localStorage.getItem('token')){
                this.$router.push('/');
            }*/
            https.fetchPost('/student/info/personal').then(res => {
                //console.log('2222rrrrrr', res);
                this.weekTime=res.data.data.weekTime;
                this.totalTime=res.data.data.totalTime;
                this.online=res.data.data.online;
                this.xData=this.online.onlineLabel;
                this.yData=this.online.onlineData;
                this.draw();
            }).catch(err => {
                console.log(err);
            });
        },
        methods:{
            draw(){
                /*this.xData=['周一', '周二', '周三', '周四', '周五', '周六', '周日']//this.online.onlineData;
                this.yData=[10, 23, 65, 36, 85, 43, 60]//this.online.onlineLabel;*/
                let echart=echarts.init(this.$refs.container);
                console.log('dkdkdkdk',this.xData,this.yData);
                let option = {
                    /* 线条颜色，可设置多个颜色 */
                    color: ['#409eff'],
                    /* 图像四周边距设置 */
                    grid:{
                        left:30,
                        top:30,
                        right:20,
                        bottom:30
                    },
                    /* 图例说明 */
                    legend: {
                        // 图例排项 vertical-"竖向"; horizontal-"横向"
                        orient: 'horizontal',
                        // 图例组件离容器左侧的距离
                        right : 60,
                        top: 0,
                        //图例文字的样式
                        textStyle:{
                            color:'#333',
                        },
                        // 与series中每个name一一对应
                        data:['分钟']
                    },
                    /* 鼠标悬浮时显示数据 */
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: this.xData,
                        //设置轴线的属性
                        axisLine:{
                            lineStyle:{
                                color:'#333',
                            }
                        },
                        //调整x轴的lable
                        axisLabel:{
                            textStyle:{
                                fontSize:10 // 让字体变小
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        // 控制网格线是否显示
                        splitLine: {
                            show: true,
                            //  改变轴线颜色
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#eee']
                            }
                        },
                        //设置轴线的属性
                        axisLine:{
                            lineStyle:{
                                color:'#333',
                            }
                        }
                    },
                    /* 数据配置，若有多条折线则在数组中追加{name: , data: } */
                    series: [{
                        name:'分钟',
                        data: this.yData,
                        type: 'line',
                        symbol: 'circle',
                        // 设置折点大小
                        symbolSize: 10,
                        // 设置为光滑曲线
                        smooth: true
                    },]
                };
                echart.setOption(option);
                /*window.addEventListener('resize',function(){
                    this.draw().resize();
                })*/
            }
        }
        /*mounted() {
            let _this = this;
            var data1 = [
                {name: '微课视频', y: 5, x: 80, color: '#89dcd1'},
                {name: '课程学习', y: 8, x: 100, color: '#89b8dc'},
                {name: '解剖操作指导', y: 5, x: 100, color: '#8d89dc'},
                {name: '思维导图', y: 4, x: 100, color: '#dc89b8'},
                {name: '实验报告', y: 4, x: 100, color: '#dc9789'},
                {name: '巩固练习', y: 4, x: 100, color: '#dcbe89'},
                {name: '实验考试', y: 20, x: 100, color: '#dcd589'},
                {name: '理论考试', y: 50, x: 90, color: '#bcdc89'}
            ];
            givedata(data1);

            // Make colors
            function givedata(_fenshu) {
                var pieColors = (function () {
                    var colors = [];
                    for (var i = 0; i < _fenshu.length; i++) {
                        colors.push(_fenshu[i].color);
                    }
                    return colors;
                }());
                //得分
                var defen = 0;
                for (var i = 0; i < _fenshu.length; i++) {
                    defen += ((_fenshu[i].y) / 100 * (_fenshu[i].x));
                }
                //console.log('_this.id' + _this.id, this.id);
                let a=_this.id;
                Highcharts.chart(_this.id, {
                    chart: {
                        spacing: [40, 10, 40, 10],
                    },
                    legend: {
                        itemMarginTop: 2,
                        x: 0,
                        y: 30,
                        itemStyle: {
                            fontSize: '14px',
                            lineHeight: '14px',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        floating: true,
                        align: 'center',
                        //x:-svgW,
                        text: defen + "分",
                        style: {
                            color: '#3e4e69',
                            fontSize: '36px'
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<small>{point.key}</small><br/>',
                        pointFormatter: function (e) {
                            return '<span>得分：' + ((this.y) / 100 * (this.x)) + '分</span>';
                        }, style: {
                            fontSize: '14px'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            colors: pieColors,
                            borderWidth: 0,
                            dataLabels: {
                                enabled: false,
                                connectorWidth: 0,
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            },
                            showInLegend: true,
                            point: {
                                events: {}
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        size: '120%',
                        innerSize: '50%',
                        name: '分数',
                        data: _fenshu
                    }]
                }, function (c) { // 图表初始化完毕后的会掉函数
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y: centerY + titleHeight / 2
                    });
                });
            }

            /!*function da2(){
                var data2=[
                    {name:'微课视频',y: 5,x:80,color:'#89dcd1'},
                    {name:'课程学习',y: 8,x:100,color:'#89b8dc'},
                    {name:'解剖操作指导',y: 5,x:100,color:'#8d89dc'},
                    {name:'思维导图',y: 4,x:100,color:'#dc89b8'},
                    {name:'实验报告',y:6,x:100,color:'#dc9789'},
                    {name:'巩固练习',y:4,x:100,color:'#dcbe89'},
                    {name:'实验考试',y:30,x:100,color:'#dcd589'},
                    {name:'理论考试',y:10,x:90,color:'#bcdc89'}
                ];
                givedata(data2);
                // Make colors
                function givedata(_fenshu){
                    var pieColors = (function () {
                        var colors =[];
                        for(var i=0;i<_fenshu.length;i++){
                            colors.push(_fenshu[i].color);
                        }
                        return colors;
                    }());
                    //得分
                    var defen=0;
                    for(var i=0;i<_fenshu.length;i++){
                        defen+=((_fenshu[i].y)/100*(_fenshu[i].x));
                    }
                    var chart = Highcharts.chart(this.id2, {
                        chart: {
                            spacing : [40, 10 , 40, 10],
                        },
                        legend: {
                            itemMarginTop: 2,
                            x: 0,
                            y: 30,
                            itemStyle: {
                                fontSize: '14px',
                                lineHeight:'14px',
                                fontWeight: 'normal'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            floating:true,
                            align: 'center',
                            //x:-svgW,
                            text: defen+"分",
                            style: {
                                color: '#3e4e69',
                                fontSize:'36px'
                            }
                        },
                        tooltip: {
                            useHTML: true,
                            headerFormat: '<small>{point.key}</small><br/>',
                            pointFormatter: function(e){
                                return '<span>得分：' +((this.y)/100*(this.x))+ '分</span>';
                            },style: {
                                fontSize:'14px'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                colors: pieColors,
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: false,
                                    connectorWidth: 0,
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                },
                                showInLegend: true,
                                point: {
                                    events: {
                                    }
                                },
                            }
                        },
                        series: [{
                            type: 'pie',
                            size: '120%',
                            innerSize: '50%',
                            name: '分数',
                            data: _fenshu
                        }]
                    }, function(c) { // 图表初始化完毕后的会掉函数
                        // 环形图圆心
                        var centerY = c.series[0].center[1],
                            titleHeight = parseInt(c.title.styles.fontSize);
                        // 动态设置标题位置
                        c.setTitle({
                            y:centerY + titleHeight/2
                        });
                    });
                }
            }
            function da3(){
                var data3=[
                    {name:'微课视频',y: 5,x:80,color:'#89dcd1'},
                    {name:'课程学习',y: 8,x:100,color:'#89b8dc'},
                    {name:'解剖操作指导',y: 5,x:100,color:'#8d89dc'},
                    {name:'思维导图',y: 4,x:100,color:'#dc89b8'},
                    {name:'实验报告',y: 4,x:100,color:'#dc9789'},
                    {name:'巩固练习',y:4,x:100,color:'#dcbe89'},
                    {name:'实验考试',y:20,x:100,color:'#dcd589'},
                    {name:'理论考试',y:40,x:90,color:'#bcdc89'}
                ];
                givedata(data3);
                // Make colors
                function givedata(_fenshu){
                    var pieColors = (function () {
                        var colors =[];
                        for(var i=0;i<_fenshu.length;i++){
                            colors.push(_fenshu[i].color);
                        }
                        return colors;
                    }());
                    //得分
                    var defen=0;
                    for(var i=0;i<_fenshu.length;i++){
                        defen+=((_fenshu[i].y)/100*(_fenshu[i].x));
                    }
                    var chart = Highcharts.chart(this.id3, {
                        chart: {
                            spacing : [40, 10 , 40, 10],
                        },
                        legend: {
                            itemMarginTop: 2,
                            x: 0,
                            y: 30,
                            itemStyle: {
                                fontSize: '14px',
                                lineHeight:'14px',
                                fontWeight: 'normal'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            floating:true,
                            align: 'center',
                            //x:-svgW,
                            text: defen+"分",
                            style: {
                                color: '#3e4e69',
                                fontSize:'36px'
                            }
                        },
                        tooltip: {
                            useHTML: true,
                            headerFormat: '<small>{point.key}</small><br/>',
                            pointFormatter: function(e){
                                return '<span>得分：' +((this.y)/100*(this.x))+ '分</span>';
                            },style: {
                                fontSize:'14px'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                colors: pieColors,
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: false,
                                    connectorWidth: 0,
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                },
                                showInLegend: true,
                                point: {
                                    events: {
                                    }
                                },
                            }
                        },
                        series: [{
                            type: 'pie',
                            size: '120%',
                            innerSize: '50%',
                            name: '分数',
                            data: _fenshu
                        }]
                    }, function(c) { // 图表初始化完毕后的会掉函数
                        // 环形图圆心
                        var centerY = c.series[0].center[1],
                            titleHeight = parseInt(c.title.styles.fontSize);
                        // 动态设置标题位置
                        c.setTitle({
                            y:centerY + titleHeight/2
                        });
                    });
                }
            }
            function da4(){
                var data4=[
                    {name:'微课视频',y: 5,x:80,color:'#89dcd1'},
                    {name:'课程学习',y: 8,x:100,color:'#89b8dc'},
                    {name:'解剖操作指导',y: 5,x:100,color:'#8d89dc'},
                    {name:'思维导图',y: 4,x:100,color:'#dc89b8'},
                    {name:'实验报告',y: 5,x:100,color:'#dc9789'},
                    {name:'巩固练习',y:4,x:100,color:'#dcbe89'},
                    {name:'实验考试',y:20,x:100,color:'#dcd589'},
                    {name:'理论考试',y:30,x:90,color:'#bcdc89'}
                ];
                givedata(data4);
                // Make colors
                function givedata(_fenshu){
                    var pieColors = (function () {
                        var colors =[];
                        for(var i=0;i<_fenshu.length;i++){
                            colors.push(_fenshu[i].color);
                        }
                        return colors;
                    }());
                    //得分
                    var defen=0;
                    for(var i=0;i<_fenshu.length;i++){
                        defen+=((_fenshu[i].y)/100*(_fenshu[i].x));
                    }
                    var chart = Highcharts.chart(this.id4, {
                        chart: {
                            spacing : [40, 10 , 40, 10],
                        },
                        legend: {
                            itemMarginTop: 2,
                            x: 0,
                            y: 30,
                            itemStyle: {
                                fontSize: '14px',
                                lineHeight:'14px',
                                fontWeight: 'normal'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            floating:true,
                            align: 'center',
                            //x:-svgW,
                            text: defen+"分",
                            style: {
                                color: '#3e4e69',
                                fontSize:'36px'
                            }
                        },
                        tooltip: {
                            useHTML: true,
                            headerFormat: '<small>{point.key}</small><br/>',
                            pointFormatter: function(e){
                                return '<span>得分：' +((this.y)/100*(this.x))+ '分</span>';
                            },style: {
                                fontSize:'14px'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                colors: pieColors,
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: false,
                                    connectorWidth: 0,
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                },
                                showInLegend: true,
                                point: {
                                    events: {
                                    }
                                },
                            }
                        },
                        series: [{
                            type: 'pie',
                            size: '120%',
                            innerSize: '50%',
                            name: '分数',
                            data: _fenshu
                        }]
                    }, function(c) { // 图表初始化完毕后的会掉函数
                        // 环形图圆心
                        var centerY = c.series[0].center[1],
                            titleHeight = parseInt(c.title.styles.fontSize);
                        // 动态设置标题位置
                        c.setTitle({
                            y:centerY + titleHeight/2
                        });
                    });
                }
            }*!/
            /!*da2();
            da3();
            da4();*!/
        }*/
    }
</script>
<style scoped>
	.clearfix{
		margin-left: 30px;
		margin-top: 20px;
	}
    .scorepart {
        display: flex;
    }

    .score {
        width: 52%;
    }

    .kh_pj {
        display: flex;
        flex-direction: column;
        width: 44%;
        margin-left: 4%;
        position: relative;
    }

    .chart_div {
        margin: 10px;
    }

    .chart_div.chart2 {
        margin: 10px;
    }

    .kh_title {
        display: flex;
    }

    .selectSub {
        display: flex;
        color: #3e4e69;
    }
</style>
