import axios from "axios";

export async function validate(data) {
  try {
    const res = await axios.post("http://localhost:3000/evaluate", data);
    return res.data;
  } catch (err) {
    console.error("Validation failed:", err.message);
  }
}
