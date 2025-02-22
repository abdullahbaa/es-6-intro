// var: no reason to use var
// let: Allow it to reassign
//const: Do not allow it to reassign

const money =25;
const rich = money + 50;
console.log(rich);

let count =0;
count =count+10;
console.log(count);

// Const er values Reassign kora jabe na But let and Var er values reassign kora jabe.

// Object
// Reassign hobena:Example-
const student ={
name :"maya pakhi",
class: 12
}
student ={name:"Abdullah"}
console.log(student)

// Reassign hobe:Example-
let students ={
    name: 'Abdullah',
    class: 13
}
student ={name:'Raihan',class:11}
console.log(students)