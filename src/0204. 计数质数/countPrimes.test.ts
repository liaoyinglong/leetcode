import { countPrimes } from "./countPrimes";

describe("204. 计数质数", () => {
  it("case 1 ", () => {
    expect(countPrimes(10)).toBe(4);
    expect(countPrimes(2)).toBe(0);
    expect(countPrimes(1)).toBe(0);
    expect(countPrimes(0)).toBe(0);
  });
});
