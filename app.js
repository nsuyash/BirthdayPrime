//input
var btn_Click = document.querySelector("#btn-click");
var txt_Name = document.querySelector("#txtName");
var txt_Data = document.querySelector("#txtData");
var txt_Month = document.querySelector("#txtMonth");
var txt_Year = document.querySelector("#txtYear");
var txt_Output = document.querySelector("#txtOutput");


//processing
function isLeapYear(intputYear) {
    if ((intputYear % 4 === 0 && intputYear % 100 !== 0) || intputYear % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function clickEventListener() {
    var inputName = txt_Name.value;
    var inputData = txt_Data.value;
    var inputMonth = txt_Month.value;
    var inputYear = txt_Year.value;

   
    if (isLeapYear(inputYear)) {
        //output
        var outputTxtY = ` Hey! ${inputName}\n DOB: ${inputData}/${inputMonth}/${inputYear}\n You are born on leap year`;
        txt_Output.innerText = outputTxtY;
    } else {
        var outputTxtY = ` Hey! ${inputName}\n DOB: ${inputData}/${inputMonth}/${inputYear}\n You aren't born on leap year`;
        txt_Output.innerText = outputTxtN;
    }
}


// Button clickEventListener
btn_Click.addEventListener("click", clickEventListener);