//input
var btn_Click = document.querySelector("#btn-click");
var txt_Name = document.querySelector("#txtName");
var txt_Data = document.querySelector("#txtData");
var txt_Month = document.querySelector("#txtMonth");
var txt_Year = document.querySelector("#txtYear");
var txt_Output = document.querySelector("#txtOutput");


//processing
function isBirthPrime(inputDate) {
    for(var i=2; i<=inputDate-1;i++){
        if (inputDate % i === 0) {
            return true;
        } else {
            return false;
        }
    }
    
}

function clickEventListener() {
    var inputName = txt_Name.value;
    var inputDate = txt_Data.value;
    var inputMonth = txt_Month.value;
    var inputYear = txt_Year.value;

   
    if(inputDate>=1 && inputDate <=31){
        if(inputMonth>=1 && inputMonth<=12){
            if(isBirthPrime(inputDate)){
                txt_Output.innerText = `Hey! ${inputName}\n DOB: ${inputDate}/${inputMonth}/${inputYear}\nYour birthday is not prime number!`
            }else{
                txt_Output.innerText = `Hey! ${inputName}\n DOB: ${inputDate}/${inputMonth}/${inputYear}\nYour birthday is prime number!`
            }
        }else{
            var outputTxtNM = `You entered wrong month: ${inputMonth}`;
            txt_Output.innerText = outputTxtNM;
        }
    }else{
        var outputTxtND = `You entered wrong Date: ${inputDate}`;
        txt_Output.innerText = outputTxtND;
    }
}


// Button clickEventListener
btn_Click.addEventListener("click", clickEventListener);