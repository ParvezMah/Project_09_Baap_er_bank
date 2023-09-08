document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    1. get the element by id
    2. get the value from the element
    3. convert value to a number
    */


    const newDepositAmount = getInputFieldValueByID('deposit-field')
    /* 
    1. get previous deposit total by id
    */
   if(isNaN(newDepositAmount)){
    alert('Please provide me a valid number');
    return;
   }
   const previousDepositTotal = getTextElementValueById('deposit-total');
   

    // calculate new deposite total
    const newDepositTotal = previousDepositTotal + newDepositAmount

    // set Deposit Total
    setTextElementValueById('deposit-total', newDepositTotal)
    // get previous balance by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        // set Balance Total
        setTextElementValueById('balance-total', newBalanceTotal)
})

