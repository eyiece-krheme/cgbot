const csvFilePath='grade_dist.csv'
const csv=require("csvtojson");
const fs=require('fs');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    let json = JSON.stringify(jsonObj);
    // console.log(json);
    
    let courses = [];
    i = 0;
    for(var x = 0; x < jsonObj.length; x++) {
      if(courses.length==0) {
        console.log("first subject");
        courses.push({"name": jsonObj[x].SUBJECT, "number":[jsonObj[x].NUMBER]});
      }
      else if(courses[i].name == jsonObj[x].SUBJECT) {
        console.log("new number");
        if(!jsonObj[x].NUMBER.includes("6A"))
          courses[i].number.push(jsonObj[x].NUMBER);
      }
      else {
        console.log("new subject");
        courses.push({"name": jsonObj[x].SUBJECT, "number":[jsonObj[x].NUMBER]});
        i+=1;
      }
    }

  console.log(courses)
  fs.writeFileSync('output.json', JSON.stringify(courses));
})

