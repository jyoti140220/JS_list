var a=[1,0];
var i=a.length-1
var cal=1
var count=0
while (i>=0){

    count=count+(a[i]*cal)
    cal=cal*2
    i--;

}console.log(count)