/*globals descibe it expect*/
const Ship = require("../src/ship.js");

describe("Ship", () => {
  it("can be initiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const ship = new Ship("S.S ANNE");

    expect(ship.startingPort).toBe("Vermillion City");
  });
});
