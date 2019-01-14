flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  
  fizzBuzz: function fizzBuzz(num) {
    const obj = {
      isDivisibleByThreeAndFive: { message: 'fizzbuzz' },
      isDivisibleByThree: { message: 'fizz' },
      isDivisibleByFive: { message: 'buzz' },
    };
    if (num && !isNaN(num)) {
      const isDivisibleByThreeAndFive = num % 3 === 0 && num % 5 === 0;
      if (isDivisibleByThreeAndFive) {
        return obj.isDivisibleByThreeAndFive.message;
      } else if (num % 3 === 0) {
        return obj.isDivisibleByThree.message;
      } else if (num % 5 === 0) {
        return obj.isDivisibleByFive.message;
      }
      return num;
    }
    return false;
  },
};
