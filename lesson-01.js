'use strict';

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/**
 *  Welcome to Node.js v26.3.0.
    Type ".help" for more information.
    > 4*3423+232-423/.1
    9694
    > 53434*323/2
    8629591
    > 3234/54+43*4322
    185905.88888888888
    > 764-723+643/3+34*432
    14943.333333333334
    > 
 */

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log("bye world");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// the file remain unchanged at first and still showed the first greeting, upon saving it reflected the latest code change in the output.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// it was same in terms of what the output was but different in terms of what else it showed, whilst nodejs just outputed the actual value, but devtools also proved reference to where the console log came from(file + line number)

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/**
 *  node lesson-01.js                                                     ✔  system   at 19:11:34  
    node:internal/modules/cjs/loader:1522
      throw err;
      ^

    Error: Cannot find module '/private/var/www/fun/lesson-01.js'
        at Module._resolveFilename (node:internal/modules/cjs/loader:1519:15)
        at wrapResolveFilename (node:internal/modules/cjs/loader:1073:27)
        at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1097:10)
        at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1124:12)
        at Module._load (node:internal/modules/cjs/loader:1296:5)
        at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
        at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
        at node:internal/main/run_main_module:33:47 {
      code: 'MODULE_NOT_FOUND',
      requireStack: []
    }

    Node.js v26.3.0
 */


// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
