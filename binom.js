var Confidence = require('confidence');

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
  var testResult;

  if (( confidenceRate >= confidenceTestResult.confidencePercent / 100 ) && ( confidenceTestResult.winnerID == 'B' )) {
    testResult = true;
  } else {
    testResult = false;
  }

  return {
    averageSuccessRate: averageSuccessRate,
    minSuccessRate: minSuccessRate,
    maxSuccessRate: maxSuccessRate,
    testResult: testResult
  } 
}

console.log(binomTest(1000, 100, 1000, 50, 0.95));
