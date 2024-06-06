fetch("https://learn.codeit.kr/api/interviews/summer")
  .then((response) => response.json())
  // 1. response 객체의 json 메소드를 호출하여 리스콘스의 바디 부분에 있는 JSON 데이터를 JS로 바꿔서 Promise 객체를 리턴
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter(
      (interviewee) => interviewee.result === "pass"
    );
    return newMembers;
  })
  // 2. 넘어온 interviewResult의 interviewees 배열 중 filter 메소드를 사용해 result === pass 인 것들만 추린 후, 배열을 그대로 리턴
  .then((newMembers) =>
    fetch("https://learn.codeit.kr/api/members", {
      method: "POST",
      body: JSON.stringify(newMembers),
    }))
  // 3. 저 url에 POST를 fetch함 , 배열을 JSON으로 바꿔서 리퀘스트의 바디에 담아 보냄
  .then((response) => {
    if (response.status === 200) {
      return fetch("https://learn.codeit.kr/api/members");
    } else {
      throw new Error("New members not added");
    }
  })
  // 4. 200번으로 뜨면 전체 직원 정보를 조회 (모든 직원 명단 출력하기)
  .then((response) => response.json())
  // 5. JSON -> JS 하기 (parse 안쓰고 json 메소드 씀)
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });
// 6. 출력하기

//then 메서드는 Promise 객체의 결과를 처리하는 데 사용되는 짜식!!! 🥹