'use strict';

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
class ArtistPO {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total music runtime of ${this.totalRuntime} minutes.`;
  }
}

const artist1 = new ArtistPO("Johnny Cash", "Country", 450);
const artist2 = new ArtistPO("Pinkfong", "Children's", 120);

console.log(artist1.describe());
// Output: "Johnny Cash is a Country artist with a total music runtime of 450 minutes."

console.log(artist2.describe());
// Output: "Pinkfong is a Children's artist with a total music runtime of 120 minutes."

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

class Artist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.totalRuntime}.`;
  }
}

const artistInstances = [];

for (const artistObj of artistData) {
  const instance = new Artist(artistObj.name, artistObj.genre, artistObj.total);
  artistInstances.push(instance);
}

artistInstances.forEach((artist) => {
  console.log(artist.describe());
});

/* Output:
 * Pinkfong is a Children's music artist with a total runtime of 11:31.
 * Adriano Celentano is a Italian pop artist with a total runtime of 20:52.
 * Asake is a Afrobeats artist with a total runtime of 14:08.
 * Miyagi and Andy Panda is a Hip-hop artist with a total runtime of 16:21.
 * Johnny Cash is a Country artist with a total runtime of 15:40.
 */

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");

// Throws a TypeError because class constructors cannot be called without the 'new' keyword.

// ! Snippet two, an arrow function used as a method that reads this:
// const single = { title: "Hurt", artist: "Johnny Cash", describe: () => `${this.title} by ${this.artist}` };
// console.log(single.describe());

// Logs "undefined by undefined" because arrow functions do not have their own 'this' binding and inherit 'this' from the outer (global) scope.

// * Snippet three, the correct call. Uncomment after part one:
// console.log(new Artist("Asake", "Afrobeats", "14:08").describe());

// Successfully creates the instance and logs "Asake is a Afrobeats artist with a total runtime of 14:08."

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

class FeaturedArtist extends Artist {
  constructor(name, genre, totalRuntime, blurb) {
    super(name, genre, totalRuntime);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Spotlight: ${this.blurb}`;
  }
}

const featuredArtist = new FeaturedArtist(
  "Asake",
  "Afrobeats",
  "14:08",
  "Headlining this weekend's major summer festival!"
);

console.log(featuredArtist.describe());
/* Output:
 * Asake is a Afrobeats artist with a total runtime of 14:08. Spotlight: Headlining this weekend's major summer festival!
 */

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
// Equivalent in class syntax: constructor(name, genre) {
function ArtistOld(name, genre) {
  // Equivalent in class syntax: this.name = name;
  this.name = name;
  // same
  this.genre = genre;
}

// Equivalent in class syntax: describe() { ... } inside class body
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};

// Equivalent in class syntax: tag() { ... } inside class body
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

const oldArtist = new ArtistOld("Pinkfong", "Children's music");

console.log(oldArtist.describe());
// Output: "Pinkfong, Children's music"

console.log(oldArtist.tag());
// Output: "#childrens-music"

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

class ArtistPS {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.totalRuntime}.`;
  }

  static named(instances, name) {
    return instances.find(artist => artist.name === name);
  }
}

const artists = [
  new ArtistPS("Pinkfong", "Children's music", "11:31"),
  new ArtistPS("Asake", "Afrobeats", "14:08"),
  new ArtistPS("Johnny Cash", "Country", "15:40")
];

const foundArtist = ArtistPS.named(artists, "Asake");

if (foundArtist) {
  console.log(foundArtist.describe());
} else {
  console.log("Artist not found.");
}

/* Output:
 * Asake is a Afrobeats artist with a total runtime of 14:08.
 */

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
