//voilà !!!La méthode pour importer mes choses
import { myGeoJSON } from "./static/js/mesPoint.js"
import { onEachFeature } from "./static/js/mesPoint.js"
L.geoJSON(myGeoJSON, { onEachFeature: onEachFeature })


L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');

        img.src = '/static/logo.png';
        img.style.width = '250px';

        return img;
    },

    onRemove: function (map) {
        // Nothing to do here
    }
});

L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
}

var control = L.control.watermark({ position: 'bottomleft' })


var laBranche = L.icon({
    iconUrl: '/assets/morgan.png',
    //shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',//la ptite ombre pour la branche
    iconSize: [100, 50],
    iconAnchor: [50, 25],
    shadowAnchor: [4, 62],//pareil pour l'ombre
    popupAnchor: [12, -90]//Pour bien placer la popup sur l'icon, pour bien voir la ptite branche
})


var maPosition = L.marker([0, 0], { icon: laBranche }) //J'initialise le marker


var monPerimetre = L.circle([0, 0], {
    color: 'red',
    fillcolor: '#f03',
    fillOpacity: 0.5,
    radius: 27000
})

var busIcon = L.icon({
    iconUrl: 'http://openstationmap.org/0.2.0/client/leaflet/images/marker-icon.png',

    iconSize: [23, 29],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});


export { laBranche, maPosition, monPerimetre, busIcon, control }