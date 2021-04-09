var m= [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78]
] 
var i=0
var sum=0
while (i<m.length){
    var j=0
    while (j<m[i].length){
        sum+=m[i][j]
        j++;
    }i++
}console.log(sum)