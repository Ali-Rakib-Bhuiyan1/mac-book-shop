




//memory price
function memoryUpdate(price) {
    const extraMemmory = document.getElementById('memory-price');
    extraMemmory.innerText = price;
}


//total price

function storageUpdate(price) {
    const extraStorage = document.getElementById('storage-price');
    extraStorage.innerText = price;
}

//delivery price
function deliveryUpdate(price) {
    const extraStorage = document.getElementById('delivery-price');
    extraStorage.innerText = price;
}




//total update


function upDateTotal() {

    const memory = parseInt(document.getElementById('memory-price').innerText);
    const delivery = parseInt(document.getElementById('delivery-price').innerText)
    const storage = parseInt(document.getElementById('storage-price').innerText)
    const total = document.getElementById('total-Price');
    const price = 1299 + memory+delivery+storage;
    total.innerText = price;
    return price;

}


//memory uptodate
document.getElementById('smallMemory-price').addEventListener('click', function() {

    memoryUpdate(0);
    upDateTotal();

})

document.getElementById('bigMemory-price').addEventListener('click', function() {


    memoryUpdate(180);
    upDateTotal();
})


//storage update
document.getElementById('smallStorage-price').addEventListener('click',function(){
    storageUpdate(0)
        
        
     })
    document.getElementById('middleStorage-price').addEventListener('click',function(){
    
        storageUpdate(100)
        upDateTotal()
       
        
    })
    
    document.getElementById('bigStorage-price').addEventListener('click',function(){
    
        storageUpdate(180)
        upDateTotal()
      
    })



        //delivery update

document.getElementById('delivery-cost').addEventListener('click', function() {

    deliveryUpdate(0)
    upDateTotal()

     
 })

 document.getElementById('earlyDelivery-price').addEventListener('click', function() {
    deliveryUpdate(20)
    upDateTotal()

 })











