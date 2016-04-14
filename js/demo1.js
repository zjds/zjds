/**
 * @author : FuLouRong
 * @date : 2016/4/11
 * @module :
 * @description :
 */
var bingdata=[];
var zhudata= [409917, 464082,507123, 466791, 564596, 569835, 571271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata2=[809917, 5464082,407123, 366791, 264596, 469835, 271271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata3= [49917, 46402,50712, 466791, 56496, 56835, 57271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata4=[80917, 546482,47123, 36791, 26496, 46985, 21271,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata5= [40917, 46482,5023, 4661, 5645, 56985, 57121,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
var zhudata6= [402917, 146482,15023, 24661, 35645,156985, 257121,  {'color':'rgba(25,146,192, 0.3)','y':671271}];
function choose(n){
  switch(n){
    case "企业所得税":{
      return zhudata6;
    }
    case "个人所得税":{
      return zhudata2;
    }
    case "契税":{
      return zhudata3;
    }
    case "营业税":{
      return zhudata4;
    }
    case "其他":{
      return zhudata5;
    }
  }
}
//只是demo。。
$(function () {

  var series = {
    yAxis: 0,
    name: "默认测点"
  };//这里是关键


  Highcharts.setOptions({
    colors: ['#1F97EE']
  });

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
          color: '#fff'
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
          color: '#fff'
        }
      },
      title:{
        text:''
      }
    },
    plotOptions: {
      series: {
        events: {
          legendItemClick: function(e) {
            return false; // 直接 return false 即可禁用图例点击事件
          }
        }
      }
    },
    series: [{
      name:['注册登记数'],
      data: zhudata,
      showInLegend: false // 设置为 false 即为不显示在图例中
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

  $('#cavs1').highcharts({
    chart: {
      type: 'pie',
      backgroundColor: 'rgba(7,36,106,0.0)',
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

  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: {
            color: '#fff'
          }
        },
        events: {
          click: function(e) {
            //console.log(e.point);
            //console.log(chart);
            chart.series[0].setData(choose(e.point.name));
            console.log(choose(e.point.name));
            chart.redraw();
            //根据点击动态刷新相应的顺序
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['企业所得税',   45.0],
        ['营业税',       26.8],
        {
          name: '其他',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['契税',    8.5],
        ['个人所得税',     6.2]
        //['其他',   0.7]
      ]
    }]
  });
});