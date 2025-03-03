function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var input = document.getElementById('input').value;
    var out = document.getElementById('out').value;

    var CurrencyRate = {
        USD: { USD: 1, EUR: 0.96, GBP: 0.79, INR: 87.47 },
        EUR: { USD: 1.03, EUR: 1, GBP: 0.82, INR: 90.83 },
        GBP: { USD: 1.25, EUR: 1.21, GBP: 1, INR: 110 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.009, INR: 1 }
    };

    var rate = CurrencyRate[input][out];
    var result = amount * rate;
    var res = document.getElementById('result');
    res.innerText = `Amount in ${input} = ${result} ${out}`;
    if (amount == 0) {
        res.innerText = `Enter Proper Value > 0`;
    }

}