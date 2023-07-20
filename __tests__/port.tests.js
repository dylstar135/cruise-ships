const Port = require("../src/port.js");

describe("Port", () => {
  it("can be initiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("has a name", () => {
    const port = new Port("Vermillion City");
    expect(port.name).toEqual("Vermillion City");
  });
});
