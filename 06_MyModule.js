/**
 * Created by Brenkel on 29.04.2014.
 */

var fs = require('fs');
var path = require('path');

module.exports = function (dir, fileExt, callback) {
    fs.readdir(dir, function (err, files) {
        var result = [];
        if (err) return callback(err);
        files.forEach(function (file) {
            if (path.extname(file) == "." + fileExt) {
                result.push(file);
            }
        });
        callback(null, result);
    });
};




