const request = require('request');
const fs = require('fs')

request('http://saral.navgurukul.org/api/courses ', function (err, res, body) {
    // console.log(typeof(body))
    const dic_data=JSON.parse(body)
    const data = JSON.stringify(dic_data, null, 4);
    try {
        fs.writeFileSync('u.json', data);
    } catch (error) {
        console.error(err);
    }
    var courses=dic_data['availableCourses'],i=0,ids_list=[]
    while (i<courses.length){
        var ids=courses[i]["id"]
        console.log(`${i} ${courses[i]["name"]}  ${ids}`)
        console.log()
        ids_list.push(ids)
        i++;
    }
    // console.log(ids_list)
    var readlinesync=require('readline-sync').question
    var user=parseInt(readlinesync("choose one subject name by index :"))
    console.log(courses[user]["name"])
    console.log("*************************************** PERENT EXCERSIZE *****************************************")
    request("https://merakilearn.org/api/courses/"+ids_list[user]+"/exercises",function(error,resa,responseOfExerciseCoursesInText){
        // console.log(typeof(responseOfExerciseCoursesInText))
        const js_dic=JSON.parse(responseOfExerciseCoursesInText)
        // console.log(js_dic)
        const string_data=JSON.stringify(js_dic,null,4)
        // console.log("Exercise_"+ids_list[user]+".json")
        try {
            fs.writeFileSync('Exercise_'+ids_list[user]+".json", string_data);
        } catch (error) {
            console.error(err);
        }
        var i=0,slug_list=[],l=js_dic["data"]
        while (i<l.length){
            console.log(`${i} ${l[i]['name']}`)
            slug_list.push(l[i]['slug'])
            if (l[i]['childExercises'].length==0){
                console.log("    ",l[i]['childExercises'])
            }
            else{
                var j=0
                while (j<l[i]['childExercises'].length){
                    console.log(`    ${j} ${l[i]['childExercises'][j]['name']}`)
                    slug_list.push(l[i]['childExercises'][j]['slug'])
                    j++;
                }
            }
            console.log()
            i++
        
        }
    })


});


