document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-numbers');
    const caseNumber = caseInput.value ;
   caseInput.value = parseInt(caseNumber) + 1;

   // minues 

})
document.getElementById('case-minus').addEventListener('click',function(){
     
      const caseInput = document.getElementById('case-numbers');
      const caseNumber = caseInput.value;
      caseInput.value = parseInt(caseNumber) -1;

})