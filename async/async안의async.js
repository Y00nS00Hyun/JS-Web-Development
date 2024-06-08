//고객의 데이터에서 민감정보를 삭제시키는 코드를 작성해보자

//async 함수 1 : 민감정보를 삭제하는 코드
const applyPrivacyRule = async function (users) {
    const resultWithRuleApplied = users.map((user) => {
        const keys = Object.keys(user);
        const userWithoutPrivateInfo = {};
        keys.forEach((key) => {
            if (key !== 'address' && key !== 'phone') {
                userWithoutPrivateInfo[key] = user[key];
            }
        });
        return userWithoutPrivateInfo;
    });

    const p = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(resultWithRuleApplied); }, 2000);
    });

    return p;
};

//async 함수 2: 고객의 정보에서 실행시킴
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.text();
        const users = JSON.parse(result);
        const resultWithPrivacyRuleApplied = await applyPrivacyRule(users); //async 함수2 안의 async 함수1 : await 붙여서 사용
        return resultWithPrivacyRuleApplied;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('exit');
    }
}