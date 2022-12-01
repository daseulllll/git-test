//JavaScript 는 HTML과 연결되어있다.

document.title = "Hello! From JS!";

const title = document.getElementById("title");

title.innerText="Got you!";

console.dir(title);
console.log(title.id);
console.log(title.className);

//javaScript에서 html element를 가져오고 검색하는 것

//getElementsByTagName,getElementsByName : array 를 반환
//getElementsByClassName : 많은 element를 한번에 가지고 와야하는 경우, array 를 반환

const hellos = document.getElementsByClassName("hello");

console.log(hellos);

//querySelector : element를 CSS방식으로 검색가능,(CSS selector 자체를 전달) -> id 검색하고싶다면 #
//class name hl 가져오고싶은것 적음. + CSS selector방식으로 검색할 수 있음 (ex. h1:first-child) 첫번째element만 가져옴. but,다 가져오고싶다면, querySelectorAll 사용

const title = document.querySelector(".hello h1")

console.log(title);
//element 내부 보고싶으면 console.dir();

//const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "blue";
}
//: event(on붙은거,어떤 행위를 하는 것)를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
title.addEventListener("click", handleTitleClick);