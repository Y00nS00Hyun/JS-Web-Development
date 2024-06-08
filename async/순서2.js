async function test1() {
    const result = await Promise.resolve('success');
    console.log(result);
}

async function test2() {
    try {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => { resolve('last'); }, 3000);
        });
        const result = await p;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

async function test3() {
    try {
        const result = await Promise.reject('fail');
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

test1();
console.log('JavaScript');
test2();
console.log('Programming');
test3();


// 결과: JavaScript - Programming - success - fail - last