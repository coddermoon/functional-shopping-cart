
// duplication removal function  

const updateCaseNumber = (isIncrased)=>{
    const caseNumberFiled = document.getElementById('case-input')
    const caseNumberString = caseNumberFiled.value
    const caseNumberPrevious = parseInt(caseNumberString);

    let caseNumber;

    if (isIncrased === true) {
        const caseNumber = caseNumberPrevious + 1;
    caseNumberFiled.value = caseNumber;
    }else{
        const caseNumber = caseNumberPrevious - 1;
        caseNumberFiled.value = caseNumber; 
    }
}

// call all the function 
document.getElementById('case-plus').addEventListener('click',()=>{
    updateCaseNumber(true)
   
    
});


// minus
document.getElementById('case-minus').addEventListener('click',()=>{
    updateCaseNumber(false)
    
});

