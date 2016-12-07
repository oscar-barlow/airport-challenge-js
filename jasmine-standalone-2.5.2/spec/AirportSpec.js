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

     it('can check for stormy conditions', function(){
       expect(airport.isStormy()).toBeFalsy();
     });

     describe('Under stormy conditions', function(){
       it('does not clear for takeoff', function(){
         spyOn(airport, 'isStormy').and.returnValue(true);
         expect(function(){ airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm');
       });
     });
 });
