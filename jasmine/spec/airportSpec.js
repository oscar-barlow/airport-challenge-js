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
});
