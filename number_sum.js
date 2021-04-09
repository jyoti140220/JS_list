var a=numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0;
let sum=0
while (i<a.length){
    if (a[i]>=20 && a[i]<=40){
        sum=sum+a[i]
    }
    i++;
}console.log(sum)