var a=[12,1,-34,2,13,56,89,8,10]
var i=0
while (i<a.length){
    var j=0
    while (j<a.length){
        if (a[i]<a[j]){
            [a[i],a[j]]=[a[j],a[i]]
        
        }j++;
    }i++;
}console.log(a)