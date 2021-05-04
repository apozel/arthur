import { zoomend, update_values } from "./objects"
import { Card } from './map'
//import $ from 'jquery';
//keeps interval (start())
var intervalID = null;
//askip mon block update fonction seulement si lancé avant la map            Mes variable globales
//var maPosition = null;
var myjson; //decl&arer la comme globale
var latLng;
// variable map a l'ecran
var map = new Card('map', 43, 3, 7)

//////////////////////////////////////////////////////////////////////////////:




function dataready() {


    L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=vla4kokt42kz0fo59w2O', {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
    }).addTo(map);

    maPosition.setLatLng(latLng);
    monPerimetre.setLatLng(latLng);
}//C'est la fin de la fonction update


// ah oui deux fonction ca fait pas beaucoup


function onZoomend(feature, layer) {
    var currentZoom = map.getZoom();
    if (currentZoom > 9) {
        geojson.eachLayer(function (layer) {
            layer.setIcon(busIcon);
        });
    }
};

function update_values() {
    $.getJSON($SCRIPT_ROOT + '/_stuff1',

        function (data) {
            $('#result').text(data.result)
            $('#result1').text(data.result1)
            console.log(data);
            latLng = [data.result1, data.result];     // la fameuse variable latlng !!! On va essayer de s'en servier pour .set
            myjson = data;
            dataready();
        });
};




//////////////////////////////////////////////////////////////////////////////////////La fonction lancée après réception de lon la
map.add(busIcon).add(monPerimetre);
map.add(maPosition);

// pour remove
busIcon.remove()
// ou
map.remove(monPerimetre)
map.add(busIcon).add(monPerimetre);



function OnStart() {
    intervalID = setInterval(update_values, 1000);
    map.on('zoomend', onZoomend);
    alertWindows();
}

// ca vraiment je comprend pas pourquoi ?
function alertWindows() {
    window.alert("Attention les yeux !");
}

//run when readed by chrome or firefox

OnStart()
