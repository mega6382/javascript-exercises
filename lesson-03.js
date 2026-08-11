'use strict';

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "My Shop";
const openingHour = 10;
const closingHour = 22;
console.log(`Welcome to ${shopName}! We are open from ${openingHour} to ${closingHour}`);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
const clean = messy
.trim() //// Removes leading and trailing whitespace
.replace(/\s+/g, " ") // replae the internal repeated whitespaes to just 1
.replace('Sarah', 'Basil') // replace a word
.toLowerCase(); // change the case of the string
console.log(clean);


// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";
console.log(product.length);
const targetWord = "whole";
const wordIndex = product.indexOf(targetWord);
console.log(wordIndex);
const slicedWord = product.slice(wordIndex, wordIndex + targetWord.length);
console.log(slicedWord);
const flavors = flavorList.split(",");
console.log(flavors);

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
console.log(`The final price is $${finalPrice.toFixed(2)}.`); // The formatting step must come last because .toFixed() converts a Number into a String.


// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const number = Math.floor(Math.random() * 6) + 1;
console.log(number);
const customRandom = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(customRandom);
// Multiplying Math.random() by 11 covers the total count of possible values, Math.floor() rounds it down to a whole integer between 0 and 10, and adding 10 shifts the starting point up to produce a range from 10 to 20 inclusive.


// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const orderNumber = "42";
const paddedOrderNumber = orderNumber.padStart(6, "0");

console.log(paddedOrderNumber);
/*
 * Method: String.padStart()
 * Description: The padStart() method pads the beginning of a string with a specified target character until it reaches the desired total length.
 */

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "Max";
const lastName = "Mustermann";

const username = `${firstName.slice(0, 1)}${lastName}`.toLowerCase();
console.log(username);


const adjective = "sparkly";
const noun = "badger";
const verb = "moonwalked";
const place = "grocery store checkout line";

const madLibStory = `The ${adjective} ${noun} casually ${verb} through the local ${place}.`;

console.log(madLibStory);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
