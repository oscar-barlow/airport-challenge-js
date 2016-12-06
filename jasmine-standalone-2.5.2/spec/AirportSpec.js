 describe('Airport', function() {
   var airport;
   var plane;

   beforeEach(function() {
     airport = new Airport();
     plane = new Plane();
   });

     it('landing bay will be empty by default', function() {
       expect(airport.landingBay()).toEqual([]);
     });
 });
