const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {

  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
      assert.equal(getBiggest(42, 13), 42, 'getBiggest working properly')
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
      assert.equal(greeting('German'), 'Guten Tag!', 'greeting working properly in German');
      assert.equal(greeting('English'), 'Hello!', 'greeting working properly in English');
      assert.equal(greeting('Spanish'), 'Hola!', 'greeting working properly in Spanish');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
      assert.equal(isTenOrFive(5), true, 'isTenOrFive working properly');
      assert.equal(isTenOrFive(1), false, 'isTenOrFive working properly');
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
      assert.equal(isInRange(1), false, 'isInRange working properly');
      assert.equal(isInRange(24), true, 'isInRange working properly');
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
      assert.equal(isInteger(24.4), false, 'isInteger working properly');
      assert.equal(isInteger(24), true, 'isInteger working properly');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
      assert.equal(fizzBuzz(15), 'fizzbuzz', 'fizzBuzz working properly');
      assert.equal(fizzBuzz(24), 'fizz', 'fizzBuzz working properly');
      assert.equal(fizzBuzz(50), 'buzz', 'fizzBuzz working properly');
      assert.equal(fizzBuzz(4), 4, 'fizzBuzz working properly');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
      assert.equal(isPrime(4), false, 'isPrime working properly');
      assert.equal(isPrime(2011), true, 'isPrime working properly');
      assert.equal(isPrime(1), false, 'isPrime working properly');

    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
      const arr = ['Luna', 'Mirana'];
      assert.equal(returnFirst(arr), 'Luna', 'returnFirst working properly');
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
      const arr = ['Luna', 'Mirana'];
      assert.equal(returnLast(arr), 'Mirana', 'returnLast working properly');
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
      const arr = ['Luna', 'Mirana'];
      assert.equal(getArrayLength(arr), 2, 'getArrayLength working properly');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
      let arr = [2, 41];
      arr = incrementByOne(arr);
      const arr2 = [3, 42];
      const bool = (x, x2) => {
        if (x.length != x2.length) return false;
        for (let i = 0; i < x2.length; i++) {
          if (x[i] != x2[i]) return false;
        }
        return true;
      }
      assert.equal(bool(arr, arr2), true, 'incrementByOne working properly');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
      let arr = [ 'Justice', 'rains', 'from'];
      const arr2 =  ['Justice', 'rains', 'from', 'above!'];
      arr = addItemToArray(arr, 'above!');
      const bool = (x, x2) => {
        if (x.length != x2.length) return false;
        for (let i = 0; i < x2.length; i++) {
          if (x[i] != x2[i]) return false;
        }
        return true;
      }
      assert.equal(bool(arr, arr2), true, 'addItemToArray working properly');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
      let arr = [ 'rains', 'from', 'above!'];
      const arr2 =  ['Justice', 'rains', 'from', 'above!'];
      arr = addItemToFront(arr, 'Justice');
      const bool = (x, x2) => {
        if (x.length != x2.length) return false;
        for (let i = 0; i < x2.length; i++) {
          if (x[i] != x2[i]) return false;
        }
        return true;
      }
      assert.equal(bool(arr, arr2), true, 'addItemToFront working properly');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
      const arr = ['Heroes', 'never', 'die!'];
      assert.equal(wordsToSentence(arr), 'Heroes never die!', 'wordsToSentence working properly' ) /*Helden sterben nicht!*/
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
      const arr = [69, 8675309, 42, 3, 713];
      assert.equal(contains(arr, 80085), false,) 
      assert.equal(contains(arr, 8675309), true, 'contains working properly' ) /*JENNY I'VE GOT YOUR NUMBER*/
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
      const arr = [69, 8675309, 42, 3, 713];
      assert.equal(addNumbers(arr), 8676136, 'addNumbers working properly' ) /*The answer to the Ultimate Question of Life, the Universe, and Everything*/
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
      const arr = [69, 8675309, 42, 3, 713];
      assert.equal(averageTestScore(arr), 1735227.2, 'averageTestScore working properly' ) /*3 is a magic number*/
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
      const arr = [69, 8675309, 42, 3, 713];
      assert.equal(largestNumber(arr), 8675309, 'largestNumber working properly' ) /*What's in there, Hagrid?*/
    });
  });

})