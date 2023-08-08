# 百度离线地图

很多内网环境下，需要使用离线地图，国内最常用的地图莫过于百度地图，放了方便大家使用，把整理好的离线地图做了一次封装，实现了缩放，中心点，绘制多边形等基础功能，下个版本会添加绘制工具。

```javascript
import bdmap from 'XXX/dist/index.js'

bdmap({
    tdir: '', // 可访问的瓦片地址，默认 /tiles
})

const map = new BMap.Map(document.body)
map.enableScrollWheelZoom(true)
map.centerAndZoom(new BMap.Point('119.425891', '32.206694'), 15)

```
