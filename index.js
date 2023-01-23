const billAmt= document.querySelector("#bill-amt");
const cashGiven= document.querySelector("#cash-given");
const checkbtn= document.querySelector("#check-btn");
const msg= document.querySelector("#error-msg");
const numberOfnotes= document.querySelectorAll(".noofnotes");
var availableNotes= [2000,500,100,20,10,5,1];

checkbtn.addEventListener("click",validateBillAndCashAmt);


function validateBillAndCashAmt(){
    hideMessage();
    if(parseFloat(billAmt.value)<= parseFloat(cashGiven.value)){
        var AmtToBeReturned= parseFloat(cashGiven.value)-parseFloat(billAmt.value);
        calculateChange(AmtToBeReturned);
        }
    else{
        showMessage("Do you wanna wash plates");
        }
    }

function calculateChange(anything){
    for(i=0;i<availableNotes.length;i++){
        var noOfNotes= Math.trunc((anything/availableNotes[i]));
        anything= anything%availableNotes[i];
        numberOfnotes[i].innerText=noOfNotes;
    }

}

function showMessage(message){
    msg.style.display = "block";
    msg.innerText = message;
}

function hideMessage(){
    msg.style.display="none";
}   