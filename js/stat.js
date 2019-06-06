'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMN_WIDTH = 40;
var TEXT_Y = 265;
var COLUMN_X = 100;
var GAP = 50;
var HISTO_HEIGHT = 150;
var columnY = 150;

var renderCloud = function (ctx,x,y,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
};

var getMaxTime = function (array) {
  var maxElement = -1;
  for (var i=0;i<array.length;i++) {
    if (array[i]>maxElement) {
      maxElement=array[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx,110,20,'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx,100,10,'#fff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', 110, 30);
  ctx.fillText('Список результатов:', 110, 50);
  ctx.fillStyle = '#000';

  var maxTime = getMaxTime(times);

  for (var i=0;i<names.length;i++) {
    ctx.fillText(names[i],COLUMN_X+COLUMN_WIDTH*i+GAP*(i+1),TEXT_Y);
    ctx.fillRect(COLUMN_X+COLUMN_WIDTH*i+GAP*(i+1),columnY,COLUMN_WIDTH,columnHeight);
  };
  for (var i=0;i<times.length;i++) {
    var nameTime = Math.round(times[i]);
    var columnHeight = nameTime * HISTO_HEIGHT / maxTime;
  }
};
