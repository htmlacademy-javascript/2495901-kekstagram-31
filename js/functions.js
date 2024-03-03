const checkStringLength = (string = '', maxLength = 1) => string.length <= maxLength;


const isPalindrome = (string) => {
  if (!string) {
    return false;
  }
  string = string.replaceAll(' ', '').toUpperCase();

  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
