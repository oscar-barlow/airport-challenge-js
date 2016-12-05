describe("Airplane", function() {
  var airplane;

  beforeEach( function() {
    airplane = new Airplane();
  });

  it("should start in the air", function(){
    expect(airplane.isLanded).toBeFalsy();
  });

  it("should be able to land", function(){
    airplane.land();
    expect(airplane.isLanded).toBeTruthy();
  });
});
