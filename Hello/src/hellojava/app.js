const a = 5;

console.log(a+2);
console.log(a*2);
console.log(a/2);

const amIFat = null;    //always const 상수, 생성후 변경x
let something;          //sometimes let 생성할때 사용, 값 변경o
console.log(something,amIFat); //never var 재선언 o(과거형)

//undefined=값이 정의되지 않음
//null=값이 없음이 할당된다 즉, 정의됨

const dayOfWeek = ["mon","tue","wed","thu","fri","sat"]; //array :하나의 variable안에 데이터list 가지는 것.  쉼표로 구분, []

//Get Item from Array
console.log(dayOfWeek[0]);

//Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek);

/////////////////////////////////////////////////2022.11.21
// {object} : property를 가진 데이터 저장(설명정보 ㅇ), array로 하면 각각 뭘 해당하는 바 알 수 없음. 고로 list -> array 
const player = {
    name : "nico",
    points : 10,
    fat : true,
 }
 console.log(player); //console. ==>object에서 얻어오는 것
 console.log(player.name);
 player.lastName = "potato"; //property 추가 가능
 player.fat = false;        //이전에 const 변경못한다고 했었는데, const내에 업데이트는 가능
 console.log(player.fat);

 //function : 반복해서 사용할 수 있는 코드조각
 //argument :  function을 실행하는 동안 정보를 function에게 보낼 수 있는 방법
 function plus(a,b){
    console.log(a+b);
 }
 function divide(a,b){
    console.log(a / b);
 }
 plus(60,8);
 divide(98,20);

 const players= {
    name :"nico",
    sayHello: function(otherPersonName){
        console.log("hello"+otherPersonName + "nice to meet you");
    }
 };
 console.log(players.name);
 players.sayHello("lynn");
 //=====================================2022.11.23