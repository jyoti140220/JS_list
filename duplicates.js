var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11];
var m=[]
var i=0
while (i<n.length){
    if (m.includes(n[i])==false){
        m.push(n[i])
    }i++;
}console.log(m)