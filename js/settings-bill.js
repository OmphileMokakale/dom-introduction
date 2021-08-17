// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings:checked");

// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const radioBillSettingAddBtn = document.querySelector(".radioBillSettingAddBtn");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var newSmsCost = 0;
var newCallCost = 0;
var WarningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");




//add an event listener for when the 'Update settings' button is pressed

function SettingBillTotalUpdate() {

    newCallCost = callCostSetting.value;
    newSmsCost = smsCostSetting.value;
    WarningLevel = warningLevelSetting.value;
    criticalLevel = criticalLevelSetting.value;

    console.log(newCallCost)
    billItemTypeCallSettings = callCostSetting.value.trim();
    billItemTypeSmsSettings = smsCostSetting.value.trim();
    if (billItemTypeCallSettings) {
        newCallCost += billItemTypeCallSettings;
    }
    if (billItemTypeSmsSettings) {
        newSmsCost += billItemTypeSmsSettings;
    }
    if (billItemTypeSmsSettings) {
        WarningLevel += billItemTypeSmsSettings;
    }
    if (billItemTypeSmsSettings) {
        criticalLevel += billItemTypeSmsSettings;
    }

    /*
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totalCost >= 30){
       totalTwo.classList.add("warning");
    }

    */
}

updateSettings.addEventListener('click', SettingBillTotalUpdate);

var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
function SettingBillTotal() {

   
    var RadioBtnchecked = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItemTypeWithSettings = RadioBtnchecked.value
    if (RadioBtnchecked) {
        // billItemType will be 'call' or 'sms'
        if (billItemTypeWithSettings === "call") {
            callsTotal += newCallCost   
        }
        else if (billItemTypeWithSettings === "sms") {
            smsTotal += newSmsCost;   
        }
    }
    console.log(callsTotal)
    console.log(smsTotal)

//update the totals that is displayed on the screen.

callTotalSettings.innerHTML = callsTotal.toFixed(2);
smsTotalSettings.innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
totalSettings.innerHTML = totalCost.toFixed(2);
    /*
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totalCost >= 30){
       totalTwo.classList.add("warning");
    }

    */
}




radioBillSettingAddBtn.addEventListener('click', SettingBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
