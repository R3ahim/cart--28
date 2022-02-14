document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-numbers');
    const caseNumber = caseInput.value ;
   caseInput.value = parseInt(caseNumber) + 1;
})