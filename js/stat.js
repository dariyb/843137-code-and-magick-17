'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx,x,y,a,b,CLOUD_WIDTH,d,CLOUD_WIDTH,f,g,CLOUD_HEIGHT,t,CLOUD_HEIGHT,p,s,z,q,l,m,color ) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.lineTo(CLOUD_WIDTH, d);
  ctx.lineTo(CLOUD_WIDTH, f);
  ctx.lineTo(g, CLOUD_HEIGHT);
  ctx.lineTo(t, CLOUD_HEIGHT);
  ctx.lineTo(p, s);
  ctx.lineTo(z, q);
  ctx.lineTo(l, m);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20,330, 20, 430, 110, 430, 210, 330, 280, 110, 280, 10, 210, 10, 110, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 320, 10, CLOUD_WIDTH, 100, CLOUD_WIDTH, 200, 320, CLOUD_HEIGHT, 100, CLOUD_HEIGHT, 0, 200, 0, 100, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 100, 250);
  ctx.fillRect(100, 100, 40, 150);
  ctx.fillText('Юлия', 110, 135);
  ctx.fillRect(190, 120, 40, 100);
};
