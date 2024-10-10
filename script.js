function predict() {
    const periodNumber = parseInt(document.getElementById('periodNumber').value);
    if (isNaN(periodNumber) || periodNumber < 100 || periodNumber > 999) {
        alert("Please enter a valid 3-digit number.");
        return;
    }

    const lastThreeDigits = periodNumber % 1000;
    const digitsStr = String(lastThreeDigits).padStart(3, '0');

    const sumDigits = Array.from(digitsStr).reduce((sum, digit) => sum + parseInt(digit), 0);
    const productDigits = Array.from(digitsStr).reduce((prod, digit) => prod * (parseInt(digit) || 1), 1);
    const averageDigits = sumDigits / digitsStr.length;

    const combinedResult = (sumDigits + productDigits + Math.floor(averageDigits)) % 10;
    const size = combinedResult <= 5 ? "SMALL" : "BIG"; // Changed to upper case

    document.getElementById('result').innerHTML = `SIZE ➜ ${size}`;
}
