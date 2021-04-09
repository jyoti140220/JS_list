var q= [
	"How many continents are there?",  	
	"What is the capital of India?",			
	"NG mei kaun se course padhaya jaata hai?"
]
var c=0
var o= [
	
	["Four", "Nine", "Seven", "Eight"],

	["Chandigarh", "Bhopal", "Chennai", "Delhi"],
	["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
var s=[3, 4, 1]
var fifty=[[1,3],[2,4],[1,4]]
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
    var user=parseInt(readlinesync("guess the answer or choose the 5050 :"))
    if (user!=5050){
        if (user==s[i]){
            console.log("Congrats! Your Answer is correct ")
        }else{
            console.log("Oops! Your Answer is wrong ")
            break
            
        }
        
    }
    else if (c==0){
        if (user==5050){
            c=c+1
            console.log(`${fifty[i]}`)
            var user2=parseInt(readlinesync("enetr your answer in which is in 5050 :"))
            if (user2==s[i]){
                console.log("Congrats! Your Answer is correct ")
        
            }else{
                console.log("Oops! Your Answer is wrong ")
                break
            }
        }
    }
    else if (c>0){
        console.log()
        console.log("you alredy use choose again please choose the one option in this quetion  :")
        console.log()
        
        console.log(`Q.${i+1}  ${q[i]}`)
        var j=0
        while (j<o[i].length){
            console.log(`     ${j+1}. ${o[i][j]}`)
            j++;
        }
        var user3=parseInt(readlinesync("enter again answer" ))
        if (user3==s[i]){
            console.log("Conggrats! Your Answer Is Correct ")
        }else{
            console.log("Oops! Your Answer Is Wrong ")
            break
        }

    }
    else if (user!=5050){
        if (user==s[i]){
            console.log("Congrats! Your Answer is correct ")
        }else{
            
        }
        console.log("Oops! Your Answer is wrong ")
        break
    }
    console.log()
    i++;
}