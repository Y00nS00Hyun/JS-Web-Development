fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json(); // <- Case(1) 콜백에서 Promise 객체 리턴
        return 10; // <- Case(2) 콜백에서 Promise 객체 X 값을 리턴
        // <- Case(3) 콜백에서 아무것도 리턴 X
        throw new Error('failed'); // <- Case(4) 콜백 실행 중 에러 발생
    })
    .then((result) => {
        console.log(result);
    });


// 존재하지 않는 URL
fetch('https://jsonplaceholder.typicode.commmmmm/users')
    .then((response) => response.json()) // <- Case(5) 콜백 실행 X
    .then((result) => { }, (error) => { console.log(error) });