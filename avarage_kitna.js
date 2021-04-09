var e= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var even_count=0
var even_sum=0
var odd_count=0
var odd_sum=0
while (i<e.length){
    if (e[i]%2==0){
        even_count++;
        even_sum+=e[i]
    }else{
        odd_count++
        odd_sum+=e[i]
    }
    i++;

}var s=parseInt(even_sum/even_count)
var r=parseInt(odd_sum/odd_count)
console.log("even number ka avarage :-",s)
console.log("odd number ka avarage :-",r) 