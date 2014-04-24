/**
 * Created by Brenkel on 24.04.2014.
 */
var fs = require('fs');
fs.readFile(process.argv[2],'utf8',function (err, data){
    if (err) throw err;
    console.log(data.split("\n").length - 1);
});