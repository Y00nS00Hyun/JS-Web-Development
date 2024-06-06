function pick(menus) {
    console.log('Pick random menu!');
    const p = new Promise((resolve, reject) => {
        if (menus.length === 0) {
            reject(new Error('Need Candidates'));
        } else {
            setTimeout(() => {
                const randomIdx = Math.floor(Math.random() * menus.length);
                const selectedMenu = menus[randomIdx];
                resolve(selectedMenu); // 선택된 메뉴를 resolve로 반환
                //resolve 함수: Promise 객체를 직접 만들 때, 생성된 Promise 객체를 fulfilled 상태로 만들어주는 함수
            }, 1000); // 시간이 걸리는 걸 시뮬레이션하기 위한 1초입니다
        }
    });
    return p;
}

function getRandomMenu() {
    return fetch('https://learn.codeit.kr/api/menus')
        .then((response) => response.json())
        .then((result) => {
            const menus = result;
            return pick(menus); // random pick function 호출
        });
}

getRandomMenu()
    .then((menu) => {
        console.log(`Today's lunch is ${menu.name} ~`);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log('Random Menu candidates change every day');
    });
