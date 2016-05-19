/**
 * @author : dingtianxiu
 * @date : 2016/4/7
 * @module :
 * @description :
 */
var scrollMoveObj = null, scrollPageY = 0, scrollY = 0;
var scrollDivList = new Array();
// obj��Ҫ��ӹ������Ķ��� w��������� className��������ʽ����
// objԪ�� ����ָ���߶ȣ�������overflow:hidden;
// ��Ҫ����IE6 �����objԪ�� ָ�� overflow:hidden;
function jsScroll(obj, w, className)
{
  if(typeof(obj) == 'string')	{
    obj = document.getElementById(obj);
  }
  //������δ�������ڸ߶�ʱ������ӹ�����
  if(!obj || obj.scrollHeight <= obj.clientHeight || obj.clientHeight == 0) {
    return;
  }
  obj.scrollBarWidth = w||4;
  obj.style.overflow = 'hidden';
  obj.scrollBar = document.createElement('div');
  document.body.appendChild(obj.scrollBar);
  obj.scrollBarIndex = document.createElement('div');
  obj.scrollBar.appendChild(obj.scrollBarIndex);
  obj.scrollBar.style.position = 'absolute';
  obj.scrollBarIndex.style.position = 'absolute';
  obj.scrollBar.className = className || '';
  if(!className) {
    obj.scrollBar.style.backgroundColor = '#011854';
    obj.scrollBarIndex.style.backgroundColor = '#035FB6';
  }

  scrollDivList.push(obj);
  scrollResetSize(obj);

  //ʹ�������ֹ���
  obj.scrollBar.scrollDiv = obj;
  obj.scrollBarIndex.scrollDiv = obj;
  obj.onmousewheel = scrollMove;
  obj.scrollBar.onmousewheel = scrollMove;
  obj.scrollBarIndex.onmousewheel = scrollMove;
  //�϶�����������
  obj.scrollBarIndex.onmousedown = function(evt){
    evt = evt || event;
    scrollPageY = evt.clientY;
    scrollY = this.scrollDiv.scrollTop;
    isScrollMove = true;
    document.body.onselectstart = function(){return false};
    scrollMoveObj = this.scrollDiv;
    if(this.scrollDiv.scrollBar.className == 'divInfo') {
      this.scrollDiv.scrollBarIndex.style.backgroundColor = '#035FB6';
    }
    return false;
  }
}
//��ҳ���С�����仯ʱ�����¼��������λ��
window.onresize = function(){
  for(var i=0; i<scrollDivList.length; i++) {
    scrollResetSize(scrollDivList[i]);
  }
}
//���������λ��
function scrollResetSize(o) {
  if(o.scrollHeight <= o.clientHeight) {
    o.scrollTop = 0;
    o.scrollBar.style.display = 'none';
  } else {
    o.scrollBar.style.display = 'block';
  }
  var x=0, y=0;
  var p = o;
  while(p) {
    x += p.offsetLeft;
    y += p.offsetTop;
    p = p.offsetParent;
  }
  var borderTop = parseInt(o.style.borderTopWidth||0);
  var borderBottom = parseInt(o.style.borderBottomWidth||0);
  o.scrollBar.style.width = o.scrollBarWidth + 'px';
  o.scrollBar.style.height = o.clientHeight + 'px';
  o.scrollBar.style.top = y + borderTop + 'px';
  o.scrollBar.style.left = x + o.offsetWidth - o.scrollBarWidth + 'px';
  o.scrollBarIndex.style.width = o.scrollBarWidth + 'px';
  var h = o.clientHeight - (o.scrollHeight - o.clientHeight);
  //��������������С20������
  if(h < 20) {
    h = 20;
  }
  o.scrollBarHeight = h;
  o.scrollBarIndex.style.height = h + 'px';
  o.scrollBarIndex.style.left = '0px';
  setScrollPosition(o);
}

function setScrollPosition(o) {
  o.scrollBarIndex.style.top = (o.clientHeight - o.scrollBarHeight) * o.scrollTop / (o.scrollHeight - o.clientHeight) + 'px';
}

document.documentElement.onmousemove = function(evt){
  if(!scrollMoveObj)return;
  evt = evt || event;
  var per = (scrollMoveObj.scrollHeight - scrollMoveObj.clientHeight) / (scrollMoveObj.clientHeight - scrollMoveObj.scrollBarHeight)
  scrollMoveObj.scrollTop = scrollY - (scrollPageY - evt.clientY) * per;
  setScrollPosition(scrollMoveObj);
}
document.documentElement.onmouseup = function(evt){
  if(!scrollMoveObj)return;
  if(scrollMoveObj.scrollBar.className == 'divInfo') {
    scrollMoveObj.scrollBarIndex.style.backgroundColor = '#035FB6';//��ɫ
  }
  scrollMoveObj = null;
  document.body.onselectstart = function(){return true};
}

// �����ֹ���
function scrollMove(evt){
  var div = this.scrollDiv || this;
  if(div.scrollHeight <= div.clientHeight) return true;
  evt = evt || event;
  var step = 20;
  if(evt.wheelDelta < 0) {
    if(div.scrollTop >= (div.scrollHeight - div.clientHeight)) return true;
    div.scrollTop += step;
  } else {
    if(div.scrollTop == 0) return true;
    div.scrollTop -= step;
  }
  setScrollPosition(div);

  return false;
}