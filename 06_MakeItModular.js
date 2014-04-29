/**
 * Created by Brenkel on 29.04.2014.
 */
var myModule = require('./06_MyModule.js');
var dir = process.argv[2];
var fileExt = process.argv[3];

myModule(dir, fileExt, function(err, files){
    files.forEach(function (file){
        console.log(file);
    })
});

