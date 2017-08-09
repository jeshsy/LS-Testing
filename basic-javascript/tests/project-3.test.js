const assert = require('chai').assert;
const funcs = require('../src/project-3');


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

  describe('`makeCat`', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'object');
      assert.equal(makeCat(42, 13), 42, 'makeCat working properly')
    });
  });

  describe('`addProperty`', () => {
    it('should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'object');
      assert.equal(addProperty(42, 13), 42, 'addProperty working properly')
    });
  });

  describe('`invokeMethod`', () => {
    it('should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.typeOf(invokeMethod, 'object');
      assert.equal(invokeMethod(42, 13), 42, 'invokeMethod working properly')
    });
  });

  describe('`multiplyMysteryNumberByFive`', () => {
    it('should be a function', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.typeOf(multiplyMysteryNumberByFive, 'object');
      assert.equal(multiplyMysteryNumberByFive(42, 13), 42, 'multiplyMysteryNumberByFive working properly')
    });
  });

  describe('`deleteProperty`', () => {
    it('should be a function', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.typeOf(deleteProperty, 'object');
      assert.equal(deleteProperty(42, 13), 42, 'deleteProperty working properly')
    });
  });

  describe('`newUser`', () => {
    it('should be a function', () => {
      const newUser = funcs.newUser;
      assert.typeOf(newUser, 'object');
      assert.equal(newUser(42, 13), 42, 'newUser working properly')
    });
  });

  describe('`hasEmail`', () => {
    it('should be a function', () => {
      const hasEmail = funcs.hasEmail;
      assert.typeOf(hasEmail, 'object');
      assert.equal(hasEmail(42, 13), 42, 'hasEmail working properly')
    });
  });

  describe('`hasProperty`', () => {
    it('should be a function', () => {
      const hasProperty = funcs.hasProperty;
      assert.typeOf(hasProperty, 'object');
      assert.equal(hasProperty(42, 13), 42, 'hasProperty working properly')
    });
  });

  describe('`verifyPassword`', () => {
    it('should be a function', () => {
      const verifyPassword = funcs.verifyPassword;
      assert.typeOf(verifyPassword, 'function');
      const temp = {
        password: 'lambdaschoolrocks'
      }
      assert.equal(verifyPassword(temp, 'lambdaschoolrocks'), true, 'verifyPassword working properly')
    });
  });

  describe('`updatePassword`', () => {
    it('should be a function', () => {
      const updatePassword = funcs.updatePassword;
      assert.typeOf(updatePassword, 'function');
      const temp = {
        password: 'lambdaschoolsucks'
      }
      const checker = updatePassword(temp, 'lambdaschoolrocks');
      assert.equal(checker.password, 'lambdaschoolrocks', 'updatePassword working properly')
    });
  });

  describe('`addFriend`', () => {
    it('should be a function', () => {
      const addFriend = funcs.addFriend;
      assert.typeOf(addFriend, 'function');
      const temp = {
        friends: ['Ason', 'Bson', 'Cson', 'Dson', 'Eson', 'Fson', 'Gson', 'Hson', 'Ison']
      };
      const checker = addFriend(temp, 'Json');
      const jayson = ['Ason', 'Bson', 'Cson', 'Dson', 'Eson', 'Fson', 'Gson', 'Hson', 'Ison', 'Json'];
      assert.deepEqual(checker.friends, jayson, 'addFriend working properly');
    });
  });

  describe('`setUsersToPremium`', () => {
    it('should be a function', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      assert.typeOf(setUsersToPremium, 'function');
      let temp = [
        {isPremium: false},
        {isPremium: false},
        {isPremium: false},
      ];
      let checker = setUsersToPremium(temp);
      assert.equal(checker[0].isPremium, true);
      assert.equal(checker[1].isPremium, true);
      assert.equal(checker[2].isPremium, true, 'setUsersToPremium working properly');
    });
  });

  describe('`sumUserPostLikes`', () => {
    it('should be a function', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      assert.typeOf(sumUserPostLikes, 'function');
      let temp = {
        posts: [
        {likes: 4},
        {likes: 5},
        {likes: 6},
        ]
      }
      assert.typeOf(sumUserPostLikes, 'function');
      assert.equal(sumUserPostLikes(temp), 15, 'sumUserPostLikes working properly');
    });
  });

  describe('`addCalculateDiscountPriceMethod`', () => {
    it('should be a function', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
      let temp = {
        price: 12,
        discountPercentage: 0.5
      }
      let runontemp = addCalculateDiscountPriceMethod(temp);
      assert.hasAnyKeys(runontemp, 'calculateDiscountPrice');
      assert.typeOf(runontemp.calculateDiscountPrice, 'function');
      assert.typeOf(runontemp.calculateDiscountPrice, 'function');
      assert.typeOf(runontemp.calculateDiscountPrice(), 'number');
      assert.equal(runontemp.calculateDiscountPrice(), 6, 'addCalculateDiscountPriceMethod working properly');
    });
  });

})