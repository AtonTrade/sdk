export function reachConsensus(results) {
  const scores = results.map(r => r.accuracy);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  return {
    consensusScore: avg,
    validators: results.length
  };
}
