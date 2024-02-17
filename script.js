var mapa = L.map('mapa').setView([0.18,-72.90],6);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                subdomains: 'abcd',
                maxZoom: 19
 }).addTo(map);
$.getJSON("https://jpanimboza.github.io/OPTE/tesis_2012.geojson",
function(data){
var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
layer.bindPopup(feature.properties.TITULO_TESIS_O_INVESTIGACION)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});
