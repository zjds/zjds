/**
 * Created by dingtianxiu on 2016/4/20.
 * 实时申报情况监控
 */

var app = angular.module("sssbqkjk",[]);
app.controller("sssbqkjkCtrl",['$scope','mainService',function($scope,mainService){
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
            var greendata=[
                //[{name:'湖州'},{name:'杭州'}],
                //[{name:'嘉兴'},{name:'杭州'}],
                //
                //[{name:'温州'},{name:'杭州'}],
                //
                //[{name:'金华'},{name:'杭州'}],
                //
                //[{name:'丽水'},{name:'杭州'}],
                //[{name:'台州'},{name:'杭州'}],
                //[{name:'舟山'},{name:'杭州'}],
                //
                //[{name:'绍兴'},{name:'杭州'}],
                //[{name:'义乌'},{name:'杭州'}],
                //
                //[{name:'宁波'},{name:'杭州'}],
                //[{name:'衢州'},{name:'杭州'}]
            ]//测试调用结果数组
            var bluedata=[
                //[{name:'下城区'},{name:'杭州'}],
                //[{name:'上城区'},{name:'杭州'}],
                //[{name:'萧山区'},{name:'杭州'}],
                //[{name:'滨江区'},{name:'杭州'}],
                //[{name:'江干区'},{name:'杭州'}],
                //[{name:'拱墅区'},{name:'杭州'}],
                //[{name:'西湖区'},{name:'杭州'}],
                //[{name:'桐庐县'},{name:'杭州'}],
                //[{name:'淳安县'},{name:'杭州'}],
                //[{name:'建德市'},{name:'杭州'}],
                //[{name:'富阳市'},{name:'杭州'}],
                //[{name:'余杭区'},{name:'杭州'}],
                //[{name:'临安市'},{name:'杭州'}]
            ]//上
            var geoCoordflr= {
                '省局直属局':[120.13,30.27],
                '嘉兴市局本级':[120.76, 30.77],
                '嘉兴三局':[120.67,30.51],
                '嘉善县局':[120.92,30.84],
                '平湖市局':[121.02,30.7],
                '海盐县局':[120.92,30.53],
                '桐乡市局':[120.54,30.64],
                '海宁市局':[120.69,30.53],
                '杭州市局本级':[120.19, 30.26],
                // '上城区':[120.17,30.25],
                // '下城区':[120.17,30.28],
                // '江干区':[120.2	,30.27],
                // '拱墅区':[120.13,30.32],
                // '西湖区':[120.13,30.27],
                // '滨江区':[120.2	,30.2 ],
                // '萧山区':[120.27,30.17],
                // '余杭区':[120.3	,30.42],
                '桐庐县局':[119.67,29.8],
                '富阳市局':[119.95,30.07],
                '临安县局':[119.72,30.23],
                '余杭局':[120.3,30.43],
                '淳安县局':[119.03,29.6],
                '建德市局':[119.28,29.48],
                '萧山局':[120.25,30.16],
                '宁波直属分局':[121.55,29.88],
                '保税区':[121.85,29.92],
                '海曙区':[121.55,29.87],
                '江东区':[121.57,29.87],
                '江北区':[121.55,29.88],
                '北仑区':[121.85,29.93],
                '宁波高新分局':[121.61,29.88],
                '东钱湖分局':[121.63,29.79],
                '大榭开发区':[121.93,29.89],
                '镇海区':[121.72,29.95],
                '宁波杭州湾分局':[121.13,30.25],
                '象山县':[121.87,29.48],
                '宁海县':[121.43,29.28],
                '余姚市':[121.15,30.04],
                '鄞州区':[121.53,29.83],
                '慈溪市':[121.23,30.17],
                '奉化市':[121.4,29.65],
                '宁波契税征收管理中心':[121.54,29.88],
                '丽水市局本级':[119.92, 28.45],
                '龙泉市局':[119.13,28.08],
                '青田县局':[120.28,28.45],
                '云和县局':[119.56,28.12],
                '庆元县局':[119.06,27.61],
                '缙云县局':[120.6,28.66],
                '遂昌县局':[119.25,28.59],
                '松阳县局':[119.48,28.46],
                '景宁县局':[119.63,27.98],
                '温州市局本级':[120.65,28.01],
                '洞头区局':[121.12,27.84],
                '乐清市局':[120.94,28.14],
                '永嘉县局':[120.68,28.16],
                '平阳县局':[120.55,27.68],
                '苍南县局':[120.36,27.53],
                '文成县局':[120.09,27.79],//位置在海上,坐标不准确
                '泰顺县局':[119.7,27.57],
                '瑞安市局':[120.62,27.8],
                '湖州市局本级':[120.1,30.86],
                '德清县局':[119.97,30.57],
                '长兴县局':[119.9,31.02],
                '安吉县局':[119.68,30.68],
                '金华市局本级':[119.64,29.12],
                '永康市局':[120.02,28.92],
                '武义县局':[119.81,28.9],
                '义乌市局':[120.06,29.32],
                '浦江县局':[119.88,29.46],
                '磐安县局':[119.48,29.19],
                '兰溪市局':[119.46,29.21],
                '东阳市局':[120.23,29.29],
                '舟山市局本级':[122.2,30],
                '定海区局':[122.11,30.03],
                '普陀区局':[122.3,29.95],
                '岱山县局':[122.3,30.25],
                '嵊泗县局':[122.3,30.73],
                '台州市局本级':[121.43,28.68],
                '椒江区局':[121.44,28.67],
                '路桥区局':[121.38,28.58],
                '黄岩区局':[121.27,28.64],
                '临海市局':[121.13,28.8],
                '温岭市局':[121.36,28.36],
                '仙居县局':[120.73,28.85],
                '天台县局':[121.03,29.15],
                '三门县局':[121.38,29.11],
                '玉环县局':[121.23,28.14],
                '衢州市局本级':[118.87,28.93],
                '常山县局':[118.5,28.9],
                '江山市局':[118.61,28.74],
                '开化县局':[118.39,29.15],
                '龙游县局':[119.17,29.03],
                '绍兴市局本级':[120.58,30.01],
                '柯桥区局':[120.49,30.08],
                '新昌县局':[120.89,29.49],
                '诸暨市局':[120.23,29.71],
                '上虞区局':[120.87,30.03],
                '嵊州市局':[120.81,29.6]
            };
            var ab= [
                '省局直属局',
                '嘉兴市局本级',
                '嘉兴三局',
                '嘉善县局',
                '平湖市局',
                '海盐县局',
                '桐乡市局',
                '海宁市局',
                '杭州市局本级',
                // '上城区':[120.17,30.25],
                // '下城区':[120.17,30.28],
                // '江干区':[120.2	,30.27],
                // '拱墅区':[120.13,30.32],
                // '西湖区':[120.13,30.27],
                // '滨江区':[120.2	,30.2 ],
                // '萧山区':[120.27,30.17],
                // '余杭区':[120.3	,30.42],
                '桐庐县局',
                '富阳市局',
                '临安县局',
                '余杭局',
                '淳安县局',
                '建德市局',
                '萧山局',
                '宁波直属分局',
                '保税区',
                '海曙区',
                '江东区',
                '江北区',
                '北仑区',
                '宁波高新分局',
                '东钱湖分局',
                '大榭开发区',
                '镇海区',
                '宁波杭州湾分局',
                '象山县',
                '宁海县',
                '余姚市',
                '鄞州区',
                '慈溪市',
                '奉化市',
                '宁波契税征收管理中心',
                '丽水市局本级',
                '龙泉市局',
                '青田县局',
                '云和县局',
                '庆元县局',
                '缙云县局',
                '遂昌县局',
                '松阳县局',
                '景宁县局',
                '义乌',
                '温州市局本级',
                '洞头区局',
                '乐清市局',
                '永嘉县局',
                '平阳县局',
                '苍南县局',
                '文成县局',
                '泰顺县局',
                '瑞安市局',
                '湖州市局本级',
                '德清县局',
                '长兴县局',
                '安吉县局',
                '金华市局本级',
                '永康市局',
                '武义县局',
                '义乌市局',
                '浦江县局',
                '磐安县局',
                '兰溪市局',
                '东阳市局',
                '舟山市局本级',
                '定海区局',
                '普陀区局',
                '岱山县局',
                '嵊泗县局',
                '台州市局本级',
                '椒江区局',
                '路桥区局',
                '黄岩区局',
                '临海市局',
                '温岭市局',
                '仙居县局',
                '天台县局',
                '三门县局',
                '玉环县局',
                '衢州市局本级',
                '常山县局',
                '江山市局',
                '开化县局',
                '龙游县局',
                '绍兴市局本级',
                '柯桥区局',
                '新昌县局',
                '诸暨市局',
                '上虞区局',
                '嵊州市局'
            ];
            require('echarts/util/mapData/params').params.zj= {
                getGeoJson: function (callback) {
                    $.getJSON('../zhejiang.json', function (data) {
                        // 压缩后的地图数据必须使用 decode 函数转换
                        callback(require('echarts/util/mapData/params').decode(data));
                    })


                }
                //取得浙江省地图。。。没法调出二级。。。暂时放弃
            }
            var effect = {//线条
                show: true,
                scaleSize: require('zrender/tool/env').canvasSupported ? 1 : 2,
                loop:false,
                period: 4.2,             // 运动周期，无单位，值越大越慢
                color: '#fffc27',
                shadowColor: 'rgba(220,220,220,0.1)',
                opacity: 0.2,
                shadowBlur :0.5
            };//这里设置炫光特效颜色大小
            function itemStyle(idx) {
                return {
                    normal: {
                        color:'#fff',
                        borderWidth:4,
                        borderColor:['rgba(30,144,255,1)','rgba(34,239,39,0)'][idx],
                        lineStyle: {
                            //shadowColor : ['rgba(30,144,255,1)','rgba(30,144,255,0)'][idx], //默认透明
                            //shadowBlur: 10,
                            //shadowOffsetX: 0,
                            //shadowOffsetY: 0,
                            type: 'solid'
                        }
                    }
                }
            };//这里设置线条颜色大小
            option = {
                color: ['rgba(30,144,255,0)','lime'],
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
                                    color: '#002957'
                                }
                            },
                            emphasis:{
                                label:{textStyle:{color:'#2d2925'},show:false},
                                borderColor:'rgba(200,249,137,0.1)',
                                borderWidth:0.5,
                                color:'#023760'

                            }
                        },
                        data:[],
                        markPoint : {
                            symbol: 'circle',
                            symbolSize:2,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                            itemStyle: {
                                normal: {
                                    borderColor: '#ffbb17',
                                    borderWidth: 5,            // 标注边线线宽，单位px，默认为1
                                    label: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    borderColor: '#ffbb17',
                                    borderWidth: 5,
                                    label: {
                                        show: false
                                    }
                                }
                            },
                            effect: {
                                show: true,
                                type: 'scale',
                                loop: true,
                                period: 20,
                                scaleSize:30,
                                shadowBlur:10
                            },
                            data :[{name:"省局直属局"}],
                            geoCoord: geoCoordflr
                        }
                    },
                    {
                        name: '浙江数据',
                        type: 'map',
                        mapType: 'zj',
                        clickable:false,
                        itedmStyle:{
                            normal:{
                                borderColor:'rgba(100,149,237,0.1)',
                                borderWidth:2,
                                areaStyle:{
                                    color: '#1b1b1b'
                                }
                            }
                        },
                        data:[],
                        markPoint : {
                            symbol: 'circle',
                            symbolSize: 10,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                            itemStyle: {
                                normal: {
                                    borderColor: '#17d6ff',
                                    borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                                    label: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    borderColor: '#17d6ff',
                                    borderWidth: 5,
                                    label: {
                                        show: false
                                    }
                                }
                            },
                            effect: {
                                show: true,
                                type: 'scale',
                                loop: false,
                                period: 15,
                                scaleSize: 2,
                                shadowBlur:0.3
                            },
                            data :[],
                            geoCoord: geoCoordflr
                        },
                        markLine : {
                            symbol: ['emptyCircle', 'arrow'],
                            symbolSize : 0,
                            large:true,
                            effect : effect,
                            itemStyle : itemStyle(1),
                            smooth:true,
                            data : greendata
                        },
                        geoCoord: geoCoordflr
                    }
                ]
            };
            myChart.setOption(option);
            $scope.ssDate = '';
            mainService.query('http://144.16.55.49:8088/gt3/dtzs/sssbdt')
                .then(function (data) {
                    console.log(data,'当天');
                    // console.log(data.root.value[0].sbbs);
                    $scope.sbbs = data.root.value[0].sbbs;
                    $scope.sbje = parseFloat(data.root.value[0].sbje/10000);
                });
            mainService.query('http://144.16.55.49:8088/gt3/dtzs/sssbss?sssbtjsj=')
                .then(
                    function (data) {
                        console.log(data,'实时');
                        // console.log(data.root.sssbGrid[0]);
                        $scope.ssData = data.root.sssbGrid;
                        $scope.ssDate = data.root.sssbtjsj;
                    }
                );
            $scope.sssb = setInterval(
                function () {
                    mainService.query('http://144.16.55.49:8088/gt3/dtzs/sssbss?',$scope.ssDate)
                        .then(
                            function (data) {
                                console.log(data,'实时');
                                // console.log(data.root.sssbGrid[0]);
                                $scope.ssData = data.root.sssbGrid;
                                $scope.ssDate = data.root.sssbtjsj;
                            }
                        );
                },300000);
            $scope.timeTicket = setInterval(function (){
                $scope.addsbje = "";
                $scope.addsbbs = "";
                var youdata=[];
                var mydata=[];
                var aadata=[];//保存处理完成的结果集
                var str=',{data:[';//保存线性数据
                var strpont=',{data:[';//保存点状数据
                var number=Math.floor(Math.random()*3+1);//处理结果的数量，仅demo，实际可删 //产生的数据数量
                for(i=0, k={},l={};i<number;i++){
                    // var ronndnum=Math.floor(Math.random()*arrayObj.length);
                    mydata=[{'name':$scope.ssData[i].swjmc},{'name':'省局直属局'}];
                    // console.log($scope.ssData[i].swjmc);
                    aadata.push(mydata);
                    console.log($scope.ssData[i].swjmc);
                    $scope.addsbje=parseFloat($scope.addsbje+$scope.ssData[i].sbje/10000);
                    $scope.addsbbs = parseFloat($scope.addsbbs+$scope.ssData[i].sbbs);
                }  //将数据压入aadata
                for(i=0;i<aadata.length;i++){
                    str+='[{"name":"'+aadata[i][0].name+'"},{"name":"省局直属局"}],';
                    //myChart.addMarkPoint(1,{data:[{name: '宁波'}]});
                    strpont+='{name:"'+aadata[i][0].name+'"},';
                }
                $scope.ssData = $scope.ssData.slice(number);
                // console.log($scope.ssData.length);
                // myChart.addMarkPoint(1,{data:[{name: '宁波'},{name: '杭州'}]});方法
                str=str.substring(0,(str.length-1))+']})';
                strpont=strpont.substring(0,(strpont.length-1))+']})'
                eval('myChart.addMarkPoint('+1+strpont);  //为index为1的系列添加点
                var t = setTimeout(function(){
                        eval('myChart.addMarkLine('+1+str); //为index为1的系列添加线
                        $scope.sbje = parseFloat($scope.sbje+$scope.addsbje);
                        // $scope.sbje = $scope.sbje.toFixed(2)
                        $scope.sbbs = parseFloat($scope.sbbs+$scope.addsbbs);
                        clearTimeout(t);
                    }
                    ,1000);
                var r = setTimeout(function(){//回收canvas上的所有线跟点。
                    for(i=0;i<aadata.length;i++){
                        eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 杭州市局本级")');
                        eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
                    }
                    clearTimeout(r);
                },6000);
                $scope.$digest();
            },4000);


            //测试地图经纬度数据
            // var cscscs = {
            //
            //   '嘉兴':[120.76, 30.77],
            //   // '嘉兴':[],
            //   '嘉善':[120.92,30.84],
            //   '平湖':[121.02,30.7],
            //   '海盐':[120.92,30.53],
            //   '桐乡':[120.54,30.64],
            //   '海宁':[120.69,30.53],
            //   '杭州':[120.19, 30.26],
            //   // '上城区':[120.17,30.25],
            //   // '下城区':[120.17,30.28],
            //   // '江干区':[120.2	,30.27],
            //   // '拱墅区':[120.13,30.32],
            //   // '西湖区':[120.13,30.27],
            //   // '滨江区':[120.2	,30.2 ],
            //   // '萧山区':[120.27,30.17],
            //   // '余杭区':[120.3	,30.42],
            //   '桐庐':[119.67,29.8],
            //   '富阳':[119.95,30.07],
            //   '临安':[119.72,30.23],
            //   '余杭':[120.3,30.43],
            //   '淳安':[119.03,29.6],
            //   '建德':[119.28,29.48],
            //   '萧山':[120.25,30.16],
            //   '宁波':[121.55,29.88],
            //   // '保税':[],
            //   '海曙':[121.55,29.87],
            //   '江东':[121.57,29.87],
            //   '江北':[121.55,29.88],
            //   '北仑':[121.85,29.93],
            //   // '高新':[],
            //   // '东钱湖分局':[],
            //   // '大榭开发区':[],
            //   '镇海':[121.72,29.95],
            //   // '宁波杭州湾分局':[],
            //   '象山':[121.87,29.48],
            //   '宁海':[121.43,29.28],
            //   '鄞州':[121.53,29.83],
            //   '慈溪':[121.23,30.17],
            //   '奉化':[121.4,29.65],
            //   // '宁波契税征收管理中心':[],
            //   '丽水地区':[119.92, 28.45],
            //   '温州':[120.65,28.01],
            //   '洞头':[121.12,27.84],
            //   '乐清':[120.94,28.14],
            //   '永嘉':[120.68,28.16],
            //   '平阳':[120.55,27.68],
            //   '苍南':[120.36,27.53],
            //   '文成':[120.08,27.08],
            //   '泰顺':[119.7,27.57],
            //   '瑞安':[120.62,27.8],
            //   '湖州':[120.1,30.86],
            //   '德清':[119.97,30.57],
            //   '长兴':[119.9,31.02],
            //   '安吉':[119.68,30.68],
            //   '金华':[119.64,29.12],
            //   '永康':[120.02,28.92],
            //   '武义':[119.81,28.9],
            //   '义乌':[120.06,29.32],
            //   '浦江':[119.88,29.46],
            //   '磐安':[119.48,29.19],
            //   // '兰溪':[],
            //   '东阳':[120.23,120.23],
            //   '舟山':[122.2,30],
            //   '定海':[122.11,30.03],
            //   '普陀':[122.3,122.3],
            //   '岱山':[122.3,122.3],
            //   '嵊泗':[122.3,122.3],
            //   '台州':[121.43,28.68],
            //   '椒江':[121.44,28.67],
            //   '路桥':[121.38,28.58],
            //   '黄岩':[121.27,28.64],
            //   '临海':[121.13,28.8],
            //   '温岭':[121.36,28.36],
            //   '仙居':[120.73,28.85],
            //   '天台':[121.03,29.15],
            //   '三门':[121.38,29.11],
            //   '玉环':[121.23,28.14],
            //   '衢州':[118.87,28.93],
            //   '常山':[118.5,28.9],
            //   '江山':[118.61,28.74],
            //   '开化':[118.39,29.15],
            // }

            //测试markLine数据
            // {
            //   '嘉兴':[120.76, 30.77],
            //   '绍兴':[120.58, 30.01],
            //   '杭州':[120.19, 30.26],
            //   '上城区':[120.17,30.25],
            //   '下城区':[120.17,30.28],
            //   '江干区':[120.2	,30.27],
            //   '拱墅区':[120.13,30.32],
            //   '西湖区':[120.13,30.27],
            //   '滨江区':[120.2	,30.2 ],
            //   '萧山区':[120.27,30.17],
            //   '余杭区':[120.3	,30.42],
            //   '桐庐县':[119.67,29.8],
            //   '淳安县':[119.03,29.6],
            //   '建德':[119.28,29.48],
            //   '富阳':[119.95,30.05],
            //   '临安':[119.72,30.23],
            //   '宁波':[121.55,29.88],
            //   '丽水':[119.92, 28.45],
            //   '义乌':[120.06, 29.32],
            //   '余杭':[120.3,30.43],
            //   '温州':[120.65,28.01],
            //   '湖州':[120.1,30.86],
            //   '金华':[119.64,29.12],
            //   '舟山':[122.2,30],
            //   '台州':[121.43,28.68],
            //   '衢州':[118.87,28.93]
            // }

            //地图动画测试
            // var arrayObj = [];
            // for(var key in geoCoordflr){
            //   arrayObj.push(key);//将城市结果集所有key（城市名）压入arrayobj
            // }
            // timeTicket = setInterval(function (){
            //   var mydata=[];
            //   var aadata=[];//保存处理完成的结果集
            //   var str=',{data:[';//保存线性数据
            //   var strpont=',{data:[';//保存点状数据
            //   var number=Math.floor(Math.random()*5+1);//处理结果的数量，仅demo，实际可删 //产生的数据数量
            //   for(i=0, k={},l={};i<number;i++){
            //     var ronndnum=Math.floor(Math.random()*arrayObj.length);
            //     mydata=[{'name':arrayObj[ronndnum]},{'name':'杭州'}];
            //     aadata.push(mydata);
            //   }  //将数据压入aadata
            //   for(i=0;i<aadata.length;i++){
            //     str+='[{"name":"'+aadata[i][0].name+'"},{"name":"杭州"}],';
            //     //myChart.addMarkPoint(1,{data:[{name: '宁波'}]});
            //     strpont+='{name:"'+aadata[i][0].name+'"},';
            //   }
            //   // myChart.addMarkPoint(1,{data:[{name: '宁波'},{name: '杭州'}]});
            //   str=str.substring(0,(str.length-1))+']})';
            //   strpont=strpont.substring(0,(strpont.length-1))+']})'
            //   eval('myChart.addMarkPoint('+1+strpont);  //为index为1的系列添加点
            //   var t = setTimeout(function(){
            //         eval('myChart.addMarkLine('+1+str); //为index为1的系列添加线
            //         clearTimeout(t);
            //       }
            //       ,1000);
            //   var r = setTimeout(function(){//回收canvas上的所有线跟点。
            //     for(i=0;i<aadata.length;i++){
            //       eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 杭州")');
            //       eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
            //     }
            //     clearTimeout(r);
            //   },6000)
            // },2000)
        });  //center地图

}]);
app.factory('mainService',['$http','$q',function($http,$q){
    return{
        query: function (url,date) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url:url,
                // 'http://144.16.55.49:8088/gt3/dtzs/sssbdt'
                params:{
                    sssbtjsj: date
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

