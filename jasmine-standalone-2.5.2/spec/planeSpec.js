'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  describe('when a plane lands', function() {
    it('airport should respond with clear for landing', function(){
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe("when a plane takes off", function(){
    it('can take off from an airport', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
  });

});
