//memory price
function memoryUpdate ( isValue){
    const memoryPrice = document.getElementById('memory-price');

    if (isValue == true) {
        memoryPrice.innerText = 180
        
    } else {
        memoryPrice.innerText = 0

    }
  
  

}

//delivery cost
function deliveryChargeUpdate(isValue){

    const deliveryCharge = document.getElementById('delivery-price')
    if (isValue == false) {
        deliveryCharge.innerText=0;
        
    } else {

        deliveryCharge.innerText=20;
    }

    upDateTotal ()

}
      
  
  
  
  
 
  




 

//memory uptodate
document.getElementById('smallMemory-price').addEventListener('click',function(){
    
    memoryUpdate( false)
    

})

document.getElementById('bigMemory-price').addEventListener('click',function(){

   
    memoryUpdate(true)
})

//full storage part

document.getElementById('smallStorage-price').addEventListener('click',function(){
    const extraPrice = document.getElementById('storage-price')
    extraPrice.innerText = 0
    
  
    
   
    
})
document.getElementById('middleStorage-price').addEventListener('click',function(){

 const extraPrice = document.getElementById('storage-price')
     extraPrice.innerText = 100
   
    
})

document.getElementById('bigStorage-price').addEventListener('click',function(){

    // const extraPrice = document.getElementById('storage-price')
    // extraPrice.innerText = 180
    // upDateTotal() 
  
})
//delivery update

document.getElementById('delivery-cost').addEventListener('click',function(){

   

    deliveryChargeUpdate(false)
})

document.getElementById('earlyDelivery-price').addEventListener('click',function(){
 
    deliveryChargeUpdate(true)
  

})


//total update

function upDateTotal () {
    
    const memory = parseInt(document.getElementById('memory-price').innerText)
    const delivery = parseInt(document.getElementById('delivery-price').innerText)
    const storage = parseInt(document.getElementById('storage-price').innerText)
    const total = parseInt(document.getElementById('total-Price').innerText)
    const price = 1299+ memory+storage+delivery;
    total.innerText = price
   

}

