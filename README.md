# oddguard [![NPM version](https://img.shields.io/npm/v/oddguard.svg?style=flat)](https://www.npmjs.com/package/oddguard) [![NPM monthly downloads](https://img.shields.io/npm/dm/oddguard.svg?style=flat)](https://npmjs.org/package/oddguard) [![NPM total downloads](https://img.shields.io/npm/dt/oddguard.svg?style=flat)](https://npmjs.org/package/oddguard)   

> Returns `true` if the given number is an odd integer that does not exceed JavaScript’s `Number.MAX_SAFE_INTEGER`.

> Returns `true` if a number or string value is a finite number. Useful for regex matches, parsing, user input, and validation.

Please consider following this project's author, [M R Kishore Kumar](https://github.com/mrkishorekumar), and consider starring the project to show your :heart: and support.


## Install

Install with [npm](https://www.npmjs.com/):
  

```sh
$  npm install --save oddguard
```


## Usage

Works with strings or numbers.


```js

const { isOdd, isNumber } = require('oddguard');

// Odd checks

console.log(isOdd('1')); //=> true

console.log(isOdd('3')); //=> true

console.log(isOdd(0)); //=> false

console.log(isOdd(2)); //=> false

// Number validation

console.log(isNumber(42)); //=> true

console.log(isNumber('3.14')); //=> true

console.log(isNumber('foo')); //=> false

console.log(isNumber(NaN)); //=> false

```


## About

<details>

<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>

  

<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:
  

```sh
$  npm install && npm test
```
</details>


  
### Author

**M R Kishore Kumar**

* [LinkedIn Profile](https://linkedin.com/in/mrkishorekumar)

* [GitHub Profile](https://github.com/mrkishorekumar)
  

### License

Copyright © 2025, [Rigial](https://github.com/rigial).

Released under the [MIT License](LICENSE).

***