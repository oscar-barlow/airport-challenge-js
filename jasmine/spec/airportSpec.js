describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = {
      setCondition: function(value) {
        condition = value;
      },
      condition: function() {
        return condition;
      }
    };

    weather.setCondition('sunny');
    console.log(weather.condition());
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

  it("can contain weather", function() {
    airport.setWeather(weather)
    expect(airport.weather).toEqual(weather);
  });

});
