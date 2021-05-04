function replaceAll(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}

var sentence="replace function replace";
var result=replaceAll(sentence,"replace","replaceAll"); 

console.log(result);