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

## Running the Tests

```
npm test
```

## License
[MIT](http://thi.mit-license.org/)
