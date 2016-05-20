/**
 * Created by dingtianxiu on 16/5/4.
 * descript:全省地税收入整体展示
 */

var app = angular.module("qsdssrzs",[]);
app.controller("qsdssrzsCtrl",['$scope','mainService',function ($scope,mainService) {
    require.config({
        paths: {
            echarts: '.././js/src',
            zrender:'.././js/zrender/src'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (echarts){
            // var cityData=['杭州市','湖州市','金华市','嘉兴市','丽水市','宁波市','衢州市','绍兴市','台州市','温州市','舟山市'];

            //保存地图显示数据
            var mapData=[];

            //保存各市数据
            var hzData={};
            var nbData={};
            var wzData={};
            var jxData={};
            var hz1Data={};
            var sxData={};
            var jhData={};
            var qzData={};
            var zsData={};
            var lsData={};
            var tzData={};

            //取得浙江省16年数据,处理
            mainService.query('http://144.16.55.49:8088/gt3/dtzs/srqk?','2016','33','1')
                .then(
                    function (data) {
                        // console.log(data);
                        $scope.qsData = data.root.value;
                        for(var i=0;i<$scope.qsData.length;i++){
                            switch ($scope.qsData[i].xmmcSz){
                                case "税务部门组织的收入":
                                    $scope.qszzsr = $scope.qsData[i].nLj;
                                    break;
                                case "一、税收收入":
                                    $scope.qssssr = $scope.qsData[i].nLj;
                                    break;
                                case "二、非税收入合计":
                                    $scope.qsfsssr = $scope.qsData[i].nLj;
                                    break;
                                case "5.社保基金收入":
                                    $scope.qssbjj = $scope.qsData[i].nLj;
                                    break;
                                default:
                                    break;

                            }
                        }
                    }
                );

            //取得各市16年数据,处理,县区数据可类似处理
            mainService.query('http://144.16.55.49:8088/gt3/dtzs/srqk?','2016','33','0')
                .then(
                    function (data) {
                        console.log(data);
                        $scope.dsData = data.root.value;
                        for(var i=0;i<$scope.dsData.length;i++){
                            switch ($scope.dsData[i].tybm){
                                case 3301:
                                    // hzData.push($scope.dsData[i]);
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            hzData.name = "杭州市";
                                            hzData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            hzData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            hzData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            hzData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3302:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            console.log(i);
                                            nbData.name = "宁波市";
                                            nbData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            nbData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            nbData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "    5.社保基金收入"://坑爹宁波前面有四个空格
                                            nbData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3303:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            wzData.name = "温州市";
                                            wzData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            wzData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            wzData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            wzData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3304:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            jxData.name = "嘉兴市";
                                            jxData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            jxData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            jxData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            jxData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3305:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            hz1Data.name = "湖州市";
                                            hz1Data.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            hz1Data.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            hz1Data.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            hz1Data.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3306:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            sxData.name = "绍兴市";
                                            sxData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            sxData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            sxData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            sxData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3307:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            jhData.name = "金华市";
                                            jhData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            jhData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            jhData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            jhData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3308:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            qzData.name = "衢州市";
                                            qzData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            qzData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            qzData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            qzData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3309:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            zsData.name = "舟山市";
                                            zsData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            zsData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            zsData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            zsData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3325:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            lsData.name = "丽水市";
                                            lsData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            lsData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            lsData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            lsData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3326:
                                    switch ($scope.dsData[i].xmmcSz){
                                        case "税务部门组织的收入":
                                            tzData.name = "台州市";
                                            tzData.value = $scope.dsData[i].nLj;
                                            break;
                                        case "一、税收收入":
                                            tzData.sssr = $scope.dsData[i].nLj;
                                            break;
                                        case "二、非税收入合计":
                                            tzData.fsssr = $scope.dsData[i].nLj;
                                            break;
                                        case "5.社保基金收入":
                                            tzData.sbjjsr = $scope.dsData[i].nLj;
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                default:
                                    break;
                            }

                        }

                        //数据压入mapData
                        mapData.push(hzData,nbData,wzData,jhData,hz1Data,jxData,sxData,qzData,zsData,lsData,tzData);

                        //配置地图数据
                        myChart.setOption(option1);

                    }
                );


            //模拟数据
            // var mapData =[
            //     {name:'杭州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'嘉兴市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'湖州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'宁波市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'丽水市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'绍兴市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'温州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'金华市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'舟山市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'台州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333},
            //     {name:'衢州市',value:617189729892.61,sssr:1111,fsssr:2222,sbjjsr:3333}
            // ];

            //取得dom节点
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

                //标题
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

                //tooltip提示框
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

                //功能选项
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

            //点击浙江地图地市,调出地市地图
            myChart.on('click', function(param){
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

            //点击空白处调出浙江地图,bug:点击市地图也能调出浙江地图,待解决
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


//取数服务
app.factory('mainService',['$http','$q',function($http,$q){
    return{
        query: function (url,nf,tybm,bj) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url:url,
                // 'http://144.16.55.49:8088/gt3/dtzs/sssbdt'
                params:{
                    nf: nf, //数据年份
                    tybm: tybm, //数据编码,代表地区
                    bj: bj //1:整体数据  2.分区数据
                }
            })
                .success(function (data) {
                    defer.resolve(data);
                    // console.log(data);
                })
                .error(function () {
                    console.log('获取信息失败');
                });
            return defer.promise;
        }
    }
}]);