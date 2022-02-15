 function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length = 4){
        return pin;
    }
    else{
        return getPin()
    }
      
 }

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

 }


document.getElementById('kay-pad').addEventListener('click',function(event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');
  if(isNaN(number) ){
     if(number == 'C'){
         calcInput.value = ''
     }
  }
   else{

  
   const previousNumber = calcInput.value;
   const newNumber  = previousNumber + number;
   calcInput.value = newNumber
}
})



function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
  const pinSuccess = document.getElementById('pin success');
  const pinfaild = document.getElementById('pin-faild')
    if(pin == typedNumbers){
        pinSuccess.style.display = 'block';

      pinfaild.style.display = 'none'

    }
    else{
        pinSuccess.style.display = 'none';

        pinfaild.style.display = 'block'
    }
}