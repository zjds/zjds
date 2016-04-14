/**
 * @author : FuLouRong
 * @date : 2016/3/24
 * @module :
 * @description :
 */
var app=angular.module("zjdx",[]);
app.controller("swdxCtrl",function($scope){
  $scope.djhs=0;
  $scope.bmsr=0;
  $scope.shuishou=0;
  $scope.feiss=0;
  var citydat=[{ 'name':'嘉兴','value':0,'updown':"","index":0,"varnum":0},
    {'name':'杭州','value':0,'updown':"","index":0,"varnum":0},
    {'name':'宁波','value':0,'updown':"","index":0,"varnum":0},
    {'name':'丽水','value':0,'updown':"","index":0,"varnum":0},
    {'name':'绍兴','value':0,'updown':"","index":0,"varnum":0},
    {'name':'温州','value':0,'updown':"","index":0,"varnum":0},
    {'name':'湖州','value':0,'updown':"","index":0,"varnum":0},
    {'name':'金华','value':0,'updown':"","index":0,"varnum":0},
    {'name':'舟山','value':0,'updown':"","index":0,"varnum":0},
    {'name':'台州','value':0,'updown':"","index":0,"varnum":0},
    {'name':'衢州','value':0,'updown':"","index":0,"varnum":0}];
  $scope.frist=citydat[0];
  $scope.second=citydat[1];
  $scope.third=citydat[2];
  $scope.ten1=citydat[3];
  $scope.ten2=citydat[4];
  $scope.ten3=citydat[5];
  $scope.ten4=citydat[6];
  $scope.ten5=citydat[7];
  $scope.ten6=citydat[8];
  $scope.ten7=citydat[9];
  $scope.ten8=citydat[10];
  timeTicket = setInterval(function (){
    var k1=Math.floor(Math.random()*1000+500);
    var k2=Math.floor(Math.random()*200000+100000);
    var k3=Math.floor(Math.random()*100000+50000);
    var k4=Math.floor(Math.random()*60000+20000);
    $scope.int1=k1;
    $scope.int2=k2;
    $scope.int3=k3;
    $scope.int4=k4;
    $scope.$digest()
    $(".int").fadeIn(10);
    $scope.djhs+=k1;
    $scope.bmsr+=k2;
    $scope.shuishou+=k3;
    $scope.feiss+=k4;
    $(".int").fadeOut(2000);
    setTimeout(function(){
      for(i=0;i<citydat.length;i++){
        var k=Math.floor(Math.random()*100000+1);
        citydat[i].value+=k;
        citydat[i].index=i;
      }
      var newdata=citydat.sort(by("value"));
      $scope.frist=newdata[0];
      //$scope.frist=newdata[0];
      // function xyz(item){
      //    for(i=0;i<newdata.length;i++) {
      //      if (newdata[i].index>item.index){
      //        newdata[i].updown="↑";
      //        newdata[i].varnum=newdata[i].index-item.index
      //      }else if(newdata[i].index>item.index){
      //        newdata[i].updown="↓";
      //        newdata[i].varnum=item.index-newdata[i].index
      //      }
      //      else {
      //        newdata[i].updown="";
      //        newdata[i].varnum=0;
      //      }
      //    }
      //    }
      function x(){
        if($scope.frist.index==0){
          $scope.frist.updown="";
          return 0;
        }else {
          $scope.frist.updown="↑";
          return $scope.frist.index;
        }    };
      function y(){
        if($scope.second.index==1){
          $scope.second.updown="";
          return 0;
        }else if($scope.second.index==0) {
          $scope.second.updown="↓";

          $(".var2").css("color","#2cf80b");
          return 1;
        }else{
          $scope.second.updown="↑";
          $(".var2").css("color","#e72a0f");
          return $scope.second.index-1;
        }
      };
      function z(){
        var k=0;
        if($scope.third.index==0){
          $scope.third.updown="↓";
          $(".var3").css("color","#2cf80b");
          return 2
        }else if($scope.third.index==2) {
          $scope.third.updown="";
          return 0
        }else if($scope.third.index==1){
          $scope.third.updown="↓";
          $(".var3").css("color","#2cf80b");
          return 1;
        }else{
          $scope.third.updown="↑";
          $(".var3").css("color","#e72a0f");
          return $scope.third.index-2;
        }
      };
      $scope.frist.varnum=x();
      $scope.second=newdata[1];
      $scope.second.varnum=y();
      $scope.third=newdata[2];
      $scope.third.varnum=z();
      $scope.ten1=newdata[3];
      $scope.ten2=newdata[4];
      $scope.ten3=newdata[5];
      $scope.ten4=newdata[6];
      $scope.ten5=newdata[7];
      $scope.ten6=newdata[8];
      $scope.ten7=newdata[9];
      $scope.ten8=newdata[10];
      $scope.$digest();},2010)
  },3000)
})
//以上为angularjs处理的数据
require.config({
  paths: {
    echarts: './js/src',
    zrender:'./js/zrender/src',
  }
});
require(
  [
    'echarts',
    'echarts/chart/line'
  ],
  function (echarts){
    var lineChart= echarts.init(document.getElementById('linecavs'));
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
      tooltip: {
        trigger: 'axis',
        padding:3,
        formatter: function (params, ticket, callback) {
          params=params.sort(by("seriesIndex"));//排序
          var res = params[0].name+'年<br/>';//抬头
          for(i=0;i<params.length;i++){
            if((params[i].value!='-')&&(params[i].name!='15')){
            res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
          }else if((params[i].name=='15')&&(i%2!=0)){
              res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
            }
          }

            setTimeout(function (){callback(ticket, res);}, 300);
            return '计算中...';
        }
      },
      legend: {
        textStyle:{
          color:"#ffffff"
        },
        data:['地税组织收入','税收收入','非税收入','社保基金收入']
      },
      grid: {
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
            fontSize:12,
            fontWeight:"normal"
          },
        },
        splitLine:{
          show:false
        },
          data: ['09','10','11','12','13','14','15','16']
      },
      yAxis: {
        type: 'value',
        name:'亿元',
        axisLabel:{
          textStyle:{
            color:"#2669ce",
            fontSize:12,
            fontWeight:"normal"
          },
        },
        splitLine:{
          lineStyle:{
            color:'#073b83'
          }
        },
      },
      series: [
        {
          name:'社保基金收入',
          type:'line',
          stack: '',
          data:sbjjsr
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
          data:['-','-','-','-','-','-',sbjjsr[sbjjsr.length-2],(sbjjsr[sbjjsr.length-2].value*1.2).toFixed(2)]
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
          data:['-','-','-','-','-','-',fssr[fssr.length-2],(fssr[fssr.length-2].value*1.2).toFixed(2)]
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
          data:['-','-','-','-','-','-',sssr[sssr.length-2],(sssr[sssr.length-2].value*1.2).toFixed(2)]
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
          data:['-','-','-','-','-','-',dszzsr[dszzsr.length-2],(dszzsr[dszzsr.length-2].value*1.2).toFixed(2)]
        },
    ]
    };
    lineChart.setOption(option);
  });
require(
  [
    'echarts',
    'echarts/chart/map',
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
        $.getJSON('zhejiang.json', function (data) {
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
      color: '#ecfa0b',
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
              borderColor:'rgba(200,249,137,1)',
              borderWidth:0.5,
              color:'#fa8201'

            }
          },
          data:[],
          markPoint : {
            symbol: 'circle',
            symbolSize:2,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            itemStyle: {
              normal: {
                borderColor: '#ff0000',
                borderWidth: 5,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#1e90ff',
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
              scaleSize:12,
              shadowBlur:20
            },
            data :[{name:"绍兴"}],
            geoCoord: geoCoordflr
          },
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
          markPoint : {
            symbol: 'circle',
            symbolSize: 8,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            itemStyle: {
              normal: {
                borderColor: '#35f326',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#1e90ff',
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
    timeTicket = setInterval(function (){
      var mydata=[];
      var aadata=[];//保存处理完成的结果集
      var str=',{data:[';//保存线性数据
      var strpont=',{data:[';//保存点状数据
      var number=Math.floor(Math.random()*10+1);//处理结果的数量，仅demo，实际可删
      for(i=0, k={},l={};i<number;i++){
        var ronndnum=Math.floor(Math.random()*arrayObj.length);
        mydata=[{'name':arrayObj[ronndnum]},{'name':'绍兴'}];
        aadata.push(mydata);
      }
      for(i=0;i<aadata.length;i++){
        str+='[{"name":"'+aadata[i][0].name+'"},{"name":"绍兴"}],';
        //myChart.addMarkPoint(1,{data:[{name: '宁波'}]});
       strpont+='{name:"'+aadata[i][0].name+'"},';
      }
     // myChart.addMarkPoint(1,{data:[{name: '宁波'},{name: '杭州'}]});
      str=str.substring(0,(str.length-1))+']})';
      strpont=strpont.substring(0,(strpont.length-1))+']})'
      eval('myChart.addMarkPoint('+1+strpont);
      setTimeout(function(){
          eval('myChart.addMarkLine('+1+str);
      }
      ,1000);
      setTimeout(function(){//回收canvas上的所有线跟点。
        for(i=0;i<aadata.length;i++){
          eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 绍兴")');
          eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
        }
      },4000)
    },2000)
  });
require(
  [
    'echarts',
    'echarts/chart/line',
    'echarts/chart/bar'
  ],
  function (echarts) {
  var rightChart1 = echarts.init(document.getElementById('rightcavs1'));
    option = {
      tooltip : {
        trigger: 'axis'
      },
      calculable : false,
      legend: {
        textStyle:{
          color:"#ffffff"
        },
        data:['登记数','注销数','有效数']
      },
      grid:{
        borderWidth:0
      },
      xAxis : [
        {
          type : 'category',
          axisLabel:{
            textStyle:{
              color:"#2669ce",
              fontSize:12,
              fontWeight:"normal"
            },
          },
          splitLine:{
            show:false
          },
          data : ['09','10','11','12','13','14','15']
        }
      ],
      yAxis : [
        {
          type : 'value',
          name : '万',
          axisLabel : {
            formatter: '{value}',
            textStyle: {
              color: "#2669ce",
              fontSize: 12,
              fontWeight: "normal"
            }
          },
          splitLine:{
            show:false
          },
        },
        {
          type : 'value',
          name : '',
          axisLine:{
            show:false
          },
          axisLabel : {
            formatter: ''
          },
          splitLine:{
            lineStyle:{
                color:'#073b83'
            }
          },
        }
      ],
      series : [

        {
          name:'登记数',
          itemStyle: {
            normal: {
              color:'#4169fe'}
        },

        type:'bar',
          data:[40.9917,46.4082, 50.7123, 46.6791, 56.4596, 56.9835, 57.1271]
        },
        {
          name:'注销数',
          itemStyle: {
            normal: {
              color:'#17c9f7'}
          },
          type:'bar',
          data:[21.3092, 18.2854, 24.5629, 17.4689, 17.4254, 19.5880, 17.0983]
        },
        {
          name:'有效数',
          itemStyle: {
            normal: {
              color:'#edd734'}
          },

          type:'line',
          yAxisIndex: 1,
          data:[19.6825, 28.1228, 26.1494, 29.2102, 39.0342, 37.3955, 40.0288]
        }
      ]
    };
    rightChart1.setOption(option);
  });
require(
  [
    'echarts',
    'echarts/chart/pie',

  ],
  function(echarts){
    var right2=echarts.init(document.getElementById('rightcavs2'));

   // var idx = 1;
    //{value: idx * 128 + 80,  name:'个人所得税'},
    var s2009=[];
    var s2010=[];
    var s2011=[];
    var s2012=[];var s2013=[]; var s2014=[]; var s2015=[];
    //算出其他数据
    sjjson.s2009.bsj=parseFloat(sjjson.s2009.zys)+parseFloat(sjjson.s2009.tdsys)+parseFloat(sjjson.s2009.cjs)+
      parseFloat(sjjson.s2009.yhs)+parseFloat(sjjson.s2009.tdzzs)+parseFloat(sjjson.s2009.fcs)+
      parseFloat(sjjson.s2009.ccs)+parseFloat(sjjson.s2009.yys1)+parseFloat(sjjson.s2009.gdzys)+
      parseFloat(sjjson.s2009.ddzctjs)+parseFloat(sjjson.s2009.qt)+parseFloat(sjjson.s2009.gdzys);
    sjjson.s2010.bsj=parseFloat(sjjson.s2010.zys)+parseFloat(sjjson.s2010.tdsys)+parseFloat(sjjson.s2010.cjs)+
      parseFloat(sjjson.s2010.yhs)+parseFloat(sjjson.s2010.tdzzs)+parseFloat(sjjson.s2010.fcs)+
      parseFloat(sjjson.s2010.ccs)+parseFloat(sjjson.s2010.yys1)+parseFloat(sjjson.s2010.gdzys)+
      parseFloat(sjjson.s2010.ddzctjs)+parseFloat(sjjson.s2010.qt)+parseFloat(sjjson.s2010.gdzys);
    sjjson.s2011.bsj=parseFloat(sjjson.s2011.zys)+parseFloat(sjjson.s2011.tdsys)+parseFloat(sjjson.s2011.cjs)+
      parseFloat(sjjson.s2011.yhs)+parseFloat(sjjson.s2011.tdzzs)+parseFloat(sjjson.s2011.fcs)+
      parseFloat(sjjson.s2011.ccs)+parseFloat(sjjson.s2011.yys1)+parseFloat(sjjson.s2011.gdzys)+
      parseFloat(sjjson.s2011.ddzctjs)+parseFloat(sjjson.s2011.qt)+parseFloat(sjjson.s2011.gdzys);
    sjjson.s2012.bsj=parseFloat(sjjson.s2012.zys)+parseFloat(sjjson.s2012.tdsys)+parseFloat(sjjson.s2012.cjs)+
      parseFloat(sjjson.s2012.yhs)+parseFloat(sjjson.s2012.tdzzs)+parseFloat(sjjson.s2012.fcs)+
      parseFloat(sjjson.s2012.ccs)+parseFloat(sjjson.s2012.yys1)+parseFloat(sjjson.s2012.gdzys)+
      parseFloat(sjjson.s2012.ddzctjs)+parseFloat(sjjson.s2012.qt)+parseFloat(sjjson.s2012.gdzys);
    sjjson.s2013.bsj=parseFloat(sjjson.s2013.zys)+parseFloat(sjjson.s2013.tdsys)+parseFloat(sjjson.s2013.cjs)+
      parseFloat(sjjson.s2013.yhs)+parseFloat(sjjson.s2013.tdzzs)+parseFloat(sjjson.s2013.fcs)+
      parseFloat(sjjson.s2013.ccs)+parseFloat(sjjson.s2013.yys1)+parseFloat(sjjson.s2013.gdzys)+
      parseFloat(sjjson.s2013.ddzctjs)+parseFloat(sjjson.s2013.qt)+parseFloat(sjjson.s2013.gdzys);
    sjjson.s2014.bsj=parseFloat(sjjson.s2014.zys)+parseFloat(sjjson.s2014.tdsys)+parseFloat(sjjson.s2014.cjs)+
      parseFloat(sjjson.s2014.yhs)+parseFloat(sjjson.s2014.tdzzs)+parseFloat(sjjson.s2014.fcs)+
      parseFloat(sjjson.s2014.ccs)+parseFloat(sjjson.s2014.yys1)+parseFloat(sjjson.s2014.gdzys)+
      parseFloat(sjjson.s2014.ddzctjs)+parseFloat(sjjson.s2014.qt)+parseFloat(sjjson.s2014.gdzys);
    sjjson.s2015.bsj=parseFloat(sjjson.s2015.zys)+parseFloat(sjjson.s2015.tdsys)+parseFloat(sjjson.s2015.cjs)+
      parseFloat(sjjson.s2015.yhs)+parseFloat(sjjson.s2015.tdzzs)+parseFloat(sjjson.s2015.fcs)+
      parseFloat(sjjson.s2015.ccs)+parseFloat(sjjson.s2015.yys1)+parseFloat(sjjson.s2015.gdzys)+
      parseFloat(sjjson.s2015.ddzctjs)+parseFloat(sjjson.s2015.qt)+parseFloat(sjjson.s2015.gdzys);
    s2009.push({value:parseFloat(sjjson.s2009.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2009.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2009.qs,2),name:'契税'},{value:parseFloat(sjjson.s2009.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2009.bsj,2),name:'其他'});
    s2010.push({value:parseFloat(sjjson.s2010.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2010.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2010.qs,2),name:'契税'},{value:parseFloat(sjjson.s2010.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2010.bsj,2),name:'其他'});
    s2011.push({value:parseFloat(sjjson.s2011.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2011.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2011.qs,2),name:'契税'},{value:parseFloat(sjjson.s2011.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2011.bsj,2),name:'其他'})
    s2012.push({value:parseFloat(sjjson.s2012.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2012.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2012.qs,2),name:'契税'},{value:parseFloat(sjjson.s2012.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2012.bsj,2),name:'其他'})
    s2013.push({value:parseFloat(sjjson.s2013.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2013.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2013.qs,2),name:'契税'},{value:parseFloat(sjjson.s2013.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2013.bsj,2),name:'其他'})
    s2014.push({value:parseFloat(sjjson.s2014.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2014.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2014.qs,2),name:'契税'},{value:parseFloat(sjjson.s2014.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2014.bsj,2),name:'其他'})
    s2015.push({value:parseFloat(sjjson.s2015.gesds,2),name:'个人所得税'},{value:parseFloat(sjjson.s2015.qysds,2),name:'企业所得税'},
      {value:parseFloat(sjjson.s2015.qs,2),name:'契税'},{value:parseFloat(sjjson.s2015.yys,2),name:'营业税'},
      {value:parseFloat(sjjson.s2015.bsj,2),name:'其他'})
    for(i=0;i<s2009.length;i++){
      s2009[i].value=(s2009[i].value/100000000).toFixed(2);
      s2010[i].value=(s2010[i].value/100000000).toFixed(2);
      s2011[i].value=(s2011[i].value/100000000).toFixed(2);
      s2012[i].value=(s2012[i].value/100000000).toFixed(2);
      s2013[i].value=(s2013[i].value/100000000).toFixed(2);
      s2014[i].value=(s2014[i].value/100000000).toFixed(2);
      s2015[i].value=(s2015[i].value/100000000).toFixed(2);
    }
    var viewdata=[];
    var newname="个人所得税";
    var dataIndex=0;
    viewdata.push(s2009[dataIndex].value,s2010[dataIndex].value,s2011[dataIndex].value,
      s2012[dataIndex].value,s2013[dataIndex].value,s2014[dataIndex].value,s2015[dataIndex].value);
    option = {
      timeline : {
        x:0,//左侧距离
        controlStyle:{
          normal:{
            color:'#fff'
          }
        },
        data : [
          '2009','2010', '2011', '2012', '2013','2014',
          { name:'2015', symbol:'emptyStar6', symbolSize:8 },
        ],
        autoPlay:true,//自动播放
        label : {
          textStyle:{
            color:'#2669ce'
          },
          formatter : function(s) {
            return s.slice(0, 7);
          }
        },
      },
      options : [
        {
          title : {
          },
          tooltip : {
            trigger: 'item',
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient:'vertical',
            x:'left',
            textStyle:{
              color:"#ffffff"
            },
            data:['个人所得税','企业所得税','契税','营业税','其他']
          },
          toolbox: {
            show : false,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                  funnel: {
                    x: '25%',
                    width: '50%',
                    funnelAlign: 'left',
                    max: 1700
                  }
                }
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          series : [
            {
              name:'税收比',
              type:'pie',
              center: ['50%', '45%'],
              radius: '50%',
              itemStyle : {
                normal: {
                  label: {
                    //position: 'outer',
                    formatter: function (params) {
                      return (params.percent - 0).toFixed(2) + '%'
                    }
                  }
                }
              },
              data:s2009
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2010
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2011
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2012
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2013
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2014
            }
          ]
        },
        {
          series : [
            {
              name:'税收比',
              type:'pie',
              data:s2015
            }
          ]
        },
      ]
    };
    right2.setOption(option);
    var myChart2=echarts.init(document.getElementById('rightcavs3'));
    option2 = {
      tooltip : {
        trigger: 'axis'
      },
      calculable : false,
      grid:{
        borderWidth:0
      },
      xAxis : [
        {
          type : 'category',
          axisLabel:{
            textStyle:{
              color:"#2669ce",
              fontSize:12,
              fontWeight:"normal"
            },
          },
          splitLine:{
            show:false
          },
          data : ['09','10','11','12','13','14','15']
        }
      ],
      yAxis : [
        {
          type : 'value',
          name : '亿元',
          axisLabel : {
            formatter: '{value}',
            textStyle: {
              color: "#2669ce",
              fontSize: 12,
              fontWeight: "normal"
            }
          },
          splitLine:{
            show:false
          },
        },
      ],
      series : [
        {
          name:newname,
          itemStyle: {
            normal: {
              color:'#4169fe'}
          },
          type:'bar',
          data:viewdata
        }
      ]
    };
    setTimeout(function(){
      myChart2.setOption(option2);
    },800)

    right2.on('click', function (param) {
     newname=param.name;
      dataIndex=param.dataIndex;
     viewdata=[s2009[dataIndex].value,s2010[dataIndex].value,s2011[dataIndex].value,s2012[dataIndex].value,s2013[dataIndex].value,s2014[dataIndex].value,s2015[dataIndex].value];
      option2 = {
        tooltip : {
          trigger: 'axis'
        },
        calculable : false,
        grid:{
          borderWidth:0
        },
        xAxis : [
          {
            type : 'category',
            axisLabel:{
              textStyle:{
                color:"#2669ce",
                fontSize:12,
                fontWeight:"normal"
              },
            },
            splitLine:{
              show:false
            },
            data : ['09','10','11','12','13','14','15']
          }
        ],
        yAxis : [
          {
            type : 'value',
            name : '亿元',
            axisLabel : {
              formatter: '{value}',
              textStyle: {
                color: "#2669ce",
                fontSize: 12,
                fontWeight: "normal"
              }
            },
            splitLine:{
              show:false
            },
          },
        ],
        series : [
          {
            name:newname,
            itemStyle: {
              normal: {
                color:'#4169fe'}
            },
            type:'bar',
            data:viewdata
          }
        ]
      };
      myChart2.setOption(option2);
    });
  })
