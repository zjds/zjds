/**
 * @author : FuLouRong
 * @date : 2016/3/24
 * @module :
 * @description :
 */
var app=angular.module("zjdx",[]);
app.controller("swdxCtrl",['$scope','mainService',function($scope,mainService){


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
    //增加数
    $scope.int1=k1;
    $scope.int2=k2;
    $scope.int3=k3;
    $scope.int4=k4;
    $scope.$digest()
    $(".int").fadeIn(10);
    //实时数
    $scope.djhs+=k1;
    $scope.bmsr+=k2;
    $scope.shuishou+=k3;
    $scope.feiss+=k4;
    $(".int").fadeOut(2000);
    var a = setTimeout(function(){
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
      $scope.$digest();
      clearTimeout(a);
    },2010)
  },3000);
  require.config({
    paths: {
      echarts: './js/src',
      zrender:'./js/zrender/src'
    }
  });
  require(
      [
        'echarts',
        'echarts/chart/line'
      ],
      //left折线
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
            // show:false,
            trigger: 'axis',
            padding:3,
            formatter: function (params, ticket, callback) {
              params=params.sort(by("seriesIndex"));//排序
              var res = params[0].name+'年<br/>';//抬头
              for(i=0;i<params.length;i++){
                //   if((params[i].value!='-')&&(params[i].name!='15')){
                //   res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
                // }else if((params[i].name=='15')&&(i%2!=0)){
                //     res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//内容
                //   }
                if(i%2==0){
                  res+=params[i].seriesName+':'+params[i].value+'亿元'+'<br/>';//修改,只显示虚线数据
                }
              }

              var b = setTimeout(function (){
                callback(ticket, res);
                clearTimeout(b);
              }, 300);
              return '计算中...';
            }
          },
          legend: {
            padding:[0,150],
            textStyle:{
              color:"#ffffff"
            },
            // color:['#00448a','#0580b9','#28c6b9','#84e6f1','#dddddd'],
            data:['地税组织收入','税收收入','社保基金收入','非税收入'],
            left:'left'
          },
          color:['#0ecdf6','#127cff','#0edb26','#ffb21c'],//系列颜色
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
            right:'40%',
            axisLabel:{
              textStyle:{
                color:"#2669ce",
                fontSize:12,
                fontWeight:"normal"
              }
            },
            splitLine:{
              show:false
            },
            data: ['09','10','11','12','13','14','15','16']
          },
          yAxis: {
            type: 'value',
            name:'亿元',
            padding:'0',
            axisLabel:{
              textStyle:{
                color:"#2669ce",
                fontSize:12,
                fontWeight:"normal"
              }
            },
            splitLine:{
              lineStyle:{
                color:'#073b83'
              }
            }
          },
          series: [
            {
              name:'社保基金收入',
              type:'line',
              stack: '',
              data:sbjjsr,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color:'#0edb26'
                  }
                }
              },
              smooth:true
            },
            {
              name:'社保基金收入',
              type:'line',
              stack: '',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dotted',
                    color:'#0edb26'
                  }
                }
              },
              // symbol:'image://imges/66.pic.jpg',
              data:[sbjjsr[0],sbjjsr[1],sbjjsr[2],sbjjsr[3],sbjjsr[4],sbjjsr[5],sbjjsr[sbjjsr.length-2],(sbjjsr[sbjjsr.length-2].value*1.2).toFixed(2)]
            },
            {
              name:'非税收入',
              type:'line',
              stack: '',
              data:fssr,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color:'#ffb21c'
                  }
                }
              }
            },
            {
              name:'非税收入',
              type:'line',
              stack: '',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dotted',
                    color:'#ffb21c'
                  }
                }
              },
              data:[fssr[0],fssr[1],fssr[2],fssr[3],fssr[4],fssr[5],fssr[fssr.length-2],(fssr[fssr.length-2].value*1.2).toFixed(2)]
            },
            {
              name:'税收收入',
              type:'line',
              stack: '',
              data:sssr,itemStyle: {
              normal: {
                lineStyle: {
                  color:'#127cff'
                }
              }
            }
            },
            {
              name:'税收收入',
              type:'line',
              stack: '',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dotted',
                    color:'#127cff'
                  }
                }
              },
              data:[sssr[0],sssr[1],sssr[2],sssr[3],sssr[4],sssr[5],sssr[sssr.length-2],(sssr[sssr.length-2].value*1.2).toFixed(2)]
            },
            {
              name:'地税组织收入',
              type:'line',
              data:dszzsr,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color:'#0ecdf6'
                  }
                }
              }
            },
            {
              name:'地税组织收入',
              type:'line',
              stack: '',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dotted',
                    color:'#0ecdf6'
                  }
                }
              },
              data:[dszzsr[0],dszzsr[1],dszzsr[2],dszzsr[3],dszzsr[4],dszzsr[5],dszzsr[dszzsr.length-2],(dszzsr[dszzsr.length-2].value*1.2).toFixed(2)]
            }
          ]
        };
        lineChart.setOption(option);
      });
  require(
      [
        'echarts',
        'echarts/chart/map'
      ],
      //center地图
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
          '义乌':[120.06, 29.32],
          '温州市局本级':[120.65,28.01],
          '洞头区局':[121.12,27.84],
          '乐清市局':[120.94,28.14],
          '永嘉县局':[120.68,28.16],
          '平阳县局':[120.55,27.68],
          '苍南县局':[120.36,27.53],
          '文成县局':[120.08,27.08],
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
          '东阳市局':[120.23,120.23],
          '舟山市局本级':[122.2,30],
          '定海区局':[122.11,30.03],
          '普陀区局':[122.3,122.3],
          '岱山县局':[122.3,122.3],
          '嵊泗县局':[122.3,122.3],
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
              //定位省局点
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
                  period: 10,  //扩散速度
                  scaleSize:30,
                  shadowBlur:10
                },
                data :[{name:"省局直属局"}],
                geoCoord: geoCoordflr
              }
            },
              //定位地市点
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
            var mydata=[];
            var aadata=[];//保存处理完成的结果集
            var str=',{data:[';//保存线性数据
            var strpont=',{data:[';//保存点状数据
            var number=Math.floor(Math.random()*2+1);//处理结果的数量，仅demo，实际可删 //产生的数据数量
            for(i=0, k={},l={};i<number;i++){
              // var ronndnum=Math.floor(Math.random()*arrayObj.length);
              mydata=[{'name':$scope.ssData[i].swjmc},{'name':'省局直属局'}];
              // console.log($scope.ssData[i].swjmc);
              aadata.push(mydata);
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
                  clearTimeout(t);
                }
                ,1000);
            var r = setTimeout(function(){//回收canvas上的所有线跟点。
              for(i=0;i<aadata.length;i++){
                eval('myChart.delMarkLine('+1+',"'+aadata[i][0].name+' > 杭州市局本级")');
                eval('myChart.delMarkPoint('+1+',"'+aadata[i][0].name+'")');
              }
              clearTimeout(r);
            },6000)
          },4000)


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
      });
  require(
      [
        'echarts',
        'echarts/chart/line',
        'echarts/chart/bar'
      ],
      //right登记注册情况年度对比
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
              }
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
        'echarts/chart/pie'

      ],
      //分税种收入情况
      function(echarts){
        var right2=echarts.init(document.getElementById('rightcavs2'));

        // var idx = 1;
        //{value: idx * 128 + 80,  name:'个人所得税'},
        var viewdata=[];
        var newname="个人所得税";
        var dataIndex=0;
        viewdata.push(y2009[dataIndex].value,y2010[dataIndex].value,y2011[dataIndex].value,
            y2012[dataIndex].value,y2013[dataIndex].value,y2014[dataIndex].value,y2015[dataIndex].value);
        option = {
          timeline : {
            // x:0,//左侧距离
            // right:0,
            // padding:[0,30],
            // left:'center',
            controlStyle:{
              normal:{
                color:'#fff'
              }
            },
            data : [
              '2009','2010', '2011', '2012', '2013','2014',
              { name:'2015', symbol:'emptyStar6', symbolSize:8 }
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
                trigger: 'item'
                //formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                // orient:'vertical',
                padding:[0,100],
                x:'center',
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
              color:['#2874ff',  '#8426f8',  '#0cda63',  '#dbff14',  '#14b4ff'],
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
                  data:y2009
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2010
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2011
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2012
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2013
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2014
                }
              ]
            },
            {
              series : [
                {
                  name:'税收比',
                  type:'pie',
                  data:y2015
                }
              ]
            }
          ]
        };
        console.log(y2015);
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
        console.log(viewdata);
        var c = setTimeout(function(){
          myChart2.setOption(option2);
          clearTimeout(c);
        },800);

        right2.on('click', function (param) {
          newname=param.name;
          dataIndex=param.dataIndex;
          viewdata=[y2009[dataIndex].value,y2010[dataIndex].value,y2011[dataIndex].value,y2012[dataIndex].value,y2013[dataIndex].value,y2014[dataIndex].value,y2015[dataIndex].value];
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
                  }
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
                }
              }
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
      });

  //全屏
  $scope.launchFullScreen = function() {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if(document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if(document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if(document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }

  //时钟
  function showLocale(objD) {
    var str,colorhead,colorfoot;
    var yy = objD.getYear();
    if(yy<1900) yy = yy+1900;
    var MM = objD.getMonth()+1;
    if(MM<10) MM = '0' + MM;
    var dd = objD.getDate();
    if(dd<10) dd = '0' + dd;
    var hh = objD.getHours();
    if(hh<10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if(mm<10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if(ss<10) ss = '0' + ss;
    var ww = objD.getDay();
    if ( ww==0 ) colorhead="<font color=\"#1871E3\">";
    if ( ww > 0 && ww < 6 ) colorhead="<font color=\"#1871E3\">";
    if ( ww==6 ) colorhead="<font color=\"#1871E3\">";
    if (ww==0) ww="星期日";
    if (ww==1) ww="星期一";
    if (ww==2) ww="星期二";
    if (ww==3) ww="星期三";
    if (ww==4) ww="星期四";
    if (ww==5) ww="星期五";
    if (ww==6) ww="星期六";
    colorfoot="</font>"
    str = colorhead + yy + "年" + MM + "月" + dd + "日" + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
    return(str);
  }
  function tick() {
    var today;
    today = new Date();
    document.getElementById("localtime").innerHTML = showLocale(today);
    clearTimeout(d);
    var d = setTimeout(tick, 1000);
  }
  tick();
        }])



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

