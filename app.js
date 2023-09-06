
// 1) Variable


// 2) Basic Condition
// <, >, ===, <=, >=, !==, ||, &&


// 3) Array

// const numbers = [23, 54, 67, 77]
// numbers.push(110);
// for(number of numbers){
//     console.log(number);
// }



// 4) Object

// const myObj = { name: 'Sohel Rana', job: 'Freelancer', other: 'None' }
// myObj.name;
// myObj['job'];



// 5) Arrow function

// const funcName = () => 'This text will return automatic';
// const funcName = parameterName => 'This text will return automatic';
// const funcName = parameterName => {
//     return 'This is multiline arrow function';
// }




// // 6) Spread Operator
// const numbers = [23, 54, 67, 77, 11, 6, 4, 8, 2, 43, 45, 0, 6];
// const copyArr = [...numbers]
// numbers.push(222);
// // console.log(copyArr);
// copyArr.push(2222);
// // console.log(copyArr);
// // Array method

// // const myMap = copyArr.map(element => element+2)
// // console.log(myMap);

// // copyArr.forEach(element => {
// //     console.log( element + 2 );
// // })

// // const myFilter = copyArr.map(element => {
// //     if(element < 20){
// //         console.log(element);
// //     }

// // })

// const myFind = copyArr.find(element => {
//     if(element === 2222){
//         console.log(element);
//     }

// })

// const person = [
//     {name: 'Kamal', job: 'Teacher', house: 'Bolaishimul', LiveIn: 'Kendua'},
//     {name: 'Jamal', job: 'farmer', house: 'Bejgau', LiveIn: 'Bolaishimul'},
//     {name: 'Hafiz', job: 'Teacher', house: 'Pubodola', LiveIn: 'Mymensingh'},
//     {name: 'Araf', job: 'Programmer', house: 'Bolaishimul', LiveIn: 'Dhaka'}
// ]

// // const newpersonArry = person.filter(element => element.job === 'Teacher');
// const newpersonArry = person.filter(element => {
//     if(element.job === 'Teacher'){
//         return element;
//     }
// });
// console.log(newpersonArry);









// // 7) Distructuring

// const persons = [
//     { name: 'Kamal', job: 'Teacher', house: 'Bolaishimul', LiveIn: 'Kendua' },
//     { name: 'Jamal', job: 'farmer', house: 'Bejgau', LiveIn: 'Bolaishimul' },
//     { name: 'Hafiz', job: 'Teacher', house: 'Pubodola', LiveIn: 'Mymensingh' },
//     { name: 'Araf', job: 'Programmer', house: 'Bolaishimul', LiveIn: 'Dhaka' }
// ]

// // const [, gram, , bari] = persons;
// // console.log(bari);

const Person = { name: 'Kamal', job: 'Teacher', house: 'Bolaishimul', LiveIn: 'Kendua' };
// const { house: bari, name: nam } = Person;
// console.log(bari, nam);

// const funcName = ({ LiveIn }) => {
//     console.log(LiveIn)
// }
// funcName(Person)




// 8 fetch API

// falsy value = '', 0, false, undefined, null
// truthy value = '12', 12, {}, [], true

const varName = 12;
if (!varName) {
    console.log(varName);
} else {
    console.log('This is false');
}



const stringyfied = JSON.stringify(Person);

console.log(stringyfied);

console.log(JSON.parse(stringyfied));





