async function fetchAndPrint() {
    const response = await fetch('https://www.google.com');
    const result = await response.text();
    console.log(result);
}

console.log('Start');
fetchAndPrint();
console.log('End');


//start -> End -> 리스폰스 내용