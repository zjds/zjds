/**
 * @author : DingTianXiu
 * @date : 2016/4/19
 * @module : 地税收入年度对比
 * @description :
 */

var app = angular.module("dssrnddb",[]);
app.controller("dssrnddbCtrl",[function(){

}]);
require.config({
    paths: {
        echarts: '.././js/src',
        zrender:'.././js/zrender/src',
    }
});
require(
    [
        'echarts',
        'echarts/chart/line'
    ],
    function (echarts){
        var lineChart= echarts.init(document.getElementById('dssrnddb'));
        var dszzsr=[{value:parseFloat(sjjson.s2009.swbmsr)/100000000},{value:parseFloat(sjjson.s2010.swbmsr)/100000000},{value:parseFloat(sjjson.s2011.swbmsr)/100000000}, {
            value: parseFloat(sjjson.s2012.swbmsr / 100000000)}, {value:parseFloat(sjjson.s2013.swbmsr/100000000)},{value:parseFloat(sjjson.s2014.swbmsr/100000000)},{value:parseFloat(sjjson.s2015.swbmsr/100000000)}];
        var  sssr=[{value:parseFloat(sjjson.s2009.sssr/100000000)},{value:parseFloat(sjjson.s2010.sssr/100000000)},{value:parseFloat(sjjson.s2011.sssr/100000000)}, {
            value: parseFloat(sjjson.s2012.sssr / 100000000)
        },{value:parseFloat(sjjson.s2013.sssr/100000000)},{value:parseFloat(sjjson.s2014.sssr/100000000)},{value:parseFloat(sjjson.s2015.sssr/100000000)}];
        var  fssr=[{value:parseFloat(sjjson.s2009.fssr/100000000)},{value:parseFloat(sjjson.s2010.fssr/100000000)},{value:parseFloat(sjjson.s2011.fssr/100000000)},
            { value:parseFloat(sjjson.s2012.fssr / 100000000)},{value:parseFloat(sjjson.s2013.fssr/100000000)},{value:parseFloat(sjjson.s2014.fssr/100000000)},{value:parseFloat(sjjson.s2015.fssr/100000000)}];
        var  sbjjsr=[{value:parseFloat(sjjson.s2009.sbjjsr/100000000)},{value:parseFloat(sjjson.s2010.sbjjsr/100000000)},{value:parseFloat(sjjson.s2011.sbjjsr/100000000)},
            {value:parseFloat(sjjson.s2012.sbjjsr / 100000000)},{value:parseFloat(sjjson.s2013.sbjjsr/100000000)},{value:parseFloat(sjjson.s2014.sbjjsr/100000000)},{value:parseFloat(sjjson.s2015.sbjjsr/100000000)}];
        for(i=0;i<dszzsr.length;i++){
            dszzsr[i].value=dszzsr[i].value.toFixed(2);
            sssr[i].value=sssr[i].value.toFixed(2);
            fssr[i].value=fssr[i].value.toFixed(2);
            sbjjsr[i].value=sbjjsr[i].value.toFixed(2);
        }
        dszzsr.push('-');
        sssr.push('-');
        fssr.push('-');
        sbjjsr.push('-');
        //console.log(sbjjsr[sbjjsr.length-1]*1.2)
        //dszzsr.push({value:2000,
        //  itemStyle:
        //{normal:{
        //    color:'gray',
        //     lineStyle:{
        //       type:'dotted'
        //     }
        //  }
        //}});
        //sssr.push({value:4000,
        //  itemStyle:
        //  {normal:{
        //    color:'gray',
        //    lineStyle:{
        //      type:'dotted'
        //    }
        //  }
        //  }});
        //fssr.push({value:6000,
        //  itemStyle:
        //  {normal:{
        //    color:'gray',
        //    lineStyle:{
        //      type:'dotted'
        //    }
        //  }
        //  }});
        //sbjjsr.push({value:3000,
        //  itemStyle:
        //  {normal:{
        //    color:'gray',
        //    lineStyle:{
        //      type:'dotted'
        //    }
        //  }
        //  }});
        option = {
            title: {
            },
            tooltip: {   //提示框组件
                // show:false,
                trigger: 'axis',  //触发类型
                padding:7,
                formatter: function (params, ticket, callback) {  //显示格式化
                    params=params.sort(by("seriesIndex"));//排序
                    var res = params[0].name+'年<br/>';//抬头
                    // console.log(params,'1');
                    for(i=0;i<params.length;i++){
                        // if((params[i].value!='-')&&(params[i].name!='15')){
                        //     res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
                        // }else if((params[i].name=='15')&&(i%2!=0)){
                        //     res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
                        // }
                        if(i%2==0){
                            res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//修改,只显示虚线数据
                        }
                    }

                    setTimeout(function (){callback(ticket, res);}, 300);
                    return '计算中...';
                },
                textStyle:{   //文本颜色
                   fontSize:'16'
                },
                extraCssText:'width:300px;height:200px'  //无效，不知道为什么
            },
            legend: {
                textStyle:{
                    color:"#ffffff",
                    fontSize:'16'
                },
                data:['地税组织收入','税收收入','非税收入','社保基金收入']
            },
            grid: { //网格
                left: "left",
                right: '0%',
                bottom: '0%',
                containLabel: true,
                borderWidth:0
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel:{
                    textStyle:{
                        color:"#2669ce",
                        fontSize:20,
                        fontWeight:"normal"
                    },
                },
                splitLine:{
                    show:false
                },
                data: ['2009','2010','2011','2012','2013','2014','2015','2016']
            },
            yAxis: {
                type: 'value',
                name:'亿元',
                axisLabel:{
                    textStyle:{
                        color:"#2669ce",
                        fontSize:20,
                        fontWeight:"normal"
                    },
                },
                splitLine:{
                    lineStyle:{
                        color:'#073b83'
                    }
                },
            },
            series: [  //数据配置
                {
                    name:'社保基金收入',
                    type:'line',
                    stack: '',
                    data:sbjjsr,
                    // tooltipShow:false,
                    tooltip:{
                        show:false
                    }
                },
                {
                    name:'社保基金收入',
                    type:'line',
                    stack: '',
                    itemStyle:
                    {normal: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                    },
                    data:[sbjjsr[0],sbjjsr[1],sbjjsr[2],sbjjsr[3],sbjjsr[4],sbjjsr[5],sbjjsr[sbjjsr.length-2],(sbjjsr[sbjjsr.length-2].value*1.2).toFixed(2)]
                },
                {
                    name:'非税收入',
                    type:'line',
                    stack: '',
                    data:fssr
                },
                {
                    name:'非税收入',
                    type:'line',
                    stack: '',
                    itemStyle:
                    {normal: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                    },
                    data:[fssr[0],fssr[1],fssr[2],fssr[3],fssr[4],fssr[5],fssr[fssr.length-2],(fssr[fssr.length-2].value*1.2).toFixed(2)]
                },
                {
                    name:'税收收入',
                    type:'line',
                    stack: '',
                    data:sssr
                },
                {
                    name:'税收收入',
                    type:'line',
                    stack: '',
                    itemStyle:
                    {normal: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                    },
                    data:[sssr[0],sssr[1],sssr[2],sssr[3],sssr[4],sssr[5],sssr[sssr.length-2],(sssr[sssr.length-2].value*1.2).toFixed(2)]
                },
                {
                    name:'地税组织收入',
                    type:'line',
                    data:dszzsr
                },
                {
                    name:'地税组织收入',
                    type:'line',
                    stack: '',
                    itemStyle:
                    {normal: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                    },
                    data:[dszzsr[0],dszzsr[1],dszzsr[2],dszzsr[3],dszzsr[4],dszzsr[5],dszzsr[dszzsr.length-2],(dszzsr[dszzsr.length-2].value*1.2).toFixed(2)]
                },
            ]
        };
        lineChart.setOption(option);
    }); //left折线