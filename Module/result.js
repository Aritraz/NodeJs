//To have better readability and reusability we generally break our project into small parts that are called modules, mostly in the parts have 
// separate functionality.For eg. here I have created a module named sum.js , which will do summation and return some value.
//The usage of module mainly is reusability.Means we can use the module anywhere in our project
//Now to use that sum() in this file we have to import the module here in this file just like we do in java. 

const {sum1,sum2} = require('./sum');
console.log(sum1());
console.log(sum2());


//This is an example of user defined module.
//Node js also has multiple predefined modules , like 'http' - to crate servers , 'fs'- handling file operations ....