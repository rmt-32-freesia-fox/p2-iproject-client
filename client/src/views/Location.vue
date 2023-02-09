<script>

export default {
    mounted() {
        // var map = L.map('map').setView([51.505, -0.09], 13);
        var map = L.map('map').setView([-7.687432, 110.355064], 13);
        var circle = L.circle([-7.687400, 110.355055], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
        var popup = L.popup()
            .setLatLng([-7.687400, 110.355055])
            .setContent("Arinanda Garden")
            .openOn(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}
</script>


<template>

    <div id="map" style="height: 100vh;"></div>
</template>