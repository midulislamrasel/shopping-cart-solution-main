
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    const phoneNumber = phoneNumberFiled.value = phoneNumberString + 1; 
    const phonePrice = phoneNumber * 1219;
    document.getElementById('phone-total').innerText = phonePrice

});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    const phonePrice2 = phoneNumberFiled.value = phoneNumberString - 1;
    const phonePrice = phonePrice2 * 1219;
    document.getElementById('phone-total').innerText = phonePrice
});
document.getElementById('phone-btn').addEventListener('click', function () {
    document.getElementById('phone-item').style.display="none";
})



