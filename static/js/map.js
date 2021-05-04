export class Card {

    _map = null;
    constructor(nom, lattitude, longitude, zoom) {
        this._map = L.map(nom).setView([lattitude, longitude], zoom)
        this.setMapBackground
    }

    setMapBackground() {
        L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=vla4kokt42kz0fo59w2O', {
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            crossOrigin: true
        }).addTo(_map);
    }

    add(object) {
        object.addTo(this._map)
        return this;

    }
    remove(object) {
        object.remove(this._map);
    }

    get map() { return this._map }


}
