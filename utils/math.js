export const fibonacci = (n) => {
  if (n <= 0) return [];
  const arr = [0, 1];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr.slice(0, n);
};

export const primes = (arr) =>
  arr.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
      if (num % i === 0) return false;
    return true;
  });

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

export const lcmArray = (arr) => arr.reduce((a, b) => lcm(a, b));
export const hcfArray = (arr) => arr.reduce((a, b) => gcd(a, b));
