export const validateRequest = (body) => {
  const keys = Object.keys(body);
  if (keys.length !== 1) return "Exactly one key required";

  const key = keys[0];
  if (!["fibonacci", "prime", "lcm", "hcf", "AI"].includes(key))
    return "Invalid key";

  if (key === "fibonacci" && typeof body[key] !== "number")
    return "Fibonacci must be integer";

  if (["prime", "lcm", "hcf"].includes(key) && !Array.isArray(body[key]))
    return "Expected array input";

  if (key === "AI" && typeof body[key] !== "string")
    return "AI expects string question";

  return null;
};
