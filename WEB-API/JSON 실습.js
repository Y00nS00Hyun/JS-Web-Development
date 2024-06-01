//자바스크립트 객체 -> JSON (string 타입) -> body: JSON.stringify(newMember),
//JSON -> 자바스크립트 객체 -> const members = JSON.parse(result);

//1 직원 정보 입력
const newMember = {
  name: "Soohyun",
  email: "abc@naver.com",
  department: "kitty",
};

//2 JS -> JSON
fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  body: JSON.stringify(newMember),
})
  //3 JSON -> JS
  .then(() => {
    fetch("https://learn.codeit.kr/api/members")
      .then((response) => response.text())
      .then((result) => {
        const members = JSON.parse(result);
        console.log(members[members.length - 1]);
      });
  });
