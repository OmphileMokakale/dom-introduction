// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio:checked");

//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill

var callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed



function textBillTotal(){ 
//alert("radioBillAddBtn");

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
var billItemType = checkedRadioBtn.value
if (checkedRadioBtn){
    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
}  
 
     //update the totals that is displayed on the screen.
     callTotalTwo.innerHTML = callsTotal.toFixed(2);
     smsTotalTwo.innerHTML = smsTotal.toFixed(2);
     var totalCost = callsTotal + smsTotal;
     totalTwo.innerHTML = totalCost.toFixed(2);
     
     //color the total based on the criteria
     if (totalCost >= 50){
         // adding the danger class will make the text red
         totalTwo.classList.add("danger");
     }
     else if (totalCost >= 30){
        totalTwo.classList.add("warning");
     }
}

radioBillAddBtn.addEventListener('click', textBillTotal);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
