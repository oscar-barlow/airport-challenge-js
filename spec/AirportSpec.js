describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport;
  });

  it("should be able to store planes", function(){
    expect(airport.planes).toEqual([]);
  });

});
