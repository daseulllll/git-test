# Git Study
****

> **원격 저장소 연결 및 끊기** <br>
  `연결 git remote add <name> <url> ` <br>
  `끊기 git remote remove <name> `
<br>

> **브랜치 삭제 및 생성** <br>
`삭제 git branch -d <branchname> ` <br>
`생성 git branch <branchname> ` <br>
<br>

> **파일 삭제** <br>
>> 로컬저장소+원격저장소 파일 모두 삭제 <br>
 `삭제할 파일 git rm ` <br>
 `삭제할 폴더 git rm -r ` <br>

>> 원격저장소 파일만 삭제<br>
`삭제할파일 git rm --cached ` <br>
 _**=>커밋, 푸시해줘야 적용됨!!!!**_

 <br>
  ✅  🐣 **git에 대해 알게 된 추가지식** 🐣 <br>


   1. commit&push를 했음에도 잔디 심겨지지 않아요‼ <br>
       
       1. git email != local email   <br>
       2. Master branch에서 작업하지 않은 경우나 현재 branch가 default가 아닐 때!    <br>


   2. .gitignore =>상단위치할 것!<br>
      #나만의 gitignore!  <br>
    .cache/  <br>
    dist/  <br>
    node_modules/  <br>
    package-lock.json  <br>
    일단 이것만,,! 폴더색깔 회색됨!ㅎ    
