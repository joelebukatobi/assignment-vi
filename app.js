const Array = [
  "Akachi",
  "Nanman",
  "Wisdom",
  "Mofunanya",
  "Firenze",
  "Ada",
  "Adebayo",
  "Kosiso",
  "David",
  "Fayikemi",
];

const vowels = ["a", "e", "i", "o", "u"];
const text = "Hey there my name is Joel";
const pangram = "The quick brown fox jumps over the lazy dog";

/* 
  1.	Create an array with 10 String elements and write a script that will 
  display only those names from the array that starts with “A” or “F”. Your 
  script should display “No Result” in case there is no element starting with “A” or “F”
*/

// Anonymous Function
const nameFunc = () => {
  for (i = 0; i < Array.length; i++) {
    const elementArray = [...Array[i]];
    if (elementArray[0] == "A" || elementArray[0] == "F") {
      console.log(elementArray.join(""));
    } else {
      console.log("No Result");
    }
  }
};

// nameFunc();

/*
  2.	What are anonymous functions in JavaScript?
  Does it offer any benefits over a normal function? 
  Also write a script to show the usage of Anonymous Function.
*/

/*
  3.	Write a script to count the total number of vowels in a String.
*/
const vowelCheck = (string) => {
  const stringArray = [...string];
  counter = 0;

  for (i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter++;
    }
  }
  console.log(counter);
};

// vowelCheck(text);

/*
  4.	Write a Script that generates a random integer between 10 and 20.
*/
const randomNum = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 10);
  console.log(randomNumber);
};

// randomNum();

const checkPangram = (string) => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  // sorted by frequency ascending (http://en.wikipedia.org/wiki/Letter_frequency)
  string = string.toLowerCase().replace(/[^a-z]/g, "");
  for (var i = 0; i < 26; i++)
    if (string.indexOf(alphabets[i]) < 0) return false;
  return true;
};

console.log(checkPangram(pangram));
console.log(checkPangram(text));
