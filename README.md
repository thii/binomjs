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

- Prerequisites: In order to build a minified version you need to have `uglify-js` installed globally.

```
npm install uglify-js -g
```

- Building

```shell
component install
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

The above example run in R:

```R
binom.test(100, 1000, p = 0.95, alternative = c("two.sided"), conf.level = 0.95)
```

Result in R:

```
	Exact binomial test

data:  100 and 1000
number of successes = 100, number of trials = 1000, p-value < 2.2e-16
alternative hypothesis: true probability of success is not equal to 0.95
95 percent confidence interval:
 0.08210533 0.12028794
sample estimates:
probability of success 
                   0.1 
```

## Running Tests

```
npm install
npm test
```

## License
[MIT](http://thi.mit-license.org/)
