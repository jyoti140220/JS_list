var a=[1,2,3,4,5,6];
var b=[2,3,1,0,6,7];
var i=0
var w=[]
while (i<a.length){
    var j=0
    var c=0
    while (j<b.length){
        if (a[i]==b[j]){
            c=c+1
        }
        j++
    }
    if (c==0){
        w.push(a[i])
    }i++
}console.log(w)