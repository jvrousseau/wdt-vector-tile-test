var VectorTile = require('vector-tile').VectorTile;
var Pbf = require('pbf');
var pako = require('pako');

var fs = require('fs');


var mapbox_vt = new VectorTile(new Pbf(fs.readFileSync('./7.vector.pbf')));
console.log(mapbox_vt);

var wdt_vt = new VectorTile(new Pbf(pako.inflate(fs.readFileSync('./L2_X1_Y1.pbf'))));
console.log(wdt_vt);
