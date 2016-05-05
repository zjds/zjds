/**
 * Created by dtx on 16/5/4.
 * descript:全省地税收入整体展示
 */
require.config({
    paths: {
        echarts: '.././js/src',
        zrender:'.././js/zrender/src',
    }
});
require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function (echarts){
        var mapData =[
            {name:'杭州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'嘉兴市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'湖州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'宁波市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'丽水市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'绍兴市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'温州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'金华市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'舟山市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'台州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name:'衢州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            {name : '省局直属局', value : 3707}
        ];
        var myChart= echarts.init(document.getElementById('mapcavs'));

        require('echarts/util/mapData/params').params.zj= {
            getGeoJson: function (callback) {
                $.getJSON('../zhejiang.json', function (data) {
                    // 压缩后的地图数据必须使用 decode 函数转换
                    callback(require('echarts/util/mapData/params').decode(data));
                })


            }
            //取得浙江省地图。。。没法调出二级。。。暂时放弃
        };
        option = {
            // color: ['rgba(30,144,255,0)','line'],
            title : {
                text: '',
                subtext:'',
                //sublink: 'http://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E9%93%81%E8%B7%AF%E8%BF%90%E8%BE%93',
                sublink:'',
                x:'center',
                textStyle : {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    var res=params.data.name+'<hr style="margin: 2% 0"/>地税组织收入：<span style="color: yellow">'+params.data.value+
                        '<br/></span>税收收入:<span style="color: yellow">'+params.data.sssr+'</span>'+
                        '<br/></span>非税收收入:<span style="color: yellow">'+params.data.fsssr+'</span>'+
                        '<br/></span>社保基金收入:<span style="color: yellow">'+params.data.sbjjsr+'</span>'
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                x:'left',
                // selectedMode:'single',
                data:['', ''],
                textStyle : {
                    color: '#fff'
                },
                selectedMode:'multiple'
            },
            toolbox: {
                show : false,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name: '地税组织收入',
                    type: 'map',
                    roam: false,
                    hoverable: true,
                    clickable:false,
                    mapType: 'zj',
                    itemStyle:{
                        normal:{
                            label:{textStyle:{color:'#c9dde1'},show:false},
                            borderColor:'#065fb3',
                            borderWidth:0.5,
                            areaStyle:{
                                color: '#002957' //地图正常颜色
                            }
                        },
                        emphasis:{
                            label:{textStyle:{color:'#2d2925'},show:false},
                            borderColor:'rgba(200,249,137,0.1)',
                            borderWidth:0.5,
                            color:'#15cbff' //地图mouseover颜色

                        }
                    },
                    data:mapData
                }
            ]
        };
        // console.log(mapData);
        myChart.setOption(option);
    });