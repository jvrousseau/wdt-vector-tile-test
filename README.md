###This is to test a prototype vector tile from wdt comparing it to a mapbox vector tile

##wdt vector tile fails with this error

```bash
/Users/jrousseau/Desktop/wdt-vector-tile-test/node_modules/pbf/index.js:126
        default: throw new Error('Unimplemented type: ' + type);
                       ^
Error: Unimplemented type: 4
    at Object.Protobuf.skip (/Users/jrousseau/Desktop/wdt-vector-tile-test/node_modules/pbf/index.js:126:24)
    at new VectorTile (/Users/jrousseau/Desktop/wdt-vector-tile-test/node_modules/vector-tile/lib/vectortile.js:22:20)
    at Object.<anonymous> (/Users/jrousseau/Desktop/wdt-vector-tile-test/index.js:8:14)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3

```

usage:

`npm install;`

`node index.js`
