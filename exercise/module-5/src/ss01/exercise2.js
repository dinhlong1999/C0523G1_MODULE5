// exercise1
let prime = (num =>{
    let flag = true;
    if (num === 1){
        flag = false;
    }
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = false
            }
        }
    }
    return flag;
})
console.log(prime(15)); // false
console.log(prime(2)); //true
console.log(prime(1)); // false
console.log(prime(49)); // false
console.log(prime(47)); // true



let arr = [2,3,9,15,18,23,31,48,47,1];
let result = arr.filter(number =>
    (prime(number))
);
console.log(result);

//exercise2
const person ={
    firstName : "John",
    lastName : "Doe",
    age : 30,
    gender : "male",
    occupation : 'developer',
    nationality :'American',
    city: 'New York',
    hobbies : ['reading', 'traveling','photography'],
    languages : ['English', 'Spanish'],
    education :{
        degree : 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University',
    }
};
//exercise2
let student = {
    firstName: person.firstName,
    gender:  person.gender,
    degree: person.education.degree,
    english :person.languages[0]

}
console.log(student);

//exercise3
let getInfo = ({firstName = "Quan",degree = "NA"}) =>{
    console.log(firstName)
    console.log(degree)
}
getInfo(student)