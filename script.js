var mapa = L.map('mapa').setView([0.18,-72.90],6);
var osmLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Jonathan'}).addTo(mapa);
mapa.addLayer(osmLayer);
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
