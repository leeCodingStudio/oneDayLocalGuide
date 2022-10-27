const logo = document.querySelector("#logo");

logo.addEventListener("click", function(){
    location.href = "../mainpage/main.html";
});

const inputEmail = document.querySelector(".input-email");
const p = document.querySelector("p");

const inputPw = document.querySelector(".input-pw");
const p2 = document.querySelector("#warning2");

const body = document.querySelector("body");
const nextBtn = document.querySelector("#next-button");

var check1 = false;
var check2 = false;

body.addEventListener("click", function(){
    if(check1 && check2){
        nextBtn.style.backgroundColor = "black";
    } else {
        nextBtn.style.backgroundColor = "#cbcbcb";
    }
    console.log(check1, check2);
});

body.addEventListener("input", function(){
    if(check1 && check2){
        nextBtn.style.backgroundColor = "black";
        nextBtn.style.cursor = "pointer";
    } else {
        nextBtn.style.backgroundColor = "#cbcbcb";
        nextBtn.style.cursor = "default";
    }
});


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
        check1 = true;
    } else {
        p.style.visibility = "visible";
        check1 = false;
    }
});

inputPw.addEventListener("click", function(){
    if(inputPw.value){
        p2.style.visibility = "hidden";
    } else {
        p2.style.visibility = "visible";
    }
});

inputPw.addEventListener("input", function(){
    if(inputPw.value){
        p2.style.visibility = "hidden";
        check2 = true;
    } else {
        p2.style.visibility = "visible";
        check2 = false;
    }
})

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



/* -------------비밀번호 표시--------------- */
const eye = document.querySelector("#eye");
const password = document.querySelector(".input-pw");
var clickEye = 0;

eye.addEventListener("click", function(){
    if(clickEye % 2 == 1){
        eye.style.background = "url('./img/eye.svg')";
        password.type = "password";
    } else {
        eye.style.background = "url('./img/closeEye.svg')";
        password.type = "text";
    }
    clickEye++;
});