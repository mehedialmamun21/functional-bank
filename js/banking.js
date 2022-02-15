function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = amount + previousTotal;
}

// deposit money
document.getElementById('deposit-button').addEventListener('click', function () {

    const depoFunRes = getInputValue('deposit-input');

    // get and update deposit total
    updateTotalField('deposit-total', depoFunRes);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const c = parseFloat(balanceText);

    balanceTotal.innerText = c + depoFunRes;
});

// withdraw money
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrFunRes = getInputValue('withdraw-input');

    // get and update withdraw total
    updateTotalField('withdraw-total', withdrFunRes);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const g = parseFloat(balanceText);

    balanceTotal.innerText = g - withdrFunRes;
});