const glass = {
    name :'Glass',  //property/keys : value;
    color : 'Golden',
    price: 12,
    isCleaned : true
}
console.log(glass);
// All properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

// All properties values
const values = Object.values(glass);
// [ 'Glass', 'Golden', 12, true ]
console.log(values);

const pair = Object.entries(glass);
// array of array, two dimensional array.
// [
//   [ 'name', 'Glass' ],
//   [ 'color', 'Golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]
console.log(pair);


// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze
Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

