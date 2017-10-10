
var static = require( 'node-static' ),
    port = 5454,
    http = require( 'http' );

var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );

http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );

var livereload = require('livereload');
var server = livereload.createServer({
  exts:['html','js','css']
});
console.log(__dirname);
server.watch(__dirname + "/public");

console.log(`servidor corriendo por el puerto ${port}`);
