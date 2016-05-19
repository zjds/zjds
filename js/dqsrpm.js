/**
 * Created by dingtianxiu on 16/5/9.
 * decription:地区收入排名
 */
var app = angular.module("dqsrpm",[]);
    app.controller("dqsrpmCtrl",['$scope',function ($scope) {
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
                var cityData=['杭州市','湖州市','金华市','嘉兴市','丽水市','宁波市','衢州市','绍兴市','台州市','温州市','舟山市'];

                var mapData =[
                    {name:'杭州市',value:617189729892.61,sszf:111},
                    {name:'嘉兴市',value:617189729892.61,sszf:1111},
                    {name:'湖州市',value:617189729892.61,sszf:1111},
                    {name:'宁波市',value:617189729892.61,sszf:1111},
                    {name:'丽水市',value:617189729892.61,sszf:1111},
                    {name:'绍兴市',value:617189729892.61,sszf:1111},
                    {name:'温州市',value:617189729892.61,sszf:1111},
                    {name:'金华市',value:617189729892.61,sszf:1111},
                    {name:'舟山市',value:617189729892.61,sszf:1111},
                    {name:'台州市',value:617189729892.61,sszf:1111},
                    {name:'衢州市',value:617189729892.61,sszf:1111},
                    {name : '省局直属局', value : 3707}
                ];
                var myChart= echarts.init(document.getElementById('mapcavs'));

                //引入浙江及各市地图
                require('echarts/util/mapData/params').params.zj= {
                    getGeoJson: function (callback) {
                        $.getJSON('../zhejiang.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                        })


                    }
                    //取得浙江省地图。。。没法调出二级。。。暂时放弃
                };
                require('echarts/util/mapData/params').params.杭州市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/hz.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.湖州市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/hz1.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.嘉兴市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/jx.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.金华市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/jh.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.丽水市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/ls.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.宁波市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/nb.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.衢州市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/qz.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.绍兴市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/sx.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.台州市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/tz.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.温州市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/wz.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                require('echarts/util/mapData/params').params.舟山市= {
                    getGeoJson: function (callback) {
                        $.getJSON('../js/geoJson/china-main-city/zs.json', function (data) {
                            // 压缩后的地图数据必须使用 decode 函数转换
                            callback(require('echarts/util/mapData/params').decode(data));
                            // console.log(hz.json);
                        })
                    }
                };
                option1 = {
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
                            var res=params.data.name+'<hr style="margin: 2% 0"/>税收收入：<span style="color: yellow">'+params.data.value+
                                '<br/></span>税收增幅:<span style="color: yellow">'+params.data.sszf+'</span>'
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
                            name: '浙江',
                            type: 'map',
                            roam: false,
                            hoverable: true,
                            clickable:true,
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
                            slient:true,
                            data:mapData
                        }
                    ]
                };
                // console.log(mapData);
                myChart.setOption(option1);

                //点击浙江地图地市,调出地市地图
                myChart.on('click', function(param){
                    // console.log(param);
                    // console.log('2');
                    var jsonName = param.name;
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
                                name: jsonName,
                                type: 'map',
                                roam: false,
                                hoverable: true,
                                clickable:false,
                                mapType: jsonName,
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
                                slient:true,
                                data:mapData
                            }
                        ]
                    };
                    myChart.setOption(option);
                    // param.event.stopPropagation(); //阻止事件冒泡
                });
                // console.log(myChart._option.series[0].name);

                var body = document.body;
                var backZj = function (event) {
                    if(myChart._option.series[0].name!="浙江"){
                        myChart.setOption(option1);
                        // event.stopPropagation(); //阻止事件冒泡
                        // console.log('1');
                        // alert(event.eventPhase);//查看事件处于什么阶段
                    }
                }
                body.addEventListener("click",backZj,false);
            }
        );
}])