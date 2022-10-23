/* 초기화면 : subscription, 
첫번째 메뉴에서 두번째 메뉴를 누르면
첫번째 메뉴의 css에다가 transform="translate(-700px)"과
두번째 메뉴의 css에다가 transfrom="translate(-700px)"를 동일하게 준다.

두번째 메뉴에서 첫번째 메뉴를 누르면
두번째 메뉴의 trnasform="translate(700px)"과
첫번째 메뉴의 transform="translate(700px)"를 동일하게 준다. 
*/


const subscription = document.querySelector("div.subscription");
const writeContent = document.querySelector("div.write-content");

const firstBtn = document.querySelector("div.write-guide");
const secondBtn = document.querySelector("div.check-guide");

firstBtn.addEventListener("click", function(){
    writeContent.style.transform = "translate(0px)";
    subscription.style.transform = "translate(0px)";
});

secondBtn.addEventListener("click", function(){
    subscription.style.transform = "translate(-700px)";
    writeContent.style.transform = "translate(-700px)";
});