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
