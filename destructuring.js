const actor ={
    name: 'Abdullah',
    age: 25,
    phone: '01792527058',
    money: 12000
}
// const phone = actor.phone;
// const name = actor.name;
// const age =actor.age;

// How to destructure these codes.......
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age:boyosh} = actor

console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
console.log(boyosh);
// console.log(age);
// console.log(age);
// console.log(age);


// array destructuring

const numbers =[45,55];
const [first, second] = numbers;
const [x, y] = [12, 44];

console.log(numbers);

// advance
function doubleThem (a, b){
    return [a*2, b*4];
}
const [prothom,ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);

