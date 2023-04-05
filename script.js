// complete the given function

function palindrome(str){
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Compare the string with its reverse
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
