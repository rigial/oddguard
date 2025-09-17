import { assert } from "chai";
import { isOdd, isNumber } from '../src';

describe('isOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(!isOdd('2'));
    assert(isOdd('1'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isOdd(undefined), /expected a number/);
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});

describe('is a number', function() {
  const fixtures: (number | string)[] = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,
    1,
    1.1,
    10,
    10.1,
    100,
    -100,
    '0.1',
    '-0.1',
    '-1.1',
    '0',
    '012',
    '0xff',
    '1',
    '1.1',
    '10',
    '10.10',
    '100',
    '5e3',
    '   56\r\n  ', // issue#3
    Math.LN2,
    parseInt('012'),
    parseFloat('012'),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),
    Number.MAX_VALUE,
    Number.MIN_VALUE,
    '0.0',
    '0x0',
    '0e+5',
    '000',
    '0.0e-5',
    '0.0E5',
    +'',
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +false,
    +Math.LN2,
    +true,
    // +null,
    +new Date()
  ];

  fixtures.forEach(function(num: number | string, idx: number) {
    it(JSON.stringify(num) + ' should be a number', function() {
      assert(isNumber(num), 'expected "' + String(num) + '" to be a number');
    });
  });
});

describe('is not a number', function() {
  const fixtures: any[] = [
    '   ', // issue#3
    '\r\n\t', // issue#3
    '',
    '',
    '3a',
    'abc',
    'false',
    'null',
    'true',
    'undefined',
    +'abc',
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    // +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function() {},
    function() {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {}
  ];

  fixtures.forEach(function(num: any) {
    it(JSON.stringify(num) + ' should not be a number', function() {
      assert(!isNumber(num), 'expected "' + String(num) + '" to not be a number');
    });
  });
});