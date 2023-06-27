const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function countDigits(sentence) {
    let count = 0;
    const countDigit = Array.from(sentence);

    countDigit.forEach(function (value) {
        if (digits.includes(value)) {
            count++;
        }
    });
    return count;
}
const result = countDigits(`We have spent BDT 60000 for a cow and BDT 10500 for a goat. Our total cost 70500 and other cost may be 7000.`)
console.log(result);