function btnActivity(btnColor) {
    const btnidActivity = document.getElementById(btnColor);
    btnidActivity.classList.add('bg-green-500', 'text-white');
    

    
}
function selectSeatCount(){
    const count = document.getElementById('count');
    const text = count.innerText;
    const convertText = parseInt(text);
    count.innerText=convertText+1;

    

    
    

    
  
}


function seatNamePrice (seatId){
    const seatNameText = document.getElementById(seatId);
    const seatInnerText = seatNameText.innerText;
    const seatName= document.createElement('span');
    seatName.innerText=seatInnerText;

    const BusClass = document.createElement('span');
    BusClass.innerText="Economy";

    const price = document.createElement('span');
    price.innerText=550;

    const Element= document.createElement('div');
    Element.id="seatContainer"
    Element.style.display="flex";
    Element.style.justifyContent="space-around";
    Element.appendChild(seatName);
    Element.appendChild(BusClass);
    Element.appendChild(price);

    const appendElement = document.getElementById('main');
    appendElement.appendChild(Element);

    

   
   
    
}

// seat Left
function seatLeft(){
    let decrementElement= document.getElementById('seatLeft');
    let countText = decrementElement.innerText;
    let convertedNumber=parseInt(countText)
    const minas = convertedNumber-1;
    decrementElement.innerText=minas;
   

}
function totalPrice(){
    let totalSeat = document.getElementById('seattotalprice');
    let text = totalSeat.innerText;
    let convert = parseInt(text);
    let addAmount = convert+550;
    totalSeat.innerText=addAmount;
    
    
}


function btnActive(){
    const phn = document.getElementById("phone");

    const next = document.getElementById("nextButton");
    const count = document.getElementById('count');
      const txt =count.innerText;
      const init = parseInt(txt) ;
      console.log(init)
      if(init===1 && phn.type ==="number"){
        next.removeAttribute("disabled");
      }
      const cpnBtn = document.getElementById("cuponButton");
      if(init===4){
        cpnBtn.removeAttribute("disabled");
      }
      
      

}
const cuponBtn = document.getElementById("cuponButton");
document.getElementById("cuponButton").addEventListener('click',function(){
      const newCupon = "NEW15";
      const couple = "couple20";
      const field = document.getElementById("cupon");
      const fieldTxt = field.value;
        let totalSeat = document.getElementById('seattotalprice');
        let seatprice= totalSeat.innerText;
        let ctxt = parseInt(seatprice);
        if(fieldTxt==newCupon){
            let discountable = 15*ctxt/100;
            let discountPrice = seatprice-discountable;
            totalSeat.innerText=discountPrice;
            field.style.display="none";
            cuponBtn.style.display="none";
       }
       else if(fieldTxt==couple){
            let discountable = 20*ctxt/100;
            let discountPrice = seatprice-discountable;
            totalSeat.innerText=discountPrice;
            field.style.display="none";
            cuponBtn.style.display="none";
       }
      })
      function goToPage() {
      window.location.href = "sucess.html";
    }
 function disableMe (myBtn){
  const btn = document.getElementById(myBtn);
  btn.setAttribute("disabled","true");
 }