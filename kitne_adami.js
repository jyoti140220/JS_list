var e= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var even_count=0
var odd_count=0
while (i<e.length){
    if (e[i]%2==0){
        even_count++;
    }else{
        odd_count++
    }
    i++;

}console.log("total even number :-",even_count)
console.log("total odd number :-",odd_count) 
// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]  