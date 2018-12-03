let submit = document.getElementById('submit');
let barcode = document.getElementById('value');
let result = document.getElementById('result');

submit.addEventListener('click', function() {

    let toCheck = barcode.value;
    let split = [];
    let sumodd = 0;
    let sumeven = 0;
    let sum = 0;

    if (toCheck.length != 12) {
        result.innerHTML = "Incorrect length";
    } else {
        result.innerHTML = '';
        split = String(toCheck).split('');
        
        for (let i = 0; i < split.length; i++) {
            if (i % 2 == 0 || i == 0) {
                sumeven += Number(split[i]);
            } else if (i % 2 != 0 || i != 0) {
                sumodd += Number(split[i]);
            }
        }
        console.log(`Sum Even: ${sumeven}`);
        console.log(`Sum Odd: ${sumodd}`);

        sumodd *= 3;
        sum = sumeven + sumodd;

        console.log(`Sum: ${sum}`);

        if (sum % 10 == 0) {
            result.innerHTML = `Your check digit is 0 making the full barcode ${toCheck}0`;
        } else {
            let mod = sum % 10;
            let modtwo = 10 - mod;

            result.innerHTML = `Your check digit is ${modtwo} making the full barcode ${toCheck}${modtwo}`;
        }
    }

});