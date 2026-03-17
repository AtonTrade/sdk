import crypto from "crypto";

export function createCommitment(data) {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
}
