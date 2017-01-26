/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

function letterCount(x) {
  var letters = {};
  var regex = /^[a-z]/g;
  var splitX = x.toLowerCase().split("");
  splitX.forEach(function(el) {
    if (el.match(regex)) {
      if (((!Object.keys(letters).includes(el)))) {
        letters[el] = 1;
      } else {
        letters[el] += 1;
      }
    }
  });
var total = Object.values(letters).reduce(function(a,b) {
  return a + b;
}, 0);

for (var key in letters) {
  letters[key] = (letters[key]) / total;
}
console.log(letters);
}

letterCount("iuHIOJ OIJ  ve {}%^^$*urht()");
