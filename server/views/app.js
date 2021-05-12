var mymap = L.map('mapid').setView([-7.25613, 112.75139], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

coords = [[-7.2561620, 112.7506888], [-7.2581431, 112.7512443], [-7.2596355, 112.7438817], [-7.2595098, 112.7391234], [-7.2767494, 112.7448414], [ -7.2833024, 112.7369031]];
rent = ['Rp 2.250.000', 'Rp 1.370.000', 'Rp 750.000', '3.250.000', '2.250.000', '2.175.000'];
areas = ['80m2', '50m2', '55m2', '82 m2', '63m2', '78m2'];
bed = [4, 2, 2, 3, 2, 2];
images = ['images//hotel1.jpg', 'images//hotel2.jpg', 'images//hotel3.jpg', 'images//hotel4.jpg', 'images//hotel5.jpg', 'images//hotel6.jpg']

for (let i = 0; i < coords.length; i++) {
  var pop = L.popup({
    closeOnClick: true
  }).setContent('<h4>Area: ' + areas[i] + '<br>bed: ' + bed[i] + '</h4><img src=' + images[i] + ' style="height: 100px">');
  var marker = L.marker(coords[i]).addTo(mymap).bindPopup(pop);
  var toollip = L.tooltip({
    permanent: true
  }).setContent(rent[i]);

  marker.bindTooltip(toollip);
}