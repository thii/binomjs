# binomjs [![CI Status](http://img.shields.io/travis/thii/binomjs.svg?style=flat)](https://travis-ci.org/thii/binomjs)

A binomial distribution testing library in JavaScript.

## Installation

- As a Node.js module

```
npm install binomjs
```

- As a component

```
component install thii/binomjs
```

## Building component

- Prerequisites: `uglify-js`

```
npm install uglify-js -g
```

- Building

```shell
component build -n binom
uglifyjs build/binom.js -o build/binom.min.js
```
The built version of binomjs will be put in the `build/` subdirectory.

## Example

```javascript
var Binom = require('binomjs');
var binom = new Binom();

// binom.test(trialsNum, successesNum, hypothesisTrialsNum, hypothesisSuccessesNum, confidenceRate)
var result = binom.test(1000, 100, 1000, 50, 0.95);
/*
{ averageSuccessRate: 0.1,
  minSuccessRate: 0.0814,
  maxSuccessRate: 0.1186,
  pValue: 0.024997895303140116,
  testResult: true,
  error: undefined }
*/

```

## Running Tests

```
npm test
```

## License
[MIT](http://thi.mit-license.org/)
