function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = amount + previousTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const c = parseFloat(balanceText);
    balanceTotal.innerText = c + amount;
    if (isAdd == true) {
        balanceTotal.innerText = c + amount;
    }
    else {
        balanceTotal.innerText = c - amount;
    }
}

// deposit money
document.getElementById('deposit-button').addEventListener('click', function () {

    const depoFunRes = getInputValue('deposit-input');

    // get and update deposit total
    updateTotalField('deposit-total', depoFunRes);

    //update balance
    updateBalance(depoFunRes, true);

});

// withdraw money
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrFunRes = getInputValue('withdraw-input');

    // get and update withdraw total
    updateTotalField('withdraw-total', withdrFunRes);

    //update balance
    updateBalance(withdrFunRes, false);
});