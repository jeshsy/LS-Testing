# Testing

Topics:

 * Test Driven Development
 * [`Mocha`](https://mochajs.org/)
 * [`Chai`](http://chaijs.com/api/)
  * [Assertion Styles](http://chaijs.com/guide/styles/)
 * [`Assert`](http://chaijs.com/api/assert)
 * [`Expect`](http://chaijs.com/api/expect/)
 * [`Sinon`](http://chaijs.com/plugins/sinon-chai/)

## Project Description

 - Welcome to the wonderful world of [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development). Whether this is immediately clear to you or not, you have already familiarized yourselves with this process, only, the tests have been written for you beforehand. Now we start on the other side of the fence, where you have no tests, only working code. The goal of this sprint is to get you familiar with writing unit tests for JavaScript code. 

### Initialize Project

- Be sure to `npm install` to include the necessary dependancies. 
- To run your tests run the command over the corresponding directory/file that you're working in. ex. `npm run watch basic-javascript/tests/project-1.test.js`. 
  - This command will actually re-execute every time a change is saved in that file, so you can see your tests improve without having to run the command over and over again. 
- Once you're done with all the tests for that directory, run `npm test directory/tests`.
- Get started in the `basic-javascript` directory then move onto `advanced-javascript` when you're done.

### Notes/Hints

- Have fun watching your Nyan cat grow! 
- Test suite

```
  // a test suite is made up of test assertions. 
  // you can have multiple suites in a file. In mocha we use `describe()` to wrap a suite.
  // you can also have a suite full of suites.

  describe('Foo', () => { // this is a suite
    describe('Foo.bar', () => { // this is a suite
      it('should be a function', () => { // this is an assertion block
        const foo = foo.bar;
        expect(foo).to.be.a('function'); // this is an assertion using `expect`
        assert.typeOf(foo, 'function'); // this is an assertion using `assert`
      });
    });
  });
```
- sinon spy example
```
  // an example of a spy using sinon. 
    it('should call a given callback', () => {
      const callBack = sinon.spy();
      const each = arrayFunctions.each;
      each([1,2], callBack);
      expect(callBack).to.have.callCount(2); // will pass test
    });
```

## Extra Credit

- Congratulations you wonderful developer you! You have survived the basic requirements and are now ready to put your big TDD skills to the test! 
- Pop open the `node-extra-credit` file and study up on testing node endpoints. 
- Use either `assert` or `expect` its your time to shine so pick a style and stick with it.






npm run watch basic-javascript/tests/project-1.test.js
