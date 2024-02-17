var mapa = L.map('mapa').setView([0.18,-72.90],6);
 L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}).addTo(mapa);
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