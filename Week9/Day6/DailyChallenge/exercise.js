// Instructions:
// Create a function that:
// * takes in two strings as two parameters
// * and returns a boolean that indicates whether or not the first string is an anagram of the second string.
//
// Some Help:
// * What is an anagram? An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
// * Example of anagrams:
//   "Astronomer" is an anagram of "Moon starer"
//   "School master" is an anagram of "The classroom"
//   "The Morse Code" is an anagram of "Here come dots"
// * Do we need to consider whitespace? Trim whitespace prior to comparison.

function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character frequency maps
  const charCount1 = {};
  const charCount2 = {};

  // Count character frequencies in both strings
  for (let i = 0; i < cleanStr1.length; i++) {
    charCount1[cleanStr1[i]] = (charCount1[cleanStr1[i]] || 0) + 1;
    charCount2[cleanStr2[i]] = (charCount2[cleanStr2[i]] || 0) + 1;
  }

  // Compare character frequencies
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Test the function
console.log(isAnagram("Astronomer", "Moon starer")); // Should return true
console.log(isAnagram("School master", "The classroom")); // Should return true
console.log(isAnagram("The Morse Code", "Here come dots")); // Should return true
console.log(isAnagram("Hello", "World")); // Should return false
