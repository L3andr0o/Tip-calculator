const amount = document.querySelector(".amount");
const people = document.querySelector(".person");
const tipamount = document.querySelector(".to-pay");
const total = document.querySelector(".perperson");
const reset = document.querySelector(".reset");
const label = document.querySelectorAll(".label");
const custom = document.querySelector(".custom");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
let selected; 

const operationFunction = (value1,value2,value3,inner)=>{
    const result = Number(value1 /100 * value2 / value3);
    inner.textContent = "$" + Number(result.toFixed(2));
    const result2 = Number( amount.value / people.value + result);
    total.textContent = "$" + Number(result2.toFixed(2));
};

label.forEach((doc)=> {
    doc.addEventListener("click",(e)=>{
        selected = doc.id;
        label.forEach((doc)=>{
            if(doc.id == selected){
                doc.classList.toggle("select");
                custom.value = null;
                operationFunction(amount.value,selected,people.value,tipamount);
                reset.classList.remove("reset-none");
                reset.classList.add("resetover")
                return
            } doc.classList.remove("select");
        })
    })
});


custom.addEventListener("focus",(e)=>{
    label.forEach((doc)=> doc.id == selected && doc.classList.remove("select"))
});

const finalResult = (input)=>{
    input.addEventListener("change",(e)=>{
        if(custom.value > 0){
        selected == false;
        operationFunction(amount.value,custom.value,people.value,tipamount);
        }
        else{
            operationFunction(amount.value,selected,people.value,tipamount);
        }        
    });
};

const borderChange = (input,error)=>{
    input.addEventListener("change",(e)=>{
        if(input.value == 0 ){
            input.classList.add("border-error");
            input.classList.remove("border-true");
            error.textContent = "Can't be zero";
            reset.classList.remove("reset-none");
        }else{
            input.classList.remove("border-error");
            input.classList.add("border-true");
            error.textContent = ""
    }
    })
};
borderChange(amount,error1);
borderChange(people,error2);


reset.addEventListener("click",(e)=>{
    e.preventDefault();
    label.forEach((doc)=>{
        selected == false;
        doc.classList.remove("select")
    });
    custom.value = null;
    amount.value = null;
    people.value = null;
    tipamount.textContent = "$0.00";
    total.textContent = "$0.00";
    amount.classList.remove("border-true");
    people.classList.remove("border-true");
    amount.classList.remove("border-error");
    people.classList.remove("border-error");
    reset.classList.add("reset-none");
    reset.classList.remove("resetover");
    error1.textContent = "";
});

finalResult(amount)
finalResult(people)
finalResult(custom);

const resetNone = (button)=>{
    if(!amount.value && !people.value){
        button.classList.add("reset-none");
        return
    }button.classList.remove("reset-none");
};

const resetValues = (input)=>{
    input.addEventListener("change",(e)=>{
        if(input.value > 0){
            reset.classList.remove("reset-none")
        }reset.classList.add("resetover")
    })
}

resetNone(reset);
resetValues(amount);
resetValues(people);
resetValues(custom);





    