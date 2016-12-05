function Airplane(){
  this.isLanded = false;
}

Airplane.prototype.land = function() {
  this.isLanded = true;
}
