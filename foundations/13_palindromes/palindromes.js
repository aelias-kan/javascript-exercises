const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

module.exports = palindromes;
