HTMLCollection.prototype.forEach = Array.prototype.forEach;

    const inputId = document.querySelector(".input-id");
    const pId = document.querySelector(".warning-id");

    const inputPw = document.querySelector(".input-pw");
    const pPw = document.querySelector(".warning-pw");

    const inputPhonenumber = document.querySelector(".input-phonenumber");
    const pPhonenumber = document.querySelector(".warning-phonenumber");

    const inputAge = document.querySelector(".input-age");
    const pAge = document.querySelector(".warning-age");

    const inputName = document.querySelector(".input-name");
    const pName = document.querySelector(".warning-name");


    inputId.addEventListener("click",function(){
        if(inputId.value){
            pId.style.visibility = "hidden";
        } else{
            pId.style.visibility = "visible";
        }
    });

    inputId.addEventListener("input",function(){
        if(inputId.value){
            pId.style.visibility = "hidden";
        } else{
            pId.style.visibility = "visible";
        }
    });

    inputPw.addEventListener("click",function(){
        if(inputPw.value){
            pPw.style.visibility = "hidden";
        } else{
            pPw.style.visibility = "visible";
        }
    });

    inputPw.addEventListener("input",function(){
        if(inputPw.value){
            pPw.style.visibility = "hidden";
        } else{
            pPw.style.visibility = "visible";
        }
    });

    inputPhonenumber.addEventListener("click",function(){
        if(inputPhonenumber.value){
            pPhonenumber.style.visibility = "hidden";
        } else{
            pPhonenumber.style.visibility = "visible";
        }
    });

    inputPhonenumber.addEventListener("input",function(){
        if(inputPhonenumber.value){
            pPhonenumber.style.visibility = "hidden";
        } else{
            pPhonenumber.style.visibility = "visible";
        }
    });

    inputAge.addEventListener("click",function(){
        if(inputAge.value){
            pAge.style.visibility = "hidden";
        } else{
            pAge.style.visibility = "visible";
        }
    });

    inputAge.addEventListener("input",function(){
        if(inputAge.value){
            pAge.style.visibility = "hidden";
        } else{
            pAge.style.visibility = "visible";
        }
    });

    inputName.addEventListener("click",function(){
        if(inputName.value){
            pName.style.visibility = "hidden";
        } else{
            pName.style.visibility = "visible";
        }
    });

    inputName.addEventListener("input",function(){
        if(inputName.value){
            pName.style.visibility = "hidden";
        } else{
            pName.style.visibility = "visible";
        }
    });

