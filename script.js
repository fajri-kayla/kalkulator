function appendToResult(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Menggunakan eval dengan hati-hati
        const result = eval(resultField.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid calculation");
        }
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}