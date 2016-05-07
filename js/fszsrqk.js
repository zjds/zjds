/**
 * @author : FuLouRong
 * @date : 2016/4/11
 * @module :
 * @description :
 */

var nulldata=[];
var linedata=[];
linedata.push(parseFloat(s2009[0].value),parseFloat(s2010[0].value),parseFloat(s2011[0].value),parseFloat(s2012[0].value),parseFloat(s2013[0].value),parseFloat(s2014[0].value),parseFloat(s2015[0].y),783.68)
nulldata.push(parseFloat(s2009[0].value),parseFloat(s2010[0].value),parseFloat(s2011[0].value),parseFloat(s2012[0].value),parseFloat(s2013[0].value),parseFloat(s2014[0].value),parseFloat(s2015[0].y))
nulldata.push({'color':'rgba(25,146,192, 0.3)','y':783.68});
var zhudata= [409917, 464082,507123, 466791, 564596, 569835, 571271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata2=[809917, 5464082,407123, 366791, 264596, 469835, 271271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata3= [49917, 46402,50712, 466791, 56496, 56835, 57271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata4=[80917, 546482,47123, 36791, 26496, 46985, 21271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata5= [40917, 46482,5023, 4661, 5645, 56985, 57121,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata6= [402917, 146482,15023, 24661, 35645,156985, 257121,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
// console.log(nulldata);
function choose(n){
  var viewdata=[];
  for(i=0;i<s2015.length;i++){
   if(s2015[i].name==n){
     viewdata.push(parseFloat(s2009[i].value),parseFloat(s2010[i].value),parseFloat(s2011[i].value),parseFloat(s2012[i].value),parseFloat(s2013[i].value),parseFloat(s2014[i].value),parseFloat(hh2015[i].value))
     viewdata.push({'color':'rgba(25,146,192, 0.3)','y':parseFloat(hh2015[i].value*1.2,2)});
    return viewdata
   }
  }
}
function chooseLineData(n) {
  var lineViewData=[];
  for(i=0;i<s2015.length;i++){
    if(s2015[i].name==n){
      lineViewData.push(parseFloat(s2009[i].value),parseFloat(s2010[i].value),parseFloat(s2011[i].value),parseFloat(s2012[i].value),parseFloat(s2013[i].value),parseFloat(s2014[i].value),parseFloat(s2015[i].y),parseFloat(s2015[i].y)*1.2)
      return lineViewData
    }
  }
}
var hs2015=[];
for(i=0;i<s2015.length;i++){
  hs2015.push([s2015[i].name,parseFloat(s2015[i].y)]);
  hs2015[0].sliced = true;
  //console.log(hs2015);
}
//根据柱状图年份取得饼图相应年份数据
var choosePieData = function(n) {
  var m = "s"+n;
  var data = [];
  //var pieData = [];
  //console.log(sjjson[m]);
  //josn转化为数组
  data.push({y:parseFloat(sjjson[m].gesds,2),name:'个人所得税'},{y:parseFloat(sjjson[m].qysds,2),name:'企业所得税'},
      {y:parseFloat(sjjson[m].qs,2),name:'契税'},{y:parseFloat(sjjson[m].yys,2),name:'营业税'}
      ,{y:parseFloat(sjjson.s2015.zys,2),name:'资源税'},
      {y:parseFloat(sjjson.s2015.tdsys,2),name:'土地使用税'},{y:parseFloat(sjjson.s2015.cjs,2),name:'城建税'},
      {y:parseFloat(sjjson.s2015.yhs,2),name:'印花税'},{y:parseFloat(sjjson.s2015.tdzzs,2),name:'土地增值税'},
      {y:parseFloat(sjjson.s2015.fcs,2),name:'房产税'},{y:parseFloat(sjjson.s2015.ccs,2),name:'车船税'},
      {y:parseFloat(sjjson.s2015.yys1,2),name:'烟叶税'},{y:parseFloat(sjjson.s2015.gdzys,2),name:'耕地占用税'},
      {y:parseFloat(sjjson.s2015.gdzctjs,2),name:'固定资产投资方向调节税'},{y:parseFloat(sjjson.s2015.qt,2),name:'其他'});
  // console.log(data[1]);
  for(i=0;i<data.length;i++) {
    data[i].y = parseFloat((data[i].y / 100000000).toFixed(2))
  }
  // console.log(data);
  ////转化为图形要求格式，数组嵌套数组
  //for(var i=0;i<data.length;i++){
  //  //console.log("进来了");
  //  pieData.push([data[i].name, parseFloat(data[i].value)]);
  //  //console.log(pieData,push成功);
  //  }
  ////console.log(pieData,"打印最终数据");
  return data
}

//console.log(s2009,s2010,s2011,s2012,s2013,s2014,s2015)//确保每年格式一样
$(function () {

  var series = {
    yAxis: 0,
    name: "默认测点"
  };//这里是关键


  Highcharts.setOptions({
    colors: ['#1F97EE']
  });
    //柱形图
  var chart = new Highcharts.Chart({
   //图表的配置
    chart: {
      backgroundColor: 'rgba(7,36,106,0.0)',
      renderTo: 'cavs2',
      type: 'column',
      margin: 75,
      options3d: {
        enabled: true,
        alpha: 25,
        beta: 5,
        depth: 50,
        viewDistance: 25
      }
    },
    exporting: {
      enabled:false
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis:{
      labels: {
        style: {
          color: '#fff',
          fontSize:'16'
        }
      },
      gridLineColor: '#E4393c',
      gridLineWidth: 0,
      gridLineDashStyle:'longdash',
      categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015','2016']
    },
    yAxis:{
      gridLineColor: 'rgba(255,255,255,0.3)',
      gridLineWidth: 1,
      gridLineDashStyle:'longdash',
      labels: {
        style: {
          color: '#fff',
          fontSize:'16'
        }
      },
      title:{
        text:''
      }
    },
    plotOptions: {

      //点击柱状图切换拼图各年份数据
      series: {
        events: {
          click: function(e) {
            chartPie.series[0].setData(choosePieData(e.point.category));
            //console.log(chartPie);
          }
        }
      }
    },
    series: [{
      name:['收入(亿元)'],
      data: nulldata,
      showInLegend: false // 设置为 false 即为不显示在图例中
    },
      {
        name:['收入(亿元)'],
        data:linedata,
        type:'line',
        color:'#fff'
      }]
  });
  // 3d加载鼠标控制视角
  $(chart.container).bind('mousedown.hc touchstart.hc', function (e) {
    e = chart.pointer.normalize(e);
    //console.log(e);
    var posX = e.pageX,
      posY = e.pageY,
      alpha = chart.options.chart.options3d.alpha,
      beta = chart.options.chart.options3d.beta,
      newAlpha,
      newBeta,
      sensitivity = 3;
    $(document).bind({
      'mousemove.hc touchdrag.hc': function (e) {
        newBeta = beta + (posX - e.pageX) / sensitivity;
        newBeta = Math.min(100, Math.max(-100, newBeta));
        chart.options.chart.options3d.beta = newBeta;
        // 纵
        // 横
        newAlpha = alpha + (e.pageY - posY) / sensitivity;
        newAlpha = Math.min(100, Math.max(-100, newAlpha));
        chart.options.chart.options3d.alpha = newAlpha;
        chart.redraw(false);
      },
      'mouseup touchend': function () {
        $(document).unbind('.hc');
      }
    });

  });


  //饼图

  var chartPie = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: 'cavs1',
      backgroundColor: 'rgba(7,36,106,0.0)',
      slicedOffset:150,
      // size:500,
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    colors:[
      '#0196E3',//第一个颜色
      '#3CB544',//第二个颜色
      '#D2B120',//第三个颜色
      '#B96D13',
      '#492970',
      '#f28f43',
      '#77a1e5',
      '#c42525',
      '#a6c96a'
    ],
    title: {
      text: ''
    },
    exporting: {
      enabled:false
    },
    timeline:{
      //x:0,//左侧距离
      //controlStyle:{
      //  normal:{
      //    color:'#fff'
      //  }
      //},
      //data : [
      //  '2009','2010', '2011', '2012', '2013','2014',
      //  { name:'2015', symbol:'emptyStar6', symbolSize:8 },
      //],
      //autoPlay:true,//自动播放
      //label : {
      //  textStyle:{
      //    color:'#2669ce'
      //  },
      //  formatter : function(s) {
      //    return s.slice(0, 7);
      //  }
      //}  //无效，可能highcharts没有这种组件
  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        slicedOffset:40,//改变饼图突出多少
        dataLabels: {
          enabled: true,
          format: '',
          style: {
            color: '#fff',
            fontSize:'16'
          }
        },
        events: {
          click: function(e) { //e为点击事件，带有指向当前数据指针
            console.log(e);
            //console.log(e.point);
            //console.log(chart);
            console.log(chartPie);
            //chart.series[0].setData(choose(e.point.name));//动画
            //chart.series[0].setData(zhudata);// 不需要动画
            chart.series[0].setData(choose(e.point.name));
            chart.series[1].setData(chooseLineData(e.point.name));
            //根据点击动态刷新相应的顺序
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: '收入(亿元)',
      data:s2015
    }]
  });
});