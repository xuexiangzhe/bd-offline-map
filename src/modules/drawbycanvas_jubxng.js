/**/_jsload2&&_jsload2('drawbycanvas', 'function Vh(a){this.P=a;this.yQ={strokeweight:"lineWidth",strokecolor:"strokeStyle",fillcolor:"fillStyle",strokeopacity:"globalAlpha",fillopacity:"globalAlpha"};this.Nb="canvas"}Vh.prototype=new A.dz;var Wh=Vh.prototype;Wh.Io=function(){if(!this.canvas||this.canvas&&!Gb(this.canvas)){var a=this.canvas=F("canvas");this.P.Wf().Ht.appendChild(a);a.style.position="absolute";a=a.getContext("2d");a.lineCap="round";a.lineJoin="round";a.save();this.cU(this.canvas)}return this.canvas}; Wh.Td=function(a,b,c){if(a&&0!==b[0].length){var e=a.getContext("2d");this.va(a);var f=parseInt(a.style.top),g=parseInt(a.style.left);e.beginPath();x.oc.Pb(b,function(a){if(0!==a.length){e.moveTo(a[0].x-g,a[0].y-f);for(var b=1,c=a.length;b<c;b++)e.lineTo(a[b].x-g,a[b].y-f)}});this.oR(a,c);"dashed"===c.strokeStyle&&this.qR(e,b,g,f,c)}}; Wh.qR=function(a,b,c,e,f){var g=this;a.beginPath();x.oc.Pb(b,function(b){if(0!==b.length){for(var k=[],m=0,n=b.length;m<n;m++)k.push({x:b[m].x-c,y:b[m].y-e});a.strokeStyle=f.strokeColor||"#3a6bdb";g.pR(a,k,{lineWidth:f.tc||5,interval:2*f.tc||10,lineLength:2*f.tc||10,strokeStyle:g.qS(a.strokeStyle,f.Ad)})}})}; Wh.pR=function(a,b,c){for(var c=c||{},e=c.Qx||10,f=c.lineWidth||5,g=c.Z4||10,c=c.strokeStyle||"#3a6bdb",i=b.length-1,k=0,m=g+e,n=0,o=0;o<i;o++)var p=b[o].x,v=b[o].y,w=b[o+1].x,y=b[o+1].y,n=n+Math.sqrt((w-p)*(w-p)+(y-v)*(y-v));if(n<g)a.strokeStyle=c,a.lineWidth=f,a.lineJoin="round",a.lineCap="round",a.beginPath(),a.moveTo(b[0].x,b[0].y),a.lineTo(b[i].x,b[i].y),a.stroke();else for(n=0;n<i;n++){var p=b[n].x,v=b[n].y,w=b[n+1].x,y=b[n+1].y,o=Math.sqrt((w-p)*(w-p)+(y-v)*(y-v))+k+g,z=m-Math.abs(k);if(k<= m){var B=parseInt(o/m),D=e*(w-p)/o,G=e*(y-v)/o;xMove=g*(w-p)/o;yMove=g*(y-v)/o;startX=p+z*(w-p)/o;startY=v+z*(y-v)/o;tailX=p+(g-Math.abs(k))*(w-p)/o;tailY=v+(g-Math.abs(k))*(y-v)/o;a.beginPath();a.strokeStyle=c;a.lineJoin="round";a.lineCap="round";a.lineWidth=f;E?a.moveTo(E,C):a.moveTo(p,v);0>=k&&a.lineTo(p,v);a.lineTo(tailX,tailY);a.moveTo(startX,startY);E=0;for(C=2*B;E<C;E++)if(E%2)startX+=D,startY+=G,a.moveTo(startX,startY);else{startX+=xMove;startY+=yMove;if(0>(w-startX)*xMove)break;a.lineTo(startX, startY)}a.stroke()}var k=parseInt(o-m*B)-g,E=w-Math.abs(k)*(w-p)/o,C=y-Math.abs(k)*(y-v)/o;n===i-1&&0<k&&(a.beginPath(),a.strokeStyle=c,p=w-k*(w-p)/o,leftY=y-k*(y-v)/o,k<=g?(a.moveTo(p,leftY),a.lineTo(w,y)):(a.moveTo(p,leftY),a.moveTo(p+xMove,leftY+yMove)),a.stroke())}}; Wh.qS=function(a,b){if(4===a.length)var c=parseInt(a.substr(1,1)+a.substr(1,1),16),e=parseInt(a.substr(2,1)+a.substr(2,1),16),f=parseInt(a.substr(3,1)+a.substr(3,1),16);else c=parseInt(a.substr(1,2),16),e=parseInt(a.substr(3,2),16),f=parseInt(a.substr(5,2),16);return c="rgba("+c+","+e+","+f+","+b+")"};Wh.setAttribute=function(a,b,c){if(a){var e=a.getContext("2d"),f=this.cr(b);try{e[f]=c}catch(g){}a.setAttribute("_"+b,c||"");e.save()}};Wh.cr=function(a){return this.yQ[a]||a}; Wh.cU=function(a){var b=this.P,c=b.M.dx,e=b.width+2*c,f=b.height+2*c,g=-b.offsetX-c,b=-b.offsetY-c,c=a.getContext("2d"),i={strokeStyle:c.strokeStyle,fillStyle:c.fillStyle,globalAlpha:c.globalAlpha,lineWidth:c.lineWidth,lineCap:"round",lineJoin:"round"};a.setAttribute("width",e);a.setAttribute("height",f);for(var k in i)c[k]=i[k];c.save();a=a.style;a.top=b+"px";a.left=g+"px"};Wh.IQ=function(a){a.clearRect(0,0,9999,9999)}; Wh.oR=function(a,b){var c=a.getContext("2d");c.globalAlpha=a.getAttribute("_fillopacity");0!==c.globalAlpha&&a.getAttribute("_fillcolor")&&c.fill();c.globalAlpha=a.getAttribute("_strokeopacity");0!==c.globalAlpha&&(a.getAttribute("_strokecolor")&&"dashed"!==b.strokeStyle)&&c.stroke()};Wh.va=function(a){var b=this.P,c=b.M.dx,e=-b.offsetX-c,a=a.style;a.top=-b.offsetY-c+"px";a.left=e+"px"};A.oP=Vh; ');
