  // Initial reference 

  let decInp = document.getElementById("dec-inp");
  let binInp = document.getElementById("bin-inp");
  let errorMSg = document.getElementById("error-msg");

  //Convert decimal to binary when user inputs in the decimal filed

  decInp.addEventListener("input",() => {
    let decValue = parseInt(decInp.value);

    // convert the decimal value to binary
    binInp.value = decValue.toString(2);
  });

  // convert binary to decimal when user input thee binary field

  binInp.addEventListener("input",() => {
    let binValue = binInp.value;

    // if the binary number is valid convert to decimal 
    if(binValidattor(binValue)){
        decInp.value = parseInt(binValue,2);
        errorMSg.textContent = "";
    }
    // else display an error massg
    else{
        errorMSg.textContent = "Please Enter A Valid Binary Number With 0 And 1"
    }

    // funstion to check if the binary number is valid i.e does not contain any number other than 0 
    // and 1

    function binValidattor(num){
        for(let i = 0; i < num.length; i++){
            if(num[i] != "0" && num[i] != "1"){
                return false;
            }
        }
        return true;
    }
  });