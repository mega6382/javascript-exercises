'use strict';

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menu = [
  "Coffee",
  "meal",
  "cake",
  "tiramisu",
  "roast",
];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length-1]);
console.log(menu[menu.length]);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menu.push("tea"); // end of array
console.log(menu);
menu.unshift("croissant"); // start of array
console.log(menu);
menu.pop(); // end of array
console.log(menu);
menu.shift(); // start of array
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (const item of menu) {
  console.log(item);
}

/*
 * Use a counting for loop when you need the numeric index, non-standard step sizes, or reverse iteration; use a for...of loop when you simply need to iterate sequentially through all values for cleaner, more readable code.
 */

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
const formattedPrices = prices.map(price => `€${price.toFixed(2)}`);
console.log(formattedPrices); 
// Output: ["€4.50", "€12.00", "€3.20", "€8.00"]

const cheapPrices = prices.filter(price => price < 5);
console.log(cheapPrices); 
// Output: [4.5, 3.2]

const expensivePrice = prices.find(price => price > 10);
console.log(expensivePrice);

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = ["Pinkfong", "Adriano Celentano", "Asake", "Miyagi and Andy Panda", "Johnny Cash"];

for (const artist of artists) {
  console.log(`🎵 ARTIST PROFILE\n   Name: ${artist}`);
}
// When adding a new item to the array, we did NOT have to change any of the looping logic.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const aliasMenu = menu;

aliasMenu.push("espresso");

console.log("Original menu:", menu);
console.log("Alias menu:   ", aliasMenu);

const menuCopy = [...menu];

menuCopy.push("croissant");

console.log("Original menu length:", menu.length); // 6
console.log("Copy menu length:    ", menuCopy.length); // 7

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum:", sum); 
// Output: 128

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest value:", largest); 
// Output: 41

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("javascript")); 
// Output: "tpircsavaj"


function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); 
// Output: 3 (e, o, o)

function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = reverseString(cleaned);
  return cleaned === reversed;
}

const testWords = ["racecar", "Madam", "JavaScript"];

for (const word of testWords) {
  console.log(`"${word}" is a palindrome: ${isPalindrome(word)}`);
}
/* Output:
 * "racecar" is a palindrome: true
 * "Madam" is a palindrome: true
 * "JavaScript" is a palindrome: false
 */

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
