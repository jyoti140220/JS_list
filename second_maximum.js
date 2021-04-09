var a=[50, 40, 23, 7, 56, 12, 5, 10, 7];
var m=a[0]
var s=a[0]
var i=0
while (i<a.length){
    if (a[i]>m){
        m=a[i]
    }
    i++
}
var j=0
while (j<a.length){
    if (a[j]>s && a[j]!=m){
        s=a[j]
    }
    j++
}console.log(s)