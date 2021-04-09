var b=[
    ["jyoti","isha","moni"],
    ["pooja","maan","jaan"],
    ["parveen","banti","mahi"]
]
var i=0;
var q=[],m=[]
while (i<b.length){
    var j=0
    while (j<b[i].length){
        if (i==j){
            q.push(b[i][j])
        }if (i==2-j){
            m.push(b[i][j])
        }j++
    }i++
}console.log(q)
console.log(m)