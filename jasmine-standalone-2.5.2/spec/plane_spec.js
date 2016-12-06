describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('when a plane lands', function() {
    it('confirms that the plane has landed', function() {
      expect(plane.land()).toEqual('Plane has landed')
    });
  });
});
