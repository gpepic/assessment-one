function convertToCelcius() {
 //       var fTempVal = parseFloat(document.getElementById('fTemp').value);
        var fVal = 75;
        var cVal = (fVal - 32) * (5 / 9);
//        document.getElementById('cTemp').value = cTempVal;
        return Math.round(cVal);
    }

function convertToFahrenheit() {
 //       var cTempVal = parseFloat(document.getElementById('cTemp').value);
        var cVal = 24;
        var fVal = (cVal * (9 / 5)) + 32;
        console.log(fVal);
//        document.getElementById('fTemp').value = fTempVal;
        return Math.round(fVal);
    }