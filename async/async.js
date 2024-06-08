async function fetchAndPrint() {
    console.log(2);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(7);
    const result = await response.text();
    console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);

// 엄청 오래 걸리는 작업
for (let i = 0; i < 1e8; i++) {
    if (i === 1e8 - 1) {
        console.log(4);
    }
}

console.log(5);
console.log(6);

