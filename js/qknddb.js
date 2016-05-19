/**
 * Created by dingtianxiu on 16/5/13.
 */
$(function () {
  var series = {
    yAxis: 0,
    name: "默认测点"
  };//这里是关键

  Highcharts.setOptions({
    colors: ['#1F97EE']
  });

  var chart = new Highcharts.Chart({

    chart: {
        backgroundColor: 'rgba(7,36,106,0.0)',
      renderTo: 'leftBox',
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
      series: {
        //events: {
        //  legendItemClick: function(e) {
        //    return true; // 直接 return false 即可禁用图例点击事件
        //  }
        //}
      }
    },
    legend:{
      //data:['注册登记数','注册登','注']
      itemStyle:{
        color:'#fff',
        fontSize:'16'
      }

    },
    series: [{
      name:['新增纳税人(万)'],
      data:[40.9917,46.4082, 50.7123, 46.6791, 56.4596, 56.9835,57.1271, {'color':'rgba(25,146,192, 0.3)','y':65}]

      //showInLegend: false // 设置为 false 即为不显示在图例中
    },
      {
        name:['有效数(万)'],
        data:[19.6825, 28.1228, 26.1494, 29.2102, 39.0342, 37.3955,40.0288, {'color':'rgba(25,146,192, 0.3)','y':45}],
        color:'#ffb924'
        //showInLegend: false // 设置为 false 即为不显示在图例中
      },
      {
        name:['注销纳税人(万)'],
        data:[21.3092, 18.2854, 24.5629, 17.4689, 17.4254, 19.5880,17.0983, {'color':'rgba(25,146,192, 0.3)','y':20}],
        color:'#9834ff'
        //showInLegend: false // 设置为 false 即为不显示在图例中
      },
      {
        name:['有效数(万)'],
        type:'line',
        color:'#fff',
        data:[19.6825, 28.1228, 26.1494, 29.2102, 39.0342, 37.3955, 40.0288,45]
      }
    ]
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
});