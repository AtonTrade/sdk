import axios from "axios";

export async function evaluateModel({ modelOutput, groundTruth }) {
  const res = await axios.post("http://localhost:3000/evaluate", {
    output: modelOutput,
    groundTruth
  });

  return res.data;
}
