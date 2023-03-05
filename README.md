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
 
 > **commit 취소(add o, commit -m o, push x)** <br>
 `git reset HEAD^`<br>
 `한 단계 앞 ^ // 두 단계 앞 ^^ ==> git log 확인!`
 
 <br>
 
 > **repository 합치고 싶다!**<br>
 cmd에서 branch나 따로 정하지 않은 상태, 그냥 cmd에서 들어간 상태에서<br>
 `git subtree add --prefix=폴더이름 (합쳐짐을 당할)repo주소 (합쳐짐 당하는 repo의 default branch)main or master` <br>
 ==><br>
 `git push (합침을 할 repo, cmd에 저장한대로)이름 branch`<br>
 그리곤 합쳐진 repo는 삭제하면 됨!<br>
 
 <br>
 
 > **내용 빈 것 커밋방법** <br>
  `git commit --allow-empty -m "메세지 내용"`
 
 <br>
 
  ✅  🐣 **git에 대해 알게 된 추가지식** 🐣 <br>


   1. commit&push를 했음에도 잔디 심겨지지 않아요‼ <br>
       
       1. git email != local email   <br>
       2. Master branch에서 작업하지 않은 경우나 현재 branch가 default가 아닐 때!    <br>
       ==> merge하는 경우 다시 잔디 심어짐!


   2. .gitignore =>상단위치할 것!<br>
      #나만의 gitignore!  <br>
    .cache/  <br>
    dist/  <br>
    node_modules/  <br>
    package-lock.json  <br>
    .parcel-cache/ <br>
    .parcel-cache/lock.mdb <br>
    일단 이것만,,! 폴더색깔 회색됨!ㅎ    
    
   3. git checkout할 때 <br>
    `The following untracked working tree files would be overwritten by checkout: ` <br>
    `error: 파일 이름.` <br>
    `Please move or remove them before you switch branches.` 메세지 뜰 때!<br>
    **해결 방법 =>untracked file들을 모두 제거**<br>
    👆❎진짜 웬만해선 하지말기🙅‍♀️!!!프로그램이고 파일이고 뭐고 다 날아갔던 기억..잊지말자,,됴륵..<br>
    `git clean -d -f -f` <br>
    작업중인 파일이 Stash하지 않은 경우 사라질 수 있으므로 git stash를 확인하여 작업 중인 파일이 있는지 확인 후 사용하기!
    
