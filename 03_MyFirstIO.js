/**
 * Created by Brenkel on 24.04.2014.
 */
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var subStrings = buf.toString().split("\n");
console.log(subStrings.length - 1);
