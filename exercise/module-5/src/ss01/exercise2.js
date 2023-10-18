// exercise1
const isPrime = (num =>{
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
});
console.log(isPrime(15)); // false
console.log(isPrime(2)); //true
console.log(isPrime(1)); // false
console.log(isPrime(49)); // false
console.log(isPrime(47)); // true



let arr = [2,3,9,15,18,23,31,48,47,1];
const result = arr.filter(number =>
    (isPrime(number))
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

const student = {
    firstName: person.firstName,
    gender:  person.gender,
    degree: person.education.degree,
    english :person.languages[0]

};
console.log(student);

//exercise3
const getInfo = ({firstName = "Quan",degree = "NA"}) =>{
    console.log(firstName)
    console.log(degree)
}
getInfo(student)