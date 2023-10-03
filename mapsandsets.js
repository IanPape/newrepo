// ## **Quick Question #1**

// What does the following code return?

// new Set([1,1,2,2,3,4])

// ********** 1.
        //  it returns : {1,2,3,4};

// ## **Quick Question #2**

// What does the following code return?

// [...new Set("referee")].join("")

// ********** 2. 
        // it returns "ref"

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// ********** 3.
  
//    { [1,2,3] => true;
//     [1,2,3] => false;
// };

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns 
// true or false if that array contains a duplicate.

//  ********** 
        4. const hasDuplicate = arr => new Set(arr).size !== arr.length;

// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
// and the values are the count of the vowels in the string.

//  ********** 5. 
 function vowelCount(str) {
    const vowels = "aeiou";
    const vowelMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
      }
    }
  
    return vowelMap;
  };

  
  