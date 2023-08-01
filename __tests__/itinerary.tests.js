const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");

describe("Itinerary", () => {
  it("can be initiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("can have ports", () => {
    const pallet = new Port("Pallet");
    const vermillion = new Port("Vermillion");
    const itinerary = new Itinerary([pallet, vermillion]);

    expect(itinerary.ports).toEqual([pallet, vermillion]);
  });
});
