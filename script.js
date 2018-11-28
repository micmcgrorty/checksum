let submit = document.getElementById('submit');
let barcode = document.getElementById('value');
let result = document.getElementById('result');

submit.addEventListener('click', function() {

    let toCheck = barcode.value;
    let split = [];
    let sum = 0;
    let stepone = 0;

    if (toCheck.length != 12) {
        result.innerHTML = "Incorrect length";
    } else {
        split = String(toCheck).split('');
        
        for (let i = 11; i >= 0; i -= 2) {
            sum += Number(split[i]);
        }

        stepone = sum * 3;
        sum = 0;

        for (let i = 0; i < split.length; i += 2) {
            sum += Number(split[i]);
        }

        stepone += sum;

        if (stepone % 10 == 0) {
            result.innerHTML = 'Your check digit is 0!';
        } else {
            let mod = stepone % 10;
            let modtwo = 10 - mod;

            result.innerHTML = 'Your check digit is ' + modtwo + '!';
        }
    }

});