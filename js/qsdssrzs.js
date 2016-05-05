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
                formatter: '{b}'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                selectedMode:'single',
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
                    name: '浙江数据',
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
                    data:[
                        
                    ]
                }
            ]
        };
        myChart.setOption(option);
    });