/*globals descibe it expect*/
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe("Ship", () => {
  it("can be initiated", () => {
  const port = new Port ('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship('SS ANNE',itinerary);
  expect(ship).toBeInstanceOf(Object);

});
  it("has a starting port", () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship('SS ANNE' ,itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port ('Calais');
    const itinerary = new Itinerary([dover,calais]);
    const ship = new Ship('SS ANNE' ,itinerary);
  
    ship.setSail();
  
    expect(ship.currentPort).toBeFalsy();
  });
 
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship('SS ANNE' ,itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(calais);
  });

  it('cant sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship('SS ANNE',itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});