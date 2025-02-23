const max = Math.max(3,23,45,67,89,99);
const numbers =[3,5,7,8,3,856,33,22];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);

// use spread operators to copy
// Ex-1
const nums =[3,5,6,8,5];
const nums2 = nums;
nums2.push(12);
console.log(nums);

// Ex-2
const friends =[3,4,6,44];
const bondhu = friends;
const dosto =[...friends];
console.log(dosto);
friends.push(100);
console.log(friends)
console.log(dosto);

//Advance
const shonkha = [...friends,999]; //add extra elements while copy
console.log(shonkha);


