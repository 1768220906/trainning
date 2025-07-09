function initMap() {
  let map = new BMapGL.Map("map"); // 创建Map实例
  let point = new BMapGL.Point(104.07, 30.55); // 创建点坐标
  map.centerAndZoom(point);
  map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放

  map.setTilt(40); //设置地图的倾斜角度

  let zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
  map.addControl(zoomCtrl);

  let myGeo = new BMapGL.Geocoder();
  // 将地址解析结果显示在地图上，并调整地图视野
  myGeo.getPoint(
    "花样年·香年广场T3写字楼",
    function (point) {
      if (point) {
        map.centerAndZoom(point, 18);
        map.addOverlay(
          new BMapGL.Marker(point, { title: "花样年·香年广场T3写字楼" })
        );
      } else {
        alert("您选择的地址没有解析到结果！");
      }
    },
    "成都市"
  );
}

const map = document.querySelector("#map");
