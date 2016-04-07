/**
 * @author : FuLouRong
 * @date : 2016/3/22
 * @module :
 * @description :
 */
//这个不知道怎么不行，参考JavaScript模块化
/*         require.config({
 packages: [
 {
 name: 'echarts',
 location: '../js/src',
 main: 'echarts'
 },
 {
 name: 'zrender',
 location: '../js/zrender/src',
 main: 'zrender'
 }
 ]
 }); */
require.config({
  paths: {
    echarts: './js/src',
    zrender:'./js/zrender/src',
  }
});

require(
  [
    'echarts',
    'echarts/chart/map', // 使用柱状图就加载bar模块，按需加载
  ],
  function (echarts){
    var myChart= echarts.init(document.getElementById('main'));

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
    ]
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
    ]
    //var cityMap = {
    //  "杭州市": "330100",
    //  "宁波市": "330200",
    //  "温州市": "330300",
    //  "嘉兴市": "330400",
    //  "湖州市": "330500",
    //  "绍兴市": "330600",
    //  "金华市": "330700",
    //  "衢州市": "330800",
    //  "舟山市": "330900",
    //  "台州市": "331000",
    //  "丽水市": "331100"
    //};
    //var curIndx = 0;
    //var mapType = [];
    //var mapGeoData = require('echarts/util/mapData/params');
    require('echarts/util/mapData/params').params.zj = {
      getGeoJson: function (callback) {
        $.getJSON('zhejiang.json', function (data) {
          // 压缩后的地图数据必须使用 decode 函数转换
          callback(require('echarts/util/mapData/params').decode(data));
        });
      }


    }
    //for (var city in cityMap) {
    //  mapType.push(city);
    //  // 自定义扩展图表类型
    //  mapGeoData.params[city] = {
    //    getGeoJson: (function (c) {
    //      var geoJsonName = cityMap[c];
    //      return function (callback) {
    //        //        $.getJSON('/ECharts/js/geoJson/china-main-city/' + geoJsonName + '.json', callback);
    //        $.getJSON('geoJson/china-main-city/' + geoJsonName + '.json', callback);
    //      }
    //    })(city)
    //  }
    //}

    //var ecConfig = require('echarts/config');
    //var zrEvent = require('zrender/tool/event');
    var effect = {
      show: true,
      scaleSize: require('zrender/tool/env').canvasSupported ? 1 : 2,
      loop:false,
      period: 10,             // 运动周期，无单位，值越大越慢
      color: '#fd6a30',
      shadowColor: 'rgba(220,220,220,0.1)',
      opacity: 0.4,
      shadowBlur :2
    };

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
    };
    option = {
      color: ['rgba(30,144,255,1)','lime'],
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
              borderColor:'rgba(100,149,237,1)',
              borderWidth:0.5,
              areaStyle:{
                color: '#1b1b1b'
              }
            },
            emphasis:{
              label:{textStyle:{color:'#2d2925'},show:false},
              borderColor:'rgba(200,249,137,1)',
              borderWidth:0.5,
              color:'#fa8201',

            }
          },
          data:[],
          markLine : {
            symbol: ['arrow', 'arrow'],
            symbolSize : 1,
            effect :{ show: false,
              period: 30,             // 运动周期，无单位，值越大越慢
              color: '#fff',
              shadowColor: 'rgba(220,220,220,0.4)',
              opacity: 0.1,
              shadowBlur : 1},
            itemStyle : itemStyle(0),
            smooth:true,
            data : bluedata
          }
        },
        {
          name: '浙江数据',
          type: 'map',
          mapType: 'zj',
          clickable:false,
          itedmStyle:{
            normal:{
              borderColor:'rgba(100,149,237,1)',
              borderWidth:2,
              areaStyle:{
                color: '#1b1b1b'
              }
            }
          },
          data:[],
          markLine : {
            symbol: ['circle', 'arrow'],
            symbolSize : 1,
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
            '建德市':[119.28,29.48],
            '富阳市':[119.95,30.05],
            '临安市':[119.72,30.23],
            '宁波市':[121.55,29.88],
            '丽水':[119.92, 28.45],
            '义乌':[120.06, 29.32],
            '余杭':[120.3,30.43],
            '宁波':[121.56,29.86],
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
      '建德市':[119.28,29.48],
      '宁波市':[121.55,29.88],
      '丽水':[119.92, 28.45],
      '义乌':[120.06, 29.32],
      '宁波':[121.56,29.86],
      '温州':[120.65,28.01],
      '湖州':[120.1,30.86],
      '金华':[119.64,29.12],
      '舟山':[122.2,30],
      '台州':[121.43,28.68],
      '衢州':[118.87,28.93]
    };
    var arrayObj = [];
    for(var key in geoCoordflr){
      arrayObj.push(key);
    }

    timeTicket = setInterval(function (){
      var mydata=[];
      var aadata=[];
      var number=Math.floor(Math.random()*5+1);
      for(i=0, k={},l={};i<number;i++){
        var ronndnum=Math.floor(Math.random()*arrayObj.length);
        mydata=[{'name':arrayObj[ronndnum]},{'name':'绍兴'}];
        aadata.push(mydata);
      }
      for(i=0;i<aadata.length;i++){
        var str=',{data:[[{"name":"'+aadata[i][0].name+'"},{"name":"绍兴"}]]})'
        eval('myChart.addMarkLine('+1+str);
      }
      setTimeout(function(){
        for(i=0;i<aadata.length;i++){
          eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 绍兴")');
        }
      },1000)
    },1000)

  }
);
require(
  [
    'echarts',
    'echarts/chart/bar',
    'echarts/chart/line'  // 使用柱状图就加载bar模块，按需加载
  ],
  function (echarts){
    var bing= echarts.init(document.getElementById('bing'));
    var option = {
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['在线运营', '车辆数']
      },
      toolbox: {
        show : false,//工具栏
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      dataZoom : {
        show : false,
        start : 0,
        end : 100
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : true,
          data : (function (){
            var now = new Date();
            var res = [];
            var len = 10;
            while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
              now = new Date(now - 2000);
            }
            return res;
          })()
        },
        {
          type : 'category',
          boundaryGap : true,
          data : (function (){
            var res = [];
            var len = 10;
            while (len--) {
              res.push(len + 1);
            }
            return res;
          })()
        }
      ],
      yAxis : [
        {
          type : 'value',
          scale: true,
          name : '在线率',
          boundaryGap: [0, 0]
        },
        {
          type : 'value',
          scale: true,
          name : '车辆数',
          boundaryGap: [0, 0]
        }
      ],
      series : [
        {
          name:'车辆数',
          type:'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data:(function (){
            var res = [];
            var len = 10;
            while (len--) {
              res.push(Math.round(Math.random() * 1000));
            }
            return res;
          })()
        },
        {
          name:'在线车辆',
          type:'line',
          data:(function (){
            var res = [];
            var len = 10;
            while (len--) {
              res.push((Math.random()*10 + 5).toFixed(1) - 0);
            }
            return res;
          })()
        }
      ]
    };;
    bing.setOption(option);

    var lastData = 11;
    var axisData;
    var timeTicket;
    clearInterval(timeTicket);
    timeTicket = setInterval(function (){
      lastData += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
      lastData = lastData.toFixed(1) - 0;
      axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

      // 动态数据接口 addData
      bing.addData([
        [
          0,        // 系列索引
          Math.round(Math.random() * 1000), // 新增数据
          true,     // 新增数据是否从队列头部插入
          false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        ],
        [
          1,        // 系列索引
          lastData, // 新增数据
          false,    // 新增数据是否从队列头部插入
          false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
          axisData  // 坐标轴标签
        ]
      ]);
    }, 5100);

  }
)
require(
  [
    'echarts',
    'echarts/chart/bar',
    'echarts/chart/pie' ,
    'echarts/chart/line'  // 使用柱状图就加载bar模块，按需加载
  ],
  function(echarts){
    var bar= echarts.init(document.getElementById('bar'));
    option = {
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient : 'vertical',
        x : 'left',
        data:['其他','企业所得税','营业税','契税','个人所得税']
      },
      toolbox: {
        show : true,
        orient : 'vertical',
        y : 'right',
        feature : {
          mark : {show: false},
          magicType : {show: true, type: ['stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      calculable : true,
      series : [
        {
          name:'税种来源',
          type:'pie',
          radius : '55%',
          center: ['50%', '38%'],
          itemStyle : {
            normal : {
              label : {
                textStyle:{color:'#e43c93'},
                position : 'inner',
                formatter : function (params) {
                  return (params.percent - 0).toFixed(0) + '%'
                }

              },
              labelLine : {
                show : false
              }
            }},
          data:[
            {value:335, name:'其他'},
            {value:610, name:'企业所得税'},
            {value:734, name:'营业税'},
            {value:3255, name:'契税'},
            {value:3548, name:'个人所得税'}
          ]
        }
      ]
    };

    option2 = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type: 'shadow'
        }
      },
      legend: {
        data:['其他','企业所得税','营业税','契税','个人所得税']
      },
      calculable : false,
      xAxis : [
        {
          type : 'category',
          data : ['2009','2010','2011','2012','2013','2014','2015']
        }
      ],
      yAxis : [
        {
          type : 'value',
          splitArea : {show : true}
        }
      ],
      grid: {
        x2:40
      },
      series : [
        {
          name:'其他',
          type:'bar',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'企业所得税',
          type:'bar',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'营业税',
          type:'bar',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'契税',
          type:'bar',
          stack: '总量',
          data:[150, 232, 201, 354, 490, 330, 410]
        },
        {
          name:'个人所得税',
          type:'bar',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    var myChart2 = echarts.init(document.getElementById('bar2'));
    myChart2.setOption(option2);
    bar.setOption(option);
    bar.connect(myChart2);
    myChart2.connect(bar);

    setTimeout(function (){
      window.onresize = function () {
        bar.resize();
        myChart2.resize();
      }
    },200)
  }
)
