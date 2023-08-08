var bmapcfg = {
  'imgext'      : '.jpg',   //瓦片图的后缀  根据需要修改，一般是 .png .jpg
  'tiles_dir'   : '',       //普通瓦片图的地址，为空默认在tiles/ 目录
};
 
var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src");  //获得当前js文件路径
bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/")+1); //地图API主目录
(function(){
  window.BMap_loadScriptTime = (new Date).getTime();
  //加载地图API主文件
  document.write('<script type="text/javascript" src="'+bmapcfg.home+'bmap_offline_api_v3.0_min.js"></script>');
})();