// Function declaration
function add (a,b){
    const result =a+b;
    return a+b;

}

// function expression 
const add2 =function(a,b){
    return a+b;
}

// arrow function
const add3 =(a,b) => a+b;
const add4 =(num1,num2,num3,num4) =>num1+num2+num3+num4;

const add5 =(x,y,z) => (x /y (y +z));

const sum = add(12,33);
const sum2 = add2(33,66);
const sum3 = add4(2,5,7,9);
const number = add5(44,80,100);
console.log(sum,sum2,sum3);