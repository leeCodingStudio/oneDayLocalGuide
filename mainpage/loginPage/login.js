const inputEmail = document.querySelector(".input-email");
const p = document.querySelector("p");

inputEmail.addEventListener("click",function(){
    if(inputEmail.value){
        p.style.visibility = "hidden";
    } else {
        p.style.visibility = "visible";
    }
});

inputEmail.addEventListener("input",function(){
    if(inputEmail.value){
        p.style.visibility = "hidden";
    } else {
        p.style.visibility = "visible";
    }
});

const button = document.querySelector("#hwasal");
const change = document.querySelector("#email-form");
const forgotEmail = document.querySelector("#forgot-email-box");
var count = 0;
button.addEventListener("click",function(){
    if(count%2==0){
        button.style.transform = "rotate(-180deg)";
        change.style.visibility = "visible";
        forgotEmail.style.visibility = "visible";
    }else{
        button.style.transform = "rotate(0)";
        change.style.visibility = "hidden";
        p.style.visibility = "hidden";
        forgotEmail.style.visibility = "hidden";
    }
    count++;
})

    

// button.addEventListener("click",function(){
//     open.style.visibility = "visible";
// })