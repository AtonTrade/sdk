import express from "express";
import { evaluateModel } from "../core/evaluator.js";
import { createCommitment } from "../core/commitment.js";

const app = express();
app.use(express.json());

app.post("/evaluate", (req, res) => {
  const { output, groundTruth } = req.body;

  const result = evaluateModel(output, groundTruth);
  const commitment = createCommitment(result);

  res.json({
    result,
    commitment
  });
});

app.listen(3000, () => {
  console.log("ATON API running on port 3000");
});
