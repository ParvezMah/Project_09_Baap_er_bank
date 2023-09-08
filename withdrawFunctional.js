/* 
1. add withdraw button event handler
2. get withdraw amount by using function getInputFieldValueByID
3. get previous withdraw amount by using function withdraw-field
4. calculate new withdraw total and set the value
4.5. set new withDraw total by using setTextElementById function
5. get previous balance total by using function getTextElementValueById
6. calculate new balance total and set the value by using setTextElementById function

 */

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');

    if(isNaN(newWithdrawAmount)){
        alert('Please provide me a valid number');
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})