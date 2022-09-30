
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

    // const phonePriceInput = document.getElementById('phone-total');
    // const phonePriceValue = phonePriceInput.innerText
    // const phonePriceSting = parseInt(phonePriceValue);
    // const phonePriceTotal = phonePriceInput.innerText = phonePriceSting * phonePrice;
    // console.log(phonePriceSting ,phonePrice)







// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const phoneCaseInput = document.getElementById('phone-number-field');
//     const phoneCaseNumber = phoneCaseInput.value;
//     const phoneCaseString = parseInt(phoneCaseNumber);
//     const phoneCase = phoneCaseInput.value = phoneCaseString + 1;
    
    
//     const phonePriceInput = document.getElementById('case-total');
//     const phonePriceValue = phonePriceInput.innerText
//     const phonePriceSting = parseInt(phonePriceValue);
//     const phonePrice = phonePriceInput.innerText = phonePriceSting * phoneCase;
//     console.log(phonePriceSting ,phonePrice)
     
// })

// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const phoneCaseInput = document.getElementById('case-number-field');
//     const phoneCaseNumber = phoneCaseInput.value;
//     const phoneCaseString = parseInt(phoneCaseNumber);
//     phoneCaseInput.value = phoneCaseString - 1;
//     console.log(phoneCaseNumber)


    
//     const phonePriceInput = document.getElementById('case-total');
//     const phonePriceValue = phonePriceInput.innerText
//     const phonePriceSting = parseInt(phonePriceValue);
//     const phonePrice = phonePriceInput.innerText = phonePriceSting * phoneCase;
//     console.log(phonePriceSting ,phonePrice)
// })




/* const phonePriceInput = document.getElementById('case-total');
const phonePriceValue = phonePriceInput.innerText
const phonePriceSting = parseInt(phonePriceValue);
const phonePrice = phonePriceInput.innerText = phonePriceSting * phoneCase;
console.log(phonePriceSting ,phonePrice) */
