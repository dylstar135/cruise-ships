/*globals descibe it expect*/
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe("Ship", () => {
  it("can be initiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Vermillion City");
    console.log(port);
    const ship = new Ship("SS anne", port);

    expect(ship.currentPort).toBe(port);
  });
  it("can set sail", () => {
    const ship = new Ship("S.S ANNE");
    const port = new Port("Vermillion City");

    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
 
  it('can dock at different ports', () => {
   const Vermillion = new Port('Vermillion City');
   const ship = new Ship('SS ANNE');
   const palletTown = new Port ('Pallet Town');
   ship.dock(palletTown);
   expect(ship.currentPort).toBe(palletTown);

  })
});
