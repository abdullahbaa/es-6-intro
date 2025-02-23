const diffrence  = (x , y) => x - y;
const multiply =(f1,f2,f3,f4) => f1*f2*f3*f4;

// Single or One parameter
// EX-1
const getage =(person) => person.age;
const student ={name:`abdullah`,age:25};
const age = (student);
console.log(age);

// EX-2
const aims =(employee) => employee.totalEmployee;
const emplo ={companyName:'aimsbd',totalEmployee:44};
const totalEmp =(emplo);
console.log(totalEmp);

// EX-3
const hub = numbers => numbers*2;

// No parameter
const getPI =() =>Math.PI;
console.log(getPI());

// Large Arrow Function: if you want to get anything returned from this function, then you have to return keyword
const doMath =(x,y,z) =>{
    const sum =x+y+z;
    const mult =x*y*z;
    const result =sum + mult;
    return result;
}
