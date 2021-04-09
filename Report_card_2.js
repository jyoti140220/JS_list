var m= [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78]
]
var i=0
while (i<m.length){
    var sum=0
    var count=0
    var j=0
    while (j<m[i].length){
        sum+=m[i][j]
        count+=1
        j++;
    }var avarage=parseInt(sum/count)
    console.log(`${i+1} year ka avarage ${avarage}`)
    i++
}