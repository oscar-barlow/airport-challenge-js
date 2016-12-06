describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy();
  });

  it("should be able to contain planes", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should land a plane", function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane)
  });

  it("should take off a plane", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane)
  });

});
