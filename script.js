var map;
require(["esri/map", "dojo/domready!"], function(map){
    map = new Map("map Div", {
        center:[16.4023, 120.5960],
        zoom: 3
        basemap: "streets"
    });
});