export function evaluateModel(output, groundTruth) {
  let score = 0;

  for (let i = 0; i < output.length; i++) {
    if (output[i] === groundTruth[i]) {
      score++;
    }
  }

  return {
    accuracy: score / output.length,
    total: output.length
  };
}
