/**/_jsload2&&_jsload2('copyrightctrl', 'x.extend(Uc.prototype,{Df:function(){this.P&&this.Ne(this.P)},initialize:function(a){Pc.prototype.initialize.call(this,a);this.Ha();this.Bo();this.ha(a);return this.R},ha:function(a){var b=this;a.addEventListener("load",function(){b.Bo()});a.addEventListener("moveend",function(){b.Bo()});a.addEventListener("zoomend",function(){b.Bo()});a.addEventListener("maptypechange",function(){b.R&&(b.R.style.color=b.P.ya().Im())})},Ha:function(){Pc.prototype.Ha.call(this);x.U.ib(this.R,"BMap_cpyCtrl");var a= this.R.style;a.cursor="default";a.whiteSpace="nowrap";a.MozUserSelect="none";a.color=this.P.ya().Im();a.background="none";a.font="11px/15px "+J.fontFamily;Pc.prototype.Or.call(this)},Bo:function(){if(this.P&&this.R&&0!=this.hc.length)for(var a=0,b=this.hc.length;a<b;a++){this.P.la();var c=this.P.cc({x:0,y:0}),e=this.P.cc({x:this.P.width,y:this.P.height}),c=new kb(c,e);if(this.hc[a].bounds&&c.ut(this.hc[a].bounds)==s){if(this.R)for(e=0;e<this.R.children.length;e++)if(this.R.children[e].getAttribute("_cid")== this.hc[a].id&&"none"!=this.R.children[e].style.display){this.R.children[e].style.display="none";return}}else if(this.R){for(var c=t,e=0,f=this.R.children.length;e<f;e++)if(this.R.children[e].getAttribute("_cid")==this.hc[a].id){c=q;this.R.children[e].style.display="inline";this.R.children[e].innerHTML!=this.hc[a].content&&(this.R.children[e].innerHTML=this.hc[a].content);break}c||this.$q(this.hc[a])}}},Dw:function(a){if(a&&bb(a.id)&&!isNaN(a.id)){var b={bounds:s,content:""},c;for(c in a)b[c]=a[c]; if(a=this.zm(a.id))for(var e in b)a[e]=b[e];else this.hc.push(b);this.Bo()}},zm:function(a){for(var b=0,c=this.hc.length;b<c;b++)if(this.hc[b].id==a)return this.hc[b]},ED:u("hc"),ZE:function(a){for(var b,c=0,e=this.hc.length;c<e;c++)this.hc[c].id==a&&(b=this.hc.splice(c,1),c--,e=this.hc.length);(a=this.dd(a))&&a.parentNode&&a.parentNode.removeChild(a);this.Bo();return b},$q:function(a){this.R&&(this.R.innerHTML+="<span _cid=\'"+a.id+"\'>"+a.content+"</span>")},dd:function(a){var b=Pc.prototype.dd.call(this); if(Nb(a)){if(b)for(var c=0,e=b.children.length;c<e;c++)if(b.children[c].getAttribute("_cid")==a)return b.children[c]}else return b}});U(Rg,{addCopyright:Rg.Dw,removeCopyright:Rg.ZE,getCopyright:Rg.zm,getCopyrightCollection:Rg.ED}); ');