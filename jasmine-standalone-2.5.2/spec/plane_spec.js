describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });

  describe('when a plane lands', function() {
    it('airport should respond with clear for landing', function(){
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

});
