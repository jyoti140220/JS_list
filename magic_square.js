var a=[
    [8,3,4],
    [1,5,9],
    [6,7,2]
]
var i=0
var sum=0
var L_digo=0, R_digo=0
while (i<a.length){
    var raw=0,colm=0,j=0
    while (j<a[i].length){
        raw=raw+a[i][j]
        colm=colm+a[j][i]
        if (i==2-j){
            L_digo=L_digo+a[i][j]
        }if (i==j){
            R_digo=R_digo+a[i][j]
        }j=j+1
    }i=i+1
    console.log(`${i} raw ka sum :- ${raw}`)
    console.log(`${i} colum ka sum :- ${colm}`)
}console.log(`left digonal ka sum :- ${L_digo} `)
console.log(`right digonal ka sum ${R_digo}`)
console.log()
if (raw==colm){
    if (colm==R_digo){
        if (R_digo==L_digo){
            if (L_digo==colm){
                console.log("it is magic square")
            }
        }
    }
}else{
    console.log("it is not magic square")
}
