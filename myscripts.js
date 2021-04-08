//setting map view 
var map = L.map('map').setView([-33.99925166354157, 22.71021066902826], 12);
		
      //var osm_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	  var OSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: '&copy; ' + '<a href="http://openstreetmap.org">OpenStreetMap</a>' + ' Contributors',maxZoom: 18,tileSize: 512,zoomOffset: -1,}).addTo(map);
      var GOOGLESAT = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{attribution: '&copy; ' + '<a href="http://openstreetmap.org">OpenStreetMap</a>' + ' Contributors',maxZoom: 18,tileSize: 512,zoomOffset: -1,}).addTo(map);
	  var Google_streets = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {attribution: '&copy; ' + '<a href="http://openstreetmap.org">OpenStreetMap</a>' + ' Contributors',maxZoom: 18,tileSize: 512,zoomOffset: -1,}).addTo(map);
	  
      var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

// disable zoom doubleclick
map.doubleClickZoom.disable(); 

      function getColor(d) {
        return d > 200000000 ? '#800026' :
               d > 100000000  ? '#BD0026' :
               d > 50000000  ? '#E31A1C' :
               d > 10000000  ? '#FC4E2A' :
               d > 1000000   ? '#FD8D3C' :
               d > 100000   ? '#FEB24C' :
               d > 10000   ? '#FED976' :
                            '#FFEDA0';
        }
	//Panes
	//creating panes for the icons and markers
		//create pane for markers icon1
		map.createPane('bird1');
		// reference the pane with 'getPane' and set zindex to 650
		map.getPane('bird1').style.zIndex = 654;
		//clicking wont be affected by pane 'bird1'
		map.getPane('bird1').style.pointerEvents = 'none';
		
	//ICONS
	//Bird icon 1 - plain
	var Bird1_Icon = L.icon({
	iconUrl: 'https://github.com/matt476/Project1/blob/main/bird1.png', //does not work yet!!!
	iconSize: 22,
	pane: 'bird1'
	});
		
	// CREATED MARKERS
	// add a marker location 1 rondevlei hide
	var marker1 = L.marker([-33.98813097324256, 22.71623674953707],{icon: Bird1_Icon, pane:'bird1'}).addTo(map);
	//make popup
	marker1.bindPopup("<b>Rondevlei Bird Hide</b><br>White-Breasted Cormorant");
	//have popup only show on hover
	marker1.on('mouseover', function (e) {
            this.openPopup();
        });
        marker1.on('mouseout', function (e) {
            this.closePopup();
        });
	// location 2 Malachite hide
	var marker2 = L.marker([-33.98193652600059, 22.668787614803716]).addTo(map);
	marker2.bindPopup("<b>Malachite Bird Hide</b><br>Cape White-Eye");
	marker2.on('mouseover', function (e) {
            this.openPopup();
        });
        marker2.on('mouseout', function (e) {
            this.closePopup();
        });
	// location 3 Malachite hide
	var marker3 = L.marker([-33.9829644369588, 22.66749703263042]).addTo(map);
	marker3.bindPopup("<b>Malachite Bird Hide</b><br>Malachite Kingfisher");
	marker3.on('mouseover', function (e) {
            this.openPopup();
        });
        marker3.on('mouseout', function (e) {
            this.closePopup();
        });
	// location 4
	var marker4 = L.marker([-33.99842443580978, 22.826127532336365]).addTo(map);
	marker4.bindPopup("<b>Hoegekraal Road Bridge 1</b><br>Giant Kingfisher");
	marker4.on('mouseover', function (e) {
            this.openPopup();
        });
        marker4.on('mouseout', function (e) {
            this.closePopup();
        });
	// location 5
	var marker5 = L.marker([-33.97991789936372, 22.799635780254224]).addTo(map);
	marker5.bindPopup("<b>Hoegekraal Road Bridge 2</b><br>Black Crake");
	marker5.on('mouseover', function (e) {
            this.openPopup();
        });
        marker5.on('click', function (e) {
            this.closePopup();
        });
	//CREATED CIRCLE radius 5km
	// add a circle
		var cricle1 = L.circle([-33.98813097324256, 22.71623674953707],{
			color: 'orange',
			opacity: 0.5,
			radius: 5000
		}).addTo(map);
		
	// making basemaps
		 var baseMaps = {
            "Open Street Map": OSM,
            "Google Satellite": GOOGLESAT,
            "Google Streets": Google_streets
			};
		
		var LC = L.control.layers(baseMaps,null,{collapsed:false});
        LC.addTo(map);
		
	
	newMarkerGroup = new L.LayerGroup();
	map.on('dblclick', addMarker);
	//function to add a marker
	function addMarker(e){
    var marker = new L.marker(e.latlng,{draggable:true}).addTo(map); //new marker can be dragged to another location
	
	//add popup on new markers
	marker.bindPopup('need to fix this');
	//click the marker to see the popup
	marker.on('click',function (e) {
            this.openPopup();
        });
        marker5.on('click', function (e) {
            this.closePopup();
	});
	marker.getPopup().getContent();
	marker.getPopup().setContent("123");
	marker.getPopup().update('');
	}
	
	
	
	
	
	
