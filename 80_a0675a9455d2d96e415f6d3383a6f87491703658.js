webpackJsonp([80],{534:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=i(78);t.default={op:function(e,t){return h.u(e,t.HISTOGRAM.layers)},params:{HISTOGRAM:{layers:{name:"Number of Layers",type:"constant",min:1,max:5,step:1,default:2}}},tick:function(e,t){var i=t.canvas,a=t.operation,l=t.output,o=t.session,n=t.input;o.runOp(a,e,l),h.k(i,n);var r=i.getContext("2d");r.beginPath();var g=new Path2D,s=new Path2D,u=new Path2D;g.moveTo(0,i.height),s.moveTo(0,i.height),u.moveTo(0,i.height);for(var f=1/(i.width*i.height)*i.height*10,c=0;c<256;c+=1){var d=l.get(0,c,0)*f,p=l.get(0,c,1)*f,v=l.get(0,c,2)*f;g.lineTo(c/255*i.width,i.height-d),s.lineTo(c/255*i.width,i.height-p),u.lineTo(c/255*i.width,i.height-v)}g.lineTo(i.width,i.height),s.lineTo(i.width,i.height),u.lineTo(i.width,i.height),g.closePath(),s.closePath(),u.closePath(),r.fillStyle="rgba(255, 0, 0, 0.25)",r.fill(g),r.fillStyle="rgba(0, 255, 0, 0.25)",r.fill(s),r.fillStyle="rgba(0, 0, 255, 0.25)",r.fill(u)}}}});