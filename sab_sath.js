var e=[23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var total_count=0, even_count=0,odd_count=0;
var total_sum=0,even_sum=0,odd_sum=0;
var i=0;
while (i<e.length){
    total_count=total_count+1;
    total_sum=total_sum+e[i];
    if (e[i]%2==0){
        even_count++;
        even_sum+=e[i]
    }else{
        odd_count++;
        odd_sum+=e[i]
    }i++
}console.log(`sare number ka count :- ${total_count}`)
console.log(`sare number ka sum :- ${total_sum}`)
console.log(`sare number ka avarage  :-${parseInt(total_sum/total_count)}`)
console.log(`even number ka count :- ${even_count}`)
console.log(`even number ka sum :- ${even_sum}`)
console.log(`even number ka avarage :- ${parseInt(even_sum/even_count)}`)
console.log(`odd number ka count :- ${odd_count}`)
console.log(`odd number ka sum :- ${odd_sum}`)
console.log(`odd number ka avarage :- ${parseInt(odd_sum/odd_count)}`)

