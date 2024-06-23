var numValue1 = document.getElementById('numValue1');
var numValue2 = document.getElementById('numValue2');
var resultValue = document.getElementById('resultValue');

var form = document.getElementById('formulate')

form.addEventListener('submit', function(event) {

    if (!numValue1 || !numValue2 ) {
        alert("Please fill in the boxes provided");
    } else {

        console.log(numValue1);

            var X = parseFloat(numValue1.value);
             var Y = parseFloat(numValue2.value);

        var result = X / Y;
        var percent = result * 100

        console.log(percent)
        console.log(X)
        console.log(Y)
        console.log(result)

     resultValue.innerText = "ANSWER = " + percent + "%"

     event.preventDefault();
        }

    })

