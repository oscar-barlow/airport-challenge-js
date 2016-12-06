describe("Weather", function() {
  var weather;


  beforeEach(function() {
    weather = new Weather();
  });

  it("should have a condition property that is a string", function(){
    expect(weather.condition).toEqual(jasmine.any(String));
  });
});
