var Binom = require('../binom');

module.exports['Test'] = {

  'Test result should be true when test data is the winner': function(test) {

    var binom = new Binom();
    test.ok(binom);

    var result = binom.test(10000, 9999, 10000, 500, 0.95);
    test.ok(result.averageSuccessRate >= result.minSuccessRate, 'Average success rate should equal to or greater than min success rate');
    test.ok(result.averageSuccessRate <= result.maxSuccessRate, 'Average success rate should equal to or less than min success rate');
    test.equal(result.testResult, true, 'Test result should be true when average success rate falls between min and max success rates');
    test.equal(result.error, null, 'There should be no error');

    test.done();
  },

  'Test result should be false when there is no clear winner': function(test) {

    var binom = new Binom();
    test.ok(binom);

    var result = binom.test(10000, 5001, 10000, 5000, 0.95);
    test.equal(result.minSuccessRate, undefined, 'There should be no min success rate');
    test.equal(result.maxSuccessRate, undefined, 'There should be no max success rate');
    test.ok(!result.testResult, 'Test result should be false');
    test.equal(result.error, 'There is no winner, the results are too close.', 'There should be an error');

    test.done();
  },

  'Test result should be false when control data is the winner': function(test) {

    var binom = new Binom();
    test.ok(binom);

    var result = binom.test(10000, 500, 10000, 9999, 0.95);
    test.ok(result.averageSuccessRate >= result.minSuccessRate, 'Average success rate should equal to or greater than min success rate');
    test.ok(result.averageSuccessRate <= result.maxSuccessRate, 'Average success rate should equal to or less than min success rate');
    test.equal(result.testResult, false, 'Test result should be false when the winner is control data');
    test.equal(result.error, null, 'There should be no error');

    test.done();
  },
};
