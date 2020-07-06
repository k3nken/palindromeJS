/*
A Palindrome is a word or phrase that is the same forwards of backwards.

Example: "Anna" backwards is "Anna"

Write a function that checks if a word or phrase is a palindrome.

Write some tests for your function.
*/

function palindromeCheck(str) {
    const regEx = /[\W_]/g;
    const lowCaseRegStr = str.toLowerCase().replace(regEx, '');
    const reversedStr = lowCaseRegStr.split('').reverse().join('');
    return reversedStr === lowCaseRegStr;
  }
  
  palindromeCheck('Anna');
  palindromeCheck('John');
  palindromeCheck(Anna);
  palindromeCheck('121');
  palindromeCheck(121);
  palindromeCheck('');
  palindromeCheck();
  palindromeCheck(true);
  palindromeCheck('tattarrattat');
  palindromeCheck('Sir, I demand, I am a maid named Iris');
  palindromeCheck('Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.');
  