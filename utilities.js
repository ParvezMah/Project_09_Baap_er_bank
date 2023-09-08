// takes an input field and get the value from the field
function getInputFieldValueByID(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}


function getTextElementValueById(elementId){
    const TextElement = document.getElementById(elementId);
    const TextElementValueString = TextElement.innerText;
    const TextElementvalue = parseFloat(TextElementValueString);
    return TextElementvalue;
}

function setTextElementValueById(elementId, newValue){
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}