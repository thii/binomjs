var Confidence = require('confidencejs');

// 2-tailed p-value
function getPValue(z) {
  var Z_MAX = 6;
  var w, x, y;
  
  if (z === 0.0) {
    x = 0.0;
  } else {
    y = 0.5 * Math.abs(z);
    if (y > (Z_MAX * 0.5)) {
      x = 1.0;
    } else if (y < 1.0) {
      w = y * y;
      x = ((((((((0.000124818987 * w - 0.001075204047) * w + 0.005198775019) * w - 0.019198292004) * w + 0.059054035642) * w - 0.151968751364) * w + 0.319152932694) * w - 0.531923007300) * w + 0.797884560593) * y * 2.0;
    } else {
      y -= 2.0;
      x = (((((((((((((-0.000045255659 * y + 0.000152529290) * y - 0.000019538132) * y - 0.000676904986) * y + 0.001390604284) * y - 0.000794620820) * y - 0.002034254874) * y + 0.006549791214) * y - 0.010557625006) * y + 0.011630447319) * y - 0.009279453341) * y + 0.005353579108) * y - 0.002141268741) * y + 0.000535310849) * y + 0.999936657524;
    }
  }

  return (1 - x) / 2;
};

function binomTest(trialsNum, successesNum, controllDataTrialsNum, controllDataSuccessesNum, confidenceRate) {
  var confidence = new Confidence();

  confidence.addVariant({
    id: 'A',
    name: 'Control Data',
    conversionCount: controllDataSuccessesNum,
    eventCount: controllDataTrialsNum
  })
  
  confidence.addVariant({
    id: 'B',
    name: 'Test Data',
    conversionCount: successesNum,
    eventCount: trialsNum
  })

  var confidenceTestResult = confidence.getResult();

  var averageSuccessRate = successesNum /  trialsNum;
  var minSuccessRate = confidenceTestResult.confidenceInterval.min / 100;
  var maxSuccessRate = confidenceTestResult.confidenceInterval.max / 100;
  var pValue = getPValue(confidence._zScore);
  var testResult;

  if (( (1 - confidenceRate) / 2 >= pValue ) && ( confidenceTestResult.winnerID == 'B' )) {
    testResult = true;
  } else {
    testResult = false;
  }

  return {
    averageSuccessRate: averageSuccessRate,
    minSuccessRate: minSuccessRate,
    maxSuccessRate: maxSuccessRate,
    pValue: pValue,
    testResult: testResult
  } 
}

console.log(binomTest(1000, 100, 1000, 50, 0.95));
