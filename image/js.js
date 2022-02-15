
function updateProductNumber(product,isIncreseing,price){
    let productInput = document.getElementById(product + '-numbers');
    let productNumber = productInput.value ;
    if(isIncreseing == true){
productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber >0){
 productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update totla
  const  productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;

  calculateTotal()

  
}

 function getInputValue(product){
     const producntInput = document.getElementById(product +'-numbers');
  const productNumber =parseFloat( producntInput.value);
  return productNumber;
 }
function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const  totalPrice = subTotal + tax;

    // update on html

    document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText= totalPrice;

}
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',true,1219);

})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',false,1219)
})

document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',true,59)
 
})
document.getElementById('case-minus').addEventListener('click',function(){
     updateProductNumber('case',false,59);

}) 