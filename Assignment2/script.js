const resultDiv = document.getElementById("result");
var container = document.querySelector('.container');
const BHIM_UPI = document.getElementById("bhim");
const Paytm = document.getElementById("paytm");
const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const NoUPI = document.querySelector("#payOptions");
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Show/hide payment options based on device
console.log(navigator.userAgent);
function hiddingUPIs(){
    if(!/Android|iPhone|iPad|iPod/.test(navigator.userAgent)){
        NoUPI.innerHTML = "No payment options available.";
        NoUPI.style.height = "5rem";
        NoUPI.style.display = 'flex';
        NoUPI.style.justifyContent = 'center'; // Horizontal alignment
        NoUPI.style.alignItems = 'center';  
    }
    else {
        if (isiOS) {
            BHIM_UPI.style.display = "none";
            Paytm.style.display = "none";
        }
        container.style.margin = "0 auto auto auto";
        console.log(navigator.userAgent);
    }
};

function getUPI(upiName){
    resultDiv.innerText = `GET: URL (localhost:8080/${upiName})`;
}

function checkAndShowMessage(inputField,MessageField) {
    const messageField = document.getElementById(MessageField);
    if (inputField.value.trim() === '') {
        messageField.textContent = 'Please fill in this field.';
        return false;
    } else {
        messageField.textContent = '';
        if(inputField.id === "phone"){
            if(inputField.value.length !== 10){
                messageField.textContent = 'Please enter a valid number';
                return false;
            };
        }
        return true;
    }
}

function sendButton(){
    const amount = document.getElementById("amount");
    const isAmountFilled = checkAndShowMessage(amount,"amountMessage");
    const phone = document.getElementById("phone");
    const isPhoneFilled = checkAndShowMessage(phone, "phoneMessage");
    if(isAmountFilled === true && isPhoneFilled === true){
        resultDiv.innerText = `POST: {amount=${amount.value}, phone number=${phone.value}}`;
    }
};

window.addEventListener('load', hiddingUPIs());

