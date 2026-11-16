// Assignment 1 — Rout Academy Node JS BootCamp

// #region Part 1: Coding Questions (7.5 Grade)

// Q1. Convert the string "123" to a number and add 7. (0.5 Grade)
//     Output Example: 130
let toNum = "123";
let toNum1 = +toNum + 7;
let toNum2 = Number(toNum) + 7;
// console.log("toNum1 ==> ",toNum1);
// console.log("toNum2 ==> ",toNum2);

// Q2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
//     Input Example: 0
//     Output Example: "Invalid"
function checkIsValid(checkValue = 0) {
  return checkValue ? "Valid" : "Invalid";
}

// console.log(checkIsValid(1));

// Q3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
//     Output Example: 1, 3, 5, 7, 9

function q3() {
  const nums = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    nums.push(i);
  }
  return nums.join(", ");
}

// console.log(q3());

// Q4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
//     Input Example: [1, 2, 3, 4, 5]
//     Output Example: [2,4]
function q4(arr) {
  return arr.filter((num) => num % 2 === 0);
}
// console.log(q4([1, 2, 3, 4, 5]));

// Q5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
//     Input Example: [1, 2, 3], [4, 5, 6]
//     Output Example: [1, 2, 3, 4, 5, 6]
function q5(arr1, arr2) {
  return [...arr1, ...arr2];
}
// console.log(q5([1, 2, 3], [4, 5, 6]));

// Q6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
//     Input Example: 2
//     Output Example: "Monday"

function checkDayByNum(num) {
  switch (num) {
    case 1:
      return "Sunday";

    case 2:
      return "Monday";

    case 3:
      return "Tuesday";

    case 4:
      return "Wednesday";

    case 5:
      return "Thursday";

    case 6:
      return "Friday";

    case 7:
      return "Saturday";

    default:
      return "please pick number from 1 to 7 only.👾";
  }
}
// console.log(checkDayByNum(7));

// Q7. Create an array of strings and return their lengths using map method (0.5 Grade)
//     Input: ["a", "ab", "abc"]
//     Output Example: [1, 2, 3]
function q7(arr) {
  return arr.map((str) => str.length);
}
// console.log(q7(["a", "ab", "abc"]));

// Q8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
//     Input Example: 15
//     Output Example: "Divisible by both"

function isDividedBythreeAndFive(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else if (num % 3 === 0) {
    return "Divisible by three";
  } else if (num % 5 === 0) {
    return "Divisible by five";
  } else {
    return "Not divisible by any";
  }
}

// console.log(isDividedBythreeAndFive(0));

// Q9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
//     Input Example: 5
//     Output Example: 25

const squrNum = (num) => num ** 2;
// console.log(squrNum(2));

// Q10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
//      Input Example: const person = {name: 'John', age: 25}
//      Output Example: 'John is 25 years old'

function getValueByName(obj) {
  const { name, age } = obj;
  return `${name} is ${age} years old`;
}
// console.log(getValueByName({ name: "John", age: 25 }));

// Q11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
//      Input Example: 1, 2, 3, 4, 5
//      Output Example: 15

const sumNumModern = (...nums) => nums.reduce((total, num) => total + num, 0);
function sumNumOld(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
// console.log(sumNumModern(1, 2, 3, 4, 5));
// console.log(sumNumOld(1, 2, 3, 4, 5));

// Q12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
//      Output Example: "Success"
function testPromiseRes() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Success"), 3000),
  );
}
// const test = await testPromiseRes();
// console.log(test);

// Q13. Write a function to find the largest number in an array. (0.5 Grade)
//      Input Example: [1, 3, 7, 2, 4]
//      Output Example: 7

function maxNum(arrOfNum) {
  return Math.max(...arrOfNum);
}

// console.log(maxNum([1, 3, 7, 2, 4]));

// Q14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
//      Input Example: name: "John", age: 30}
//      Output Example: ["name", "age"]

function objectKeys(obj) {
  return Object.keys(obj);
}

// console.log(objectKeys({ name: "John", age: 30 }));

// Q15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
//      Input: "The quick brown fox"
//      Output: ["The", "quick", "brown", "fox"]

function splitStringBySpaceToArr(yourString) {
  return yourString.split(" ");
}
// console.log(splitStringBySpaceToArr("The quick brown fox"));

// #endregion

// #region Part 2: Essay Questions (2.5 Grade)
// Write each answer in your own words inside the comment block below its question.

// E1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
/*
forEach is an array method that we use to implement an action using the array element without causing any change to orginal array
or returning any value but it not support await or break even return not break to loop it act like continue.
for ...of also work with an array but it support await and you can stop the loop completly by using break or return
for..of is the modern loop statment and it support any itrable objects but forEach don't.
so for simple and direct action loop we can use forEach but for advaced use when we need to deal with promises or break the loop completley we use for ..of
*/

// E2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
/*
hoisting is when javascript engine register any declrations variable and function in memory first before the script file start execution
but not the expresion functions as it variable only will be hoisted not with it's declered function assigned to it that why when you excuted it you will get undefined if you use var,
and ReferenceError with let and const.
so if you console log any decleared variable it have deferent behaviour between the var and let, const as var will log undefined without throwing 
any error but let and const will throw an error (ReferenceError: Cannot access 'blockScoop' before initialization)
so what really happened is both var and let are hoisted but only var can we read its value before initialization but let, const can't.
that because javaScript engint it just write a log to tomporal dead zone where you can see that 
the variable is already defined but you can't access it's value yet before initialization.
*/
// console.log(blockScoop);
// const blockScoop = 1;
// console.log(globalScoop);
// var globalScoop = 1;
// testDecleardFun();
// testExpressionFun();
// function testDecleardFun() {
//   console.log("Declered Function hoisted");
// }
// const testExpressionFun = () => {
//   console.log("Expression Function not hoisted"); //==>ReferenceError: Cannot access 'testExpressionFun' before initialization
// };

// E3. What are the main differences between == and ===? (0.5 Grade)
/*
Coercion work here with double equal as it checking the value after the coercion happened so 1 == '1' will be true 
the trible equal is for checking the value and the type so 1 === '1' will be false.
*/

// E4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
/*
try...catch work as a circuit fuse so when you write a code within try block and there is something broken for any 
reason then instead to stop the code execution flow it will throw an error we can catch it in catch block by printing 
the error value that passed to the catch as parameter.
 The then..catch in promises is same as try..catch unless the then..catch working with promises and it works basicly 
if the then is flifiled we can get the resolve value and if it rejected we can also get the error value and same with promises
we can use try..catch with async await to handle the same senario was explained with promises.
*/

// E5. What's the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
/*
type conversion is where we convert the type from one type to another by explicit casting like for example :
Number("10") + 10 or String(10) + 10
type coercion where javascript engin convert the type by implicit casting that mean behind the scence and it workd with
+, -, ==  and if for example:
'1' + 1 ==>JS behind the sence '1' + String(1) ==> 11
'1' - 1 ==>JS behind the sence Number('1') + 1 ==> 0
if(0) ==> JS behind the sence if(Boolain(0)) ==> if(false)
'1' == 1 ==> JS behind the sence Number('1') == 1 ==> true 
*/

// #endregion
