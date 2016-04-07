/**
 * @author : FuLouRong
 * @date : 2016/4/5
 * @module :
 * @description :
 */
var app=angular.module("qsnsrdj",[]);
app.controller("ListCtrl",function($scope){
  $(".leftview").height($(window).height());
  $(".rightview").height($(window).height());
})
require.config({
  paths: {
    echarts: './js/src',
    zrender:'zrender/src',
  }
});
require(
  [
    'echarts',
    'echarts/chart/map'
  ],
  function (echarts){})