function add(num1,num2){
    const result =num1+num2;
    console.log(result);
    return result;
}

// jodi 1 ta  number diye console log kori tahole Result ashbe---- oi number and Undefined NAN
const sum =add(33,44);


// default --> if value is not provided, take this as a default
// 1-default parameters
function add(num1,num2=0){
    const result =num1+num2;
    console.log(result);
    return result;
}
const sum1 =add(33);
//2-default string
function fullName (first,last=''){
    const full =first +' '+last;
    return full;
}
// 3-default array
function friends (numbs =[]){

}
// 4:default object
function person(human={}){

}