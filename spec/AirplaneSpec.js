describe("Airplane", function() {
  var airplane;

  beforeEach( function() {
    airplane = new Airplane();
  });

  it("should start landed", function(){
    expect(airplane.isLanded).toBeTruthy();
  });
});
