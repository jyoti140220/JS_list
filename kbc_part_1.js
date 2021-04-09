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
console.log("Aapka Sawaal hai :")
console.log(q[1])
console.log("\n")
console.log("Aapake option hai :")
var i=0
while (i<o[1].length){
    console.log(`${i+1}. ${o[1][i]}`)
    i++;
}

