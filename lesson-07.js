'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Tiramisu",
  price: 4.50,
  isAvailable: true,
  allergens: ["dairy", "gluten", "eggs"]
};

console.log(menuItem.name);        // Output: "Tiramisu"
console.log(menuItem.isAvailable); // Output: true

const propertyKey = "price";
console.log(menuItem[propertyKey]); //* Bracket notation is required here because the property key is stored inside a variable (`propertyKey`).

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
menuItem.describe = function () {
    return `The ${this.name} costs €${this.price.toFixed(2)} and is currently ${this.isAvailable ? "in stock" : "out of stock"}.`;
}
console.log(menuItem.describe());
// Output: "The Tiramisu costs €4.50 and is currently in stock."

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  { name: "Croissant", price: 2.50, category: "Pastry", isAvailable: true },
  { name: "Eclair", price: 4.50, category: "Pastry", isAvailable: true },
  { name: "Sourdough Loaf", price: 6.00, category: "Bread", isAvailable: false },
  { name: "Espresso", price: 3.00, category: "Beverage", isAvailable: true },
  { name: "Tiramisu", price: 5.50, category: "Dessert", isAvailable: true }
];

for (const item of menuItems) {
  console.log(`[${item.category}] ${item.name} - €${item.price.toFixed(2)} (${item.isAvailable ? "In Stock" : "Sold Out"})`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const newMenuItems = [
  { name: "Vegetable Quiche", price: 5.50, isVegetarian: true },
  { name: "Ham & Cheese Croissant", price: 4.00, isVegetarian: false },
  { name: "Espresso", price: 2.50, isVegetarian: true },
  { name: "Sourdough Loaf", price: 4.50, isVegetarian: true },
  { name: "Beef Sandwich", price: 7.00, isVegetarian: false }
];

const vegetarianNames = newMenuItems
  .filter(item => item.isVegetarian)
  .map(item => item.name);

console.log("Vegetarian items:", vegetarianNames);
// Output: ["Vegetable Quiche", "Espresso", "Sourdough Loaf"]

const cheapItem = newMenuItems.find(item => item.price < 3.00);

console.log("First item under €3:", cheapItem);
// Output: { name: "Espresso", price: 2.5, isVegetarian: true }

// If no element in the array matches the condition, `find` returns `undefined`.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const newMenuItem = {
  name: "Tiramisu",
  price: 5.50,
  category: "Dessert",
  isVegetarian: true
};

console.log("Keys:", Object.keys(newMenuItem));
// Output: ["name", "price", "category", "isVegetarian"]

console.log("Values:", Object.values(newMenuItem));
// Output: ["Tiramisu", 5.5, "Dessert", true]

for (const [key, value] of Object.entries(newMenuItem)) {
  console.log(`${key}: ${value}`);
}
/* Output:
 * name: Tiramisu
 * price: 5.5
 * category: Dessert
 * isVegetarian: true
 */

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
const item = {
  name: "Tiramisu",
  price: 5.50,
  category: "Dessert"
};

const referenceAlias = item;

referenceAlias.price = 6.00;

console.log("Original item (mutated via referenceAlias):", item);


const itemWithNewPrice = {
  ...item,
  price: 7.50
};

console.log("Original item:", item);
// Output: { name: 'Tiramisu', price: 6, category: 'Dessert' }

console.log("Copy item with new price:", itemWithNewPrice);
// Output: { name: 'Tiramisu', price: 7.5, category: 'Dessert' }

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const frequencyCounter = {};

for (const word of words) {
  frequencyCounter[word] = (frequencyCounter[word] || 0) + 1;
}

console.log("Word Frequency Counter:", frequencyCounter);

const sortedEntries = Object.entries(frequencyCounter).sort(
  (entryA, entryB) => entryB[1] - entryA[1]
);

console.log("Sorted by Frequency (Descending):", sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
