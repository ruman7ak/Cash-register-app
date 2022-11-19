const billAmt= document.querySelector("#bill-amt");
const cashGiven= document.querySelector("#cash-given");
const checkbtn= document.querySelector("#check-btn");
const msg= document.querySelector("#error-msg");
const numberOfnotes= document.querySelectorAll(".noofnotes");
const availableNotes= [2000,500,100,20,10,5,1];



checkbtn.addEventListener("click", function(validateBillAndCashAmt){
    hideMessage();
    if (billAmt.value > 0){
        if(billAmt.value < cashGiven.value ){
            const AmtToBeReturned= cashGiven.value-billAmt.value;
            calculateChange(AmtToBeReturned);
        }else{
            showMessage("Do you wanna wash plates");
        }
    }else{
        showMessage("Wrong value entered");
    }
})

function calculateChange(AmtToBeReturned){
    for(i=0;i<availableNotes.length;i++){
        const noOfNotes= Math.trunc(AmtToBeReturned/availableNotes[i]
        );
        AmtToBeReturned= AmtToBeReturned%availableNotes[i];
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