fetch('https://jsonplaceholder.typicode.com/users')     // JS , 리퀘스트
    .then((response) => response.json())                // 리스폰스 JSON 으로 변형
    .then((result) => {
        console.log(result);                            // 출력
        //throw new Error('too long');                  // 에러 투척 -> catch로 넘어감 (다음 then 실행 안됨)
    })
    .then((result) => {
        console.log(result);                            // 앞의 블록 return값이 없으므로 result == undefined
        //throw new Error('no required field');         // error -> catch
    })
    .catch((error) => {
        console.log(`${error.name}: ${error.message}`);
    });
