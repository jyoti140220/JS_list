var number = 30
var n=[10, 11, 12, 13, 14, 17, 18, 19]
var a=[]
var i=0
while (i<n.length){
    var j=i
    var b=[]
    while (j<n.length){
        if (n[i]+n[j]==number){
            b.push(n[i],n[j])

        }j++
    }if (b.length>=1){
        a.push(b)
    }
    i++;
}console.log(a)



// Output: [[11,19], [12,18],[13,17]]