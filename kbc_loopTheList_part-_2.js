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
var i=0
while (i<q.length){
    console.log(`Q.${i+1}  ${q[i]}`)
    var j=0
    while (j<o[i].length){
        console.log(`     ${j+1}. ${o[i][j]}`)
        j++;

    }console.log("\n")
    i++;
}