/*
JavaScript Programming Ex 7 
Functions
*/

/**
 * @description Log anything to the console
 * @param {*} obj The object to write to the console.
 */
function l(obj) {
    console.log(obj);
}

/**
 * This is a declarative function with no paramters or arguments
 * 
 */
function doThings() {
    l('I do stuff but have nothing to contribute or accept.'); 
}

doThings();

/**
 * @description Adds two  umbers. This is a decelarative function. Declarative functions are hoisted.
 * @param {number} value1 the first number
 * @param {number} value2 the second number
 *@returns {number} sume of value1 and value2
 */

 function add(value1,value2) {
     return value1 + value2;
 }

 /**
 * @description Sub two numbers. This is a function expression.
 * @param {number} value1 the first number
 * @param {number} value2 the second number
 *@returns {number} difference of value1 and value2
 */
let subtract = function(value1,value2){
    return value1 - value2
}

/**
 * @description Multiply two numbers. This is an Arrow function.
 * @param {number} value1 the first number
 * @param {number} value2 the second number
 *@returns {number} product of value1 and value2
 */
 let multiple = (value1,value2) => {return value1 * value2;}
   
 /**
 * @description Divide two numbers. This is an Arrow function.
 * @param {number} value1 the first number
 * @param {number} value2 the second number
 *@returns {number} Dividend of value1 and value2
 */
 let Divide = (value1,value2) => {return value1 / value2;}

 l("Call declarative add function");
 let a = add(3,2);
 l(a);
 l("~~~~~~~~~~~~~~");


 l("Call subtract function expression");
 let b = subtract(9,5);
 l(b);
 l("~~~~~~~~~~~~~~");

 l("Call multiple arrow function");
 let c = multiple(3,4);
 l(c);
 l("~~~~~~~~~~~~~~");

 l("Call divide arrow function");
 let d = multiple(12,4);
 l(d);
 l("~~~~~~~~~~~~~~");

 //Functions can be reassigned
 // Javascript is a dynamic language
 add = "Delon";
 l(add);
 add = 3*4
 l(add);

 l(subtract(add,10));

