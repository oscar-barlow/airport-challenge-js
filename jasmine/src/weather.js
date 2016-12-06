function Weather() {
  var weatherArray = ["sunny", "sunny", "sunny", "stormy"];
  var weatherNow = weatherArray[Math.floor(Math.random() * weatherArray.length)];
  this.condition = weatherNow;
}
