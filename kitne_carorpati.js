var kitna_paisa=[3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100] 
var carorepati=0,lakhpati=0,dilwale=0;
var i=0
while (i<kitna_paisa.length){
    if (kitna_paisa[i]>=10000000){
        carorepati++;
    }else if (kitna_paisa[i]>=100000){
        lakhpati++
    }else{
        dilwale++
    }i++


}console.log(`${carorepati} crorepati hai`)
console.log(`${lakhpati} Lakhapati hai`)
console.log(`${dilwale} Dilwalw hai`)


