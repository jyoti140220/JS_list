var name=[ 'n', 'i', 't', 'i', 'n' ];
var i=1
var a=[]
while (i<=name.length){
    a.push(name[name.length-i])
    i++
}console.log(JSON.stringify(a)==JSON.stringify(name)); 

