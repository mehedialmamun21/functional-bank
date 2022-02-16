function getInputValue(inputId) {
    //debugger;
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

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);*/
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// deposit money
document.getElementById('deposit-button').addEventListener('click', function () {

    const depoFunRes = getInputValue('deposit-input');
    if (depoFunRes > 0) {
        // get and update deposit total
        updateTotalField('deposit-total', depoFunRes);

        //update balance
        updateBalance(depoFunRes, true);
    }
});

// withdraw money
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrFunRes = getInputValue('withdraw-input');

    const previousBalanceTotal = getCurrentBalance();

    if (withdrFunRes <= previousBalanceTotal && withdrFunRes > 0) {
        // get and update withdraw total
        updateTotalField('withdraw-total', withdrFunRes);

        //update balance
        updateBalance(withdrFunRes, false);
    }
    if (withdrFunRes > previousBalanceTotal) {
        console.log("You cann't Withdraw more than your existing Balance")
    }
});