document.querySelectorAll(".cart-item").forEach(item=>{
    let amountElement = item.querySelector("#amount");
    let amount = parseInt(amountElement.value);
    let priceElement = item.querySelector(".cart-item__total-price");
    
    let price = parseFloat(priceElement.textContent.replace('$', ''));

    let render = (newamount)=>{
        amountElement.value=newamount;
        updateTotalPrice(newamount);
    }

    let handlePlus=()=>{
        amount++;
        render(amount);
    }

    let handleMinius=()=>{
        if(amount>1){
            amount--;
            render(amount);
        }
    }

    let updateTotalPrice = (newamount) =>{
        let totalElement = item.querySelector('.cart-item__total-price');
        let total = price * newamount;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
  
    item.querySelector('.cong').addEventListener("click",handlePlus);
    item.querySelector('.tru').addEventListener("click",handleMinius);

    amountElement.addEventListener("input",()=>{
        amount=parseInt(amountElement.value);
        if(isNaN(amount) || amount<1){
            amount=1;
        }
        else if(amount>100){
            amount=100;
            alert("hay thanh toan");
        }
        render(amount);
    })
    updateTotalPrice(amount);
})


//shipping add new address
const optionlist = document.querySelector(".form__options-list");
const option = document.querySelectorAll(".form__option");
const input = document.getElementById("city");

option.forEach(option=>{
    option.addEventListener("click",()=>{
        input.value=option.textContent;
    })
});