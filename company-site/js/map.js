function initMap() {
  let map = new BMapGL.Map("map"); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(120.369557, 36.094406), 12); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
}

const map = document.querySelector('#map');

