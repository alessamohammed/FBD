// usage example:
var myArray = ['a', 1, 'a', 1, 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 

console.log(unique);