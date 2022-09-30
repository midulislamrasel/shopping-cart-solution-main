document.getElementById('btn-case-plus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('case-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    const phoneNumber = phoneNumberFiled.value = phoneNumberString + 1; 
    const phonePrice = phoneNumber * 59;
    document.getElementById('case-total').innerText = phonePrice

});
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('case-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    const phonePrice2 = phoneNumberFiled.value = phoneNumberString - 1;
    const phonePrice = phonePrice2 * 59;
    document.getElementById('case-total').innerText = phonePrice
});

document.getElementById('case-btn').addEventListener('click', function () {
    document.getElementById('case-item').style.display="none";
})