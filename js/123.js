/**
 * @author : dingtianxiu
 * @date : 2016/4/5
 * @module :
 * @description :
 */
var citydata=[
  {name : '杭州市', value : 123213123.88,bfb:59},
  {name : '绍兴市', value : 12321313.88,bfb:5.9},
  {name : '湖州市', value : 12213123.88,bfb:5.9},
  {name : '嘉兴市', value : 123213123.88,bfb:5.9},
  {name : '温州市', value : 93213123.88,bfb:39},
  {name : '宁波市', value : 13213123.88,bfb:19},
  {name : '丽水市', value : 123213123.88,bfb:5.9},
  {name : '舟山市', value : 12313123.88,bfb:2.9},
  {name : '建德市', value : 123213123.88,bfb:1.9},
  {name : '台州市', value : 12321323.88,bfb:5.9},
  {name : '金华市', value : 12313123.88,bfb:3.9},
  {name : '衢州市', value : 12313123.88,bfb:3.9},

];
var app=angular.module("qsnsrdj",[]);
app.controller('ListCtrl',function($scope){
  var k=0
  for(i=0;i<citydata.length;i++){
    k+=citydata[i].value;
  }
  $scope.renshu=k;
  $scope.citydata=citydata;
})
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
    var myChart= echarts.init($('.leftBox')[0]);//jquery转换为dom对象
    var placeList= [
      {name:'嘉兴',geoCoord:[120.76, 30.77]},
      {name:'杭州',geoCoord:[120.19, 30.26]},
      {name: '上城区',geoCoord:[120.17,30.25]},
      {name: '下城区',geoCoord:[120.17,30.28]},
      {name: '江干区',geoCoord:[120.2,30.27]},
      {name: '拱墅区',geoCoord:[120.13,30.32]},
      {name:'西湖区',geoCoord:[120.13,30.27]},
      {name:'滨江区',geoCoord:[120.2,30.2 ]},
      {name:'萧山区',geoCoord:[120.27,30.17]},
      {name:'余杭区',geoCoord:[120.3,30.42]},
      {name:'桐庐县',geoCoord:[119.67,29.8]},
      {name:'淳安县',geoCoord:[119.03,29.6]},
      {name:'建德',geoCoord:[119.28,29.48]},
      {name:'宁波',geoCoord:[121.55,29.88]},
      {name:'丽水',geoCoord:[119.92,28.45]},
      {name:'义乌',geoCoord:[120.06,29.32]},
      {name:'温州',geoCoord:[120.65,28.01]},
      {name:'湖州',geoCoord:[120.1,30.86]},
      {name:'金华',geoCoord:[119.64,29.12]},
      {name:'舟山',geoCoord:[122.2,30]},
      {name:'台州',geoCoord:[121.43,28.68]},
      {name:'衢州',geoCoord:[118.87,28.93]},
      {name:'临安',geoCoord: [119.72,30.23]},
      {name:'淳安',geoCoord: [119.05,29.61]},
      {name:'镇海',geoCoord: [121.72,29.96]},
      {name:'温州',geoCoord: [120.65,28.01]},
      {name:'瓯海',geoCoord: [120.65,28.01]},
      {name:'永喜',geoCoord: [120.68,28.16]},
      {name:'洞头',geoCoord: [121.12,27.84]},
      {name:'平阳',geoCoord: [120.55,27.68]},
      {name:'泰顺',geoCoord: [119.7 ,27.57]},
      {name:'乐清',geoCoord: [120.94,28.14]},
      {name:'瑞安',geoCoord: [120.62,27.8 ]},
      {name:'文成',geoCoord: [120.08,27.58]},
      {name:'苍南',geoCoord: [120.36,27.53]},
      {name:'平湖',geoCoord: [121.02,30.7 ]},
      {name:'桐乡',geoCoord: [120.54,30.64]},
      {name:'安吉',geoCoord: [119.68,30.68]},
      {name:'嘉善',geoCoord: [120.92,30.84]},
      {name:'海盐',geoCoord: [120.92,30.53]},
      {name:'海宁',geoCoord: [120.69,30.53]},
      {name:'德清',geoCoord: [120.08,30.54]},
      {name:'长兴',geoCoord: [119.91,30.01]},
      {name:'定海',geoCoord: [122.11,30.03]},
      {name:'岱山',geoCoord: [122.2 ,30.26
      ]},      {name:'嵊四',geoCoord: [122.45,30.72]},
      {name:'普陀',geoCoord: [122.3 ,29.97 ]},
      {name:'鄞县',geoCoord: [121.56,29.86]},
      {name:'象山',geoCoord: [121.8 ,29.48
      ]},      {name:'奉化',geoCoord: [121.41,29.66]},
      {name:'慈溪',geoCoord: [121.23,30.18]},
      {name:'宁海',geoCoord: [121.42,29.3 ]},
      {name:'余姚',geoCoord: [121.16,30.04]},
      {name:'绍兴',geoCoord: [120.58,30.01]},
      {name:'新昌',geoCoord: [120.89,29.49]},
      {name:'诸暨',geoCoord: [120.23,29.71]},
      {name:'上虞',geoCoord: [120.87,30.03]},
      {name:'嵊县',geoCoord: [120.81,29.6 ]},
      {name:'椒江',geoCoord: [121.44,28.67]},
      {name:'临海',geoCoord: [121.13,28.8 ]},
      {name:'三门',geoCoord: [121.38,29.11]},
      {name:'温岭',geoCoord: [121.36,28.36]},
      {name:'仙居',geoCoord: [120.73,28.85]},
      {name:'天台',geoCoord: [121.03,29.15]},
      {name:'黄岩',geoCoord: [121.27,28.64]},
      {name:'玉环',geoCoord: [121.23,28.14]},
      {name:'青田',geoCoord: [120.28,28.45]},
      {name:'庆无',geoCoord: [119.06,27.61]},
      {name:'遂昌',geoCoord: [119.25,28.59]},
      {name:'缙云',geoCoord: [120.6 ,28.66]},
      {name:'云和',geoCoord: [119.56,28.12]},
      {name:'龙泉',geoCoord: [119.13,28.08]},
      {name:'松阳',geoCoord: [119.48,28.46]},
      {name:'浦江',geoCoord: [119.88,29.46]},
      {name:'东阳',geoCoord: [120.23,29.27]},
      {name:'武义',geoCoord: [119.81,28.9 ]},
      {name:'江山',geoCoord: [118.61,28.74]},
      {name:'开化',geoCoord: [118.39,29.15]},
      {name:'衢州',geoCoord: [118.88,28.97]},
      {name:'兰溪',geoCoord: [119.48,29.19]},
      {name:'永康',geoCoord: [120.02,28.92]},
      {name:'常山',geoCoord: [118.5 ,28.9]}];

    require('echarts/util/mapData/params').params.zj= {
      getGeoJson: function (callback) {
        // $.getJSON('../zhejiangv1.json', function (data) {
        //   // 压缩后的地图数据必须使用 decode 函数转换
        //   callback(require('echarts/util/mapData/params').decode(data));
        // })
        $.ajax({
          url: "../xml/32432.svg",
          dataType: 'xml',
          success: function(xml) {
            callback(xml)
          }
        });
      }
      //取得浙江省地图。。。没法调出二级。。。暂时放弃
    }
    //require('echarts/util/mapData/params').params.zj= {
    //  getGeoJson: function (callback) {
    //    $.ajax({
    //      url: "../xml/001.svg",
    //      dataType: 'xml',
    //      success: function(xml) {
    //        callback(xml)
    //      }
    //    });
    //  }
    //}
    //require('echarts/util/mapData/params').params.zj = {
    //  getGeoJson: function (callback) {
    //    $.getJSON('../zhejiangtext.json',callback);
    //  }
    //}
    option = {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: [
        'rgba(14, 241, 242, 0.3)',
        'rgba(37, 140, 249, 0.3)'
      ],
      title : {
        text: '虚构',
        subtext: '登记注册情况分布',
        x:'center',
        textStyle : {
          color: '#fff'
        }
      },
      legend: {
        orient: 'vertical',
        x:'left',
        data:['企业','个体'],
        textStyle : {
          color: '#fff'
        },
        selected: {
          '企业' : true,
          '个体' : true
        },
      },
      tooltip : {
        trigger: 'item',
        formatter: function (params) {
          var res=params.data.name+'<hr style="margin: 2% 0"/>登记注册用户户数：<span style="color: yellow">'+params.data.value+
            '<br/></span>占全省半分比:<span style="color: yellow">'+params.data.bfb+'</span>'
          return res;
        }
      },
      series : [
        {
          name: '个体',
          type: 'map',
          mapType: 'zj',
          roam: false,
          itemStyle:{
            normal:{
              borderColor:'rgba(100,149,237,1)',
              borderWidth:1.5,
              areaStyle:{
                color: 'rgba(30,31,109,0.3)'
              }
            },
            emphasis:{
              label:{textStyle:{color:'#2d2925'},show:false},
              borderColor:'rgba(200,249,137,0.3)',
              borderWidth:0.5,
              color:'rgba(200,249,137,0.3)'

            }
          },
          data :citydata,
          markPoint : {
            symbolSize: 2,
            large: true,
            effect : {
              show: true
            },
            data : (function(){
              var data = [];
              var len = 5000;
              var geoCoord
              while(len--) {
                geoCoord = placeList[len % placeList.length].geoCoord;
                data.push({
                  name : placeList[len % placeList.length].name + len,
                  value : 10,
                  geoCoord : [
                    geoCoord[0]+Math.random()*0.5-0.282,
                    geoCoord[1]+ Math.random()*0.5-0.212
                  ]
                })
              }
              return data;
            })()
          }
        },
        {
          name: '企业',
          type: 'map',
          mapType: 'zj',
          itemStyle:{
            normal:{
              borderColor:'rgba(100,149,237,1)',
              borderWidth:1.5,
              areaStyle:{
                color: 'rgba(30,31,109,0.3)'
              }
            },
            emphasis:{
              label:{textStyle:{color:'#2d2925'},show:false},
              borderColor:'rgba(200,249,137,0.3)',
              borderWidth:0.5,
              color:'rgba(200,249,137,0.3)'

            }
          },
          data :citydata,
          markPoint : {
            symbolSize: 3,
            large: true,
            effect : {
              show: true
            },
            data : (function(){
              var data = [];
              var len = 1500;
              var geoCoord
              while(len--) {
                geoCoord = placeList[len % placeList.length].geoCoord;
                data.push({
                  name : placeList[len % placeList.length].name + len,
                  value : 50,
                  geoCoord : [
                    geoCoord[0]+Math.random()*0.5-0.282,
                    geoCoord[1]+ Math.random()*0.5-0.212
                  ]
                })
              }
              return data;
            })()
          }
        },
        //{
        //  name: '企业',
        //  type: 'map',
        //  mapType: 'zj',
        //  roam: false,
        //  showLegendSymbol:false,
        //  itemStyle:{
        //    normal:{
        //      borderColor:'rgba(100,149,237,1)',
        //      borderWidth:1.5,
        //      areaStyle:{
        //        color: 'rgba(30,31,109,0.3)'
        //      }
        //    },
        //    emphasis:{
        //      label:{textStyle:{color:'#2d2925'},show:false},
        //      borderColor:'rgba(200,249,137,0.3)',
        //      borderWidth:0.5,
        //      color:'rgba(200,249,137,0.3)'
        //
        //    }
        //  },
        // data :citydata,
        //  markPoint : {
        //    symbol : 'diamond',
        //    symbolSize: 6,
        //    large: true,
        //    effect : {
        //      show: true
        //    },
        //    data : placeList
        //  }
        //}
      ]
    };
    myChart.setOption(option);
  });/**
 * @author : FuLouRong
 * @date : 2016/4/8
 * @module :
 * @description :
 */