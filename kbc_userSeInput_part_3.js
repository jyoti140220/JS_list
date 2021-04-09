var q= [
	"How many continents are there?",  	
	"What is the capital of India?",			
	"NG mei kaun se course padhaya jaata hai?"
]

var o= [
	
	["Four", "Nine", "Seven", "Eight"],

	["Chandigarh", "Bhopal", "Chennai", "Delhi"],
	["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
var s=[3, 4, 1]
var i=0
while (i<q.length){
    console.log(`Q.${i+1}  ${q[i]}`)
    var j=0
    while (j<o[i].length){
        console.log(`     ${j+1}. ${o[i][j]}`)
        j++;
    }

    // console.log("***************** let's try, think about is what is the answer *********************")
    var readlinesync=require('readline-sync').question
    var user=parseInt(readlinesync("guess the answer :"))
    if (user==s[i]){
        console.log("Congrats! Your Answer is correct ")
    
    }else{
        console.log("Oops! Your Answer is wrong ")
    }
    console.log()
    i++;
}