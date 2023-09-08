/* 
1. add event listener
2. get deposit amount from the deposit input field
3. clear the field after getting the value
4. get deposit innerText
5. total of previous deposit and new deposit
6. get current balance
7. calculate the total balance with previous balance and update it to balance total
 */

// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);

    // step - 3: 
    depositField.value = '';

    // step - 4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(previousDepositTotal);

    // step -  5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step -6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step-7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})