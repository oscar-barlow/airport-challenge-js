describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should be able to contain planes", function() {
    expect(this.planes).toEqual([]);
  });

});
