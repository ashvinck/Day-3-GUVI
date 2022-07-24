// This is the given JSON object.
let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohan","age":37,"company":"Flipkart"},
    {"person":"Nick","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

// Iteration of JSON using the normal "for" loop.
for (let i = 0; i < object.length; i++){
    console.log(`
Name : ${object[i].person}
Age : ${object[i].age}
Company : ${object[i].company}`);
}

// Iteration of JSON using the "" for in "" loop.
  for (const index in object){
    console.log(`
    Name : ${object[index].person}
    Age : ${object[index].age}
    Company : ${object[index].company}`);
    }

//iteration of JSON using the  "forEach" loop.
object.forEach((details) => {
    console.log(`
Name : ${details.person}
Age : ${details.age}
Company : ${details.company}`)});


// Iteration of JSON using the "for of" loop.
  for (const objects of object){
    console.log(`
Name : ${objects.person}
Age : ${objects.age}
Company : ${objects.company}
`)};

/* expected output for all the loops.
Name : John
Age : 30
Company : Google

Name : Mohan
Age : 37
Company : Flipkart

Name : Nick
Age : 38
Company : Amazon

Name : Sohan
Age : 40
Company : Myntra

Name : Jenny
Age : 70
Company : Apple
*/
