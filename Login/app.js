/* const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");*/

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event){

    event.preventDefault();
    console.log(loginInput.value);

   /*  console.log(loginInput.value);
    console.log("click!!");
    const username = loginInput.value;
    console.log(username);
    if(username === ""){
       alert("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long.");
    }*/

}
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

loginForm.addEventListener("submit", onLoginSubmit);