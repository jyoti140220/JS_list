var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var splitString=mainStr.split(" ")
// console.log(splitString)
var i=0
var df=" "
while (i<splitString.length){
    if (splitString[i]=="over"){
        df+="on"+" "
    }else{
        df+=splitString[i]+" "
    }i=i+1
}console.log(df)
