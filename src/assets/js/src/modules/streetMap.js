export default function streetMap() {
    const coords = [45.95913107169674, 12.320310668149938];
    const coords_2 = [46.35054085399973, 11.967401955225618];
    const addressText = 'Via Trentino 22, 31029 - Vittorio Veneto (TV)';

    let map = L.map('map').setView(coords, 13.5);

    let myIcon = L.icon({
        iconUrl: 'assets/i/static/map-icon.png',
        iconSize: [38, 38],
        iconAnchor: [38, 38],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    L.marker(coords, {icon: myIcon})
        .bindTooltip(addressText, {
            direction: 'right',
            offset: [-10, -30],
            permanent: false,
        })
        .addTo(map);
    L.marker(coords_2, {icon: myIcon})
        .bindTooltip(addressText, {
            direction: 'right',
            offset: [-10, -30],
            permanent: false,
        })
        .addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 24,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
}


