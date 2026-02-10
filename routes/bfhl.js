import express from "express";
import { fibonacci, primes, lcmArray, hcfArray } from "../utils/math.js";
import { askAI } from "../utils/ai.js";
import { validateRequest } from "../utils/validate.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL
  });
});

router.post("/bfhl", async (req, res) => {
  try {
    const error = validateRequest(req.body);
    if (error) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL,
        error
      });
    }

    const key = Object.keys(req.body)[0];
    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(req.body.fibonacci);
        break;
      case "prime":
        data = primes(req.body.prime);
        break;
      case "lcm":
        data = lcmArray(req.body.lcm);
        break;
      case "hcf":
        data = hcfArray(req.body.hcf);
        break;
      case "AI":
        data = await askAI(req.body.AI);
        break;
    }

    res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });
  } catch {
    res.status(500).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      error: "Processing failed"
    });
  }
});

export default router;
