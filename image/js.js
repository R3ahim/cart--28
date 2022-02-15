
function updateCaseNumber(product,isIncreseing,price){
    let caseInput = document.getElementById(product + '-numbers');
    let caseNumber = caseInput.value ;
    if(isIncreseing == true){
caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber >0){
 caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // update totla
  const  caseTotal = document.getElementById(product + '-total');
  caseTotal.innerText = caseNumber * price;
  
}


document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',true,1219)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',false,1219)
})

document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',true,59)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
     updateCaseNumber('case',false,59);

})