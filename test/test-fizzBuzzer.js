const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz if number is divisible by 3 but not 5', function() {
    const normalCases = [
      {a: 9, expected: 'fizz'},
      {a: 27, expected: 'fizz'},
      {a: -333, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should return buzz if number is divisible by 5 but not 3', function() {
    const normalCases = [
      {a: 5, expected: 'buzz'},
      {a: -25, expected: 'buzz'},
      {a: 110, expected: 'buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should return fizz-buzz if number is divisible by 5 and 3', function() {
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: -90, expected: 'fizz-buzz'},
      {a: 45, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});