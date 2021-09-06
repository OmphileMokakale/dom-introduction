//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
const billStringElement = document.querySelector(".billString");




//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    // logic goes here
     // get the string entered in the textArea
     var billString = billStringElement.value;
     //split the string
     var billItems = billString.split(",");
     // a variable for the total phone bill.
     var billTotal = 0;
     var callTotal = 0;
     var SMSTotal = 0;
     //loop over all the bill items
     for (var i=0;i<billItems.length;i++){
         var billItem = billItems[i].trim();
         if (billItem === "call"){
            callTotal += 2.75;
         }
         else if (billItem === "sms"){
            SMSTotal += 0.75;
         }
     }
     
     //round to two decimals
     billTotal = callTotal + SMSTotal;
     var roundedBillTotal = billTotal.toFixed(2); 
     billTotalElement.innerHTML = roundedBillTotal;

     billTotalElement.classList.remove("danger");
     billTotalElement.classList.remove("warning");

     if(roundedBillTotal > 20){
        billTotalElement.classList.add("warning");
     }
     if(roundedBillTotal > 30){

        billTotalElement.classList.add("danger");
     }
}

calculateBtn.addEventListener('click', calculateBtnClicked);
//textTotalAddBtn.addEventListener('click', textBillTotal);



//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


