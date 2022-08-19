
// duplication removal function  

const updateCaseNumber = (isIncrased)=>{
    const caseNumberFiled = document.getElementById('case-input')
    const caseNumberString = caseNumberFiled.value
    const caseNumberPrevious = parseInt(caseNumberString);

    let caseNumber;

    if (isIncrased === true) {
 caseNumber = caseNumberPrevious + 1;
    
    }else{
         caseNumber = caseNumberPrevious - 1;
        

    }
    caseNumberFiled.value = caseNumber; 
   
   return caseNumber 
}

// caseUpdate-total Price

const upDateTotalCasePrice = (caseNUmber)=>{
    const totalCasePrice = caseNUmber * 59;
    document.getElementById('case-total').innerText = totalCasePrice
}

// call all the function 
document.getElementById('case-plus').addEventListener('click',()=>{
   const caseNumber =  updateCaseNumber(true);
   
   upDateTotalCasePrice(caseNumber)
    
});


// minus
document.getElementById('case-minus').addEventListener('click',()=>{
    const caseNumber =  updateCaseNumber(false)
    upDateTotalCasePrice(caseNumber)
    
});

