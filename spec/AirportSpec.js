describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport;
    plane = jasmine.createSpyObj(['plane']);
  });

  it("should be able to store planes", function(){
    expect(airport.planes).toEqual([]);
  });

  it("should be able to land a plane", function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

});
