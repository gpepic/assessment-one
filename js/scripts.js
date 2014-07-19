var convertTemp = function(input) {
  if (input (fVal > 0)) {
  return finalCelc;
  } else if (input (cVal > 0)) {
  return finalFahr;
  }
};

$(function() {
  $("form#temp-translator").submit(function(event) {
  
    var fVal = parseInt($("input#f-temp").val());
    var cVal = parseInt($("input#c-temp").val());
    var finalCelc = parseInt($(fVal - 32) * (5 / 9));
    var finalFahr = parseInt($(cVal * (9 / 5)) + 32);
    var result = convertTemp(input);
   
    // if(isNaN(fVal)) {
    //   alert("Please enter a number.");
    // } else if(isNaN(cVal)){
    //   alert("Please enter a number.");
    // } else {
      $("#result").show();
      $(".to-celc-result").text(result + "º Celcius" );
      $(".to-fahr-result").text(result + "º Fahrenheit");

    event.preventDefault();
  });
});



// var convertToFahrenheit = function(cTempInput) {
//     if (cTempInput > 0) {
//     return true;
//     } else {
//     return false;
//     }
//     }
// }

// var convertTemp = function(temp) {
//     if fTempInput = true 

// }

// function convertToCelcius() {
//         // var fVal = parseFloat(document.getElementById('f-temp').value);
//         // // var fVal = 75;
//         var cVal = parseInt((fVal - 32) * (5 / 9));
//         // document.getElementById('c-temp').value = cVal;
//         return Math.round(cVal);
//     }

// function convertToFahrenheit() {
//         // var cVal = parseFloat(document.getElementById('c-temp').value);
//         // var cVal = 24;
//         var fVal = parseInt((cVal * (9 / 5)) + 32);
//         console.log(fVal);
//         // document.getElementById('f-temp').value = fVal;
//         return Math.round(fVal);
//     }

// var changeShort = function(input) {

//   return [Math.floor(input/25),Math.floor(input%25/10),Math.floor(input%25%10/5),Math.floor(input%25%10%5)]
// };
