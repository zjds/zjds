/**
 * Created by dingtianxiu on 2016/4/20.
 * 实时申报情况监控
 */

var app = angular.module("sssbqkjk",[]);
app.controller("sssbqkjkCtrl",[function(){

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
            '嘉兴':[120.76, 30.77],
            '杭州':[120.19, 30.26],
            //'上城区':[120.17,30.25],
            //'下城区':[120.17,30.28],
            //'江干区':[120.2	,30.27],
            //'拱墅区':[120.13,30.32],
            //'西湖区':[120.13,30.27],
            //'滨江区':[120.2	,30.2 ],
            //'萧山区':[120.27,30.17],
            //'余杭区':[120.3	,30.42],
            //'桐庐县':[119.67,29.8],
            //'淳安县':[119.03,29.6],
            '建德':[119.28,29.48],
            '宁波':[121.55,29.88],
            '丽水':[119.92, 28.45],
            '义乌':[120.06, 29.32],
            '温州':[120.65,28.01],
            '湖州':[120.1,30.86],
            '金华':[119.64,29.12],
            '舟山':[122.2,30],
            '台州':[121.43,28.68],
            '衢州':[118.87,28.93]
        };
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
                            scaleSize:20,
                            shadowBlur:20
                        },
                        data :[{name:"杭州"}],
                        geoCoord: geoCoordflr
                    },
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
                    geoCoord: {
                        '嘉兴':[120.76, 30.77],
                        '绍兴':[120.58, 30.01],
                        '杭州':[120.19, 30.26],
                        '上城区':[120.17,30.25],
                        '下城区':[120.17,30.28],
                        '江干区':[120.2	,30.27],
                        '拱墅区':[120.13,30.32],
                        '西湖区':[120.13,30.27],
                        '滨江区':[120.2	,30.2 ],
                        '萧山区':[120.27,30.17],
                        '余杭区':[120.3	,30.42],
                        '桐庐县':[119.67,29.8],
                        '淳安县':[119.03,29.6],
                        '建德':[119.28,29.48],
                        '富阳':[119.95,30.05],
                        '临安':[119.72,30.23],
                        '宁波':[121.55,29.88],
                        '丽水':[119.92, 28.45],
                        '义乌':[120.06, 29.32],
                        '余杭':[120.3,30.43],
                        '温州':[120.65,28.01],
                        '湖州':[120.1,30.86],
                        '金华':[119.64,29.12],
                        '舟山':[122.2,30],
                        '台州':[121.43,28.68],
                        '衢州':[118.87,28.93]
                    }
                }
            ]
        };
        myChart.setOption(option);
        var arrayObj = [];
        for(var key in geoCoordflr){
            arrayObj.push(key);//将城市结果集所有key（城市名）压入arrayobj
        }
        var XMLHttpReq;
        function createXMLHttpRequest() {
            try {
                XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//IE高版本创建XMLHTTP
            }
            catch(E) {
                try {
                    XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");//IE低版本创建XMLHTTP
                }
                catch(E) {
                    XMLHttpReq = new XMLHttpRequest();//兼容非IE浏览器，直接创建XMLHTTP对象
                }
            }

        }
        function sendAjaxRequest(url) {
            createXMLHttpRequest();                                //创建XMLHttpRequest对象
            XMLHttpReq.open("post", url, true);
            XMLHttpReq.onreadystatechange = processResponse; //指定响应函数
            XMLHttpReq.send(null);
        }
        //回调函数
        function processResponse() {
            if (XMLHttpReq.readyState == 4) {
                if (XMLHttpReq.status == 200) {
                    var text = XMLHttpReq.responseText;
                    console.log(text);
                    /**
                     *实现回调
                     */
                }
            }

        }
        timeTicket = setInterval(function (){
            var mydata=[];
            var aadata=[];//保存处理完成的结果集
            var str=',{data:[';//保存线性数据
            var strpont=',{data:[';//保存点状数据
            var number=Math.floor(Math.random()*5+1);//处理结果的数量，仅demo，实际可删
            for(i=0, k={},l={};i<number;i++){  //随机产生point
                var ronndnum=Math.floor(Math.random()*arrayObj.length);
                mydata=[{'name':arrayObj[ronndnum]},{'name':'杭州'}];
                aadata.push(mydata);
            }
            for(i=0;i<aadata.length;i++){
                str+='[{"name":"'+aadata[i][0].name+'"},{"name":"杭州"}],';
                //myChart.addMarkPoint(1,{data:[{name: '宁波'}]});
                strpont+='{name:"'+aadata[i][0].name+'"},';
            }
            // myChart.addMarkPoint(1,{data:[{name: '宁波'},{name: '杭州'}]});
            str=str.substring(0,(str.length-1))+']})';
            strpont=strpont.substring(0,(strpont.length-1))+']})'
            eval('myChart.addMarkPoint('+1+strpont);
            var t = setTimeout(function(){
                    eval('myChart.addMarkLine('+1+str);
                    clearTimeout(t);
                }
                ,1000);
            var r = setTimeout(function(){//回收canvas上的所有线跟点。
                for(i=0;i<aadata.length;i++){
                    eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 杭州")');
                    eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
                    clearTimeout(r);
                }
            },6000)
        },2000)
    });  //center地图