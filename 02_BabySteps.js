/**
 * Created by Brenkel on 23.04.2014.
 */
var sum = 0;

for (var i = 2; i < process.argv.length; i++){
    sum += +process.argv[i];
}


console.log(sum);
