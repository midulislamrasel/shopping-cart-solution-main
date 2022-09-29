
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    phoneNumberFiled.value = phoneNumberString + 1;
    console.log(phoneNumberValue)
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberValue = phoneNumberFiled.value;
    const phoneNumberString = parseInt(phoneNumberValue);
    phoneNumberFiled.value = phoneNumberString - 1;
    // console.log(phoneNumberValue)
});

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const phoneCaseInput = document.getElementById('case-number-field');
    const phoneCaseNumber = phoneCaseInput.value;
    const phoneCaseString = parseInt(phoneCaseNumber);
    phoneCaseInput.value = phoneCaseString + 1;
    console.log(phoneCaseNumber)

    const phonePriceInput = document.getElementById('phone-total');
    const phonePriceValue = phonePriceInput.innerText
    const phonePriceSting = parseInt(phonePriceValue);
    phonePriceInput.innerText = phonePriceSting * phoneCaseNumber;

    console.log(phonePriceSting)
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const phoneCaseInput = document.getElementById('case-number-field');
    const phoneCaseNumber = phoneCaseInput.value;
    const phoneCaseString = parseInt(phoneCaseNumber);
    phoneCaseInput.value = phoneCaseString - 1;
    console.log(phoneCaseNumber)
})