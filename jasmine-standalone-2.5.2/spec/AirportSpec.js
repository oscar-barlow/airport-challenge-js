'use strict';

 describe('Airport', function() {
   var airport;
   var plane;

   beforeEach(function() {
     airport = new Airport();
     plane = jasmine.createSpyObj('plane', ['land']);
   });

     it('landing bay will be empty by default', function() {
       expect(airport.planes()).toEqual([]);
     });

     it('it allows a plane to land', function(){
       airport.clearForLanding(plane);
       expect(airport.planes()).toEqual([plane]);
     });

     it('can clear planes for takeoff', function(){
       airport.clearForLanding(plane);
       airport.clearForTakeOff(plane);
       expect(airport.planes()).toEqual([]);
     });
 });
