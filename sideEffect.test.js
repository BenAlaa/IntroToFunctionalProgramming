const getRandomInt = (min, max, random = Math.random) => {
    return Math.floor(random() * (max - min)) + min;
}


// but it still impure this way give us a great advantages when running tests.
describe("My Tests", () => {
    it("should generate a random number", () => {
      expect(getRandomInt(0, 10, () => 0.7)).toBe(7);
      expect(getRandomInt(0, 10, () => 0.6)).toBe(6);
      expect(getRandomInt(0, 10, () => 0.5)).toBe(5);
    });
});