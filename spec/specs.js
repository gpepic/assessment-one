describe('convertToCelcius', function() {
  it("returns a celcius value when a fahrenheit temperature is entered", function() {
    convertToCelcius(75).should.eql(24);
  });
 });

describe('convertToFahrenheit', function() {
  it("returns a fahrenheit value when a celcius temperature is entered", function() {
    convertToFahrenheit(24).should.eql(75);
  });
});