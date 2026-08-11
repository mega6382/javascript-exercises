'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "My Shop";
console.log(shopName); // Const because the name will most likely not change
const shopAddress = "1 MeinStrasse, Meinstadt, 00000";
console.log(shopAddress); // Similar to name, the address is also unlikely to change anytime soon
const shopType = "Clothing";
console.log(shopType); // The shop's category/type is also not likely to change
let openingTimes = "Mo-Fri 10:00 - 22:00";
console.log(openingTimes); // The opening times can change regularly, due to holidays, weather, personal reasons etc
let shopCatalog = "01.01.2026-31.01.2026";
console.log(shopCatalog); // The shop's catalog is also likely to change regularly as the inventory changes


// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof shopName);
console.log(typeof shopAddress);
console.log(typeof shopType);
console.log(typeof shopCatalog);
console.log(typeof openingTimes);
console.log(typeof null); // this results in object, and that is a famous historical bug in js
console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let foo;
let bar = null;
console.log(typeof foo);
console.log(typeof bar);
// undefined means a variable has been declared but has not been assigned, where as null is a kind of empty assignment.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";
const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBool = Boolean(flagText);
const phoneNumber = 124123213;
const phoneText = String(phoneNumber);
console.log(typeof priceNumber);
console.log(typeof countNumber);
console.log(typeof flagBool);
console.log(typeof phoneText);
// if a string that contains actual text instead of a number like "Test" will result in NaN when conversion would be attempted on it.



// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
let openingHour = 7;
let loafCount = 12;
console.log(loafCount);
// Changed bakeryName to let from const, as reassignment is needed. Added let to openingHour because "use strict" requires that all variables be declared. Moved the declaration of loadCount to above it's console log, so that the variable is available before it's called.


// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
