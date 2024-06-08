const p1 = fetch('https://jsonplaceholder.typicode.com/users?id=1')
    .then((response) => response.text());
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('hello'); }, 2000);
});
const p3 = Promise.resolve('Success');
// const p4 = Promise.reject(new Error('Fail'));

async function test() {
    console.log(await p1);
    console.log(await p2);
    console.log(await p3);
    // console.log(await p4);
}

console.log('----Start----');
test();
console.log('-----End----');
