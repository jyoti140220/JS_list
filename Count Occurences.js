var a=["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];
var e=[]
var i=0
while (i<a.length){
    if (e.includes(a[i])==false){
        e.push(a[i])
    }
    i=i+1

}
var i=0,l=[]
while (i<e.length){
    var j=0,c=0,k=[]

    while (j<a.length){
        if (e[i]==a[j]){
            c++;
        }
        j++;

    }k.push(e[i],c)
    l.push(k)
    i++;
}console.log(l)





// var a=["jyoti","lk","dfd","qw"];
// if (a.includes('🍰')==false){
//     console.log("****")
// }
// if (a.includes("jyoti")==false){
//     console.log("LL")
// } 
// // console.log(a.includes(1)); 

