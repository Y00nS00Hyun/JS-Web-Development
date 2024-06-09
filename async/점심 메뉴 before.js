function pick(menus) {
  console.log("Pick random menu!");
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error("Need Candidates"));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000);
    }
  });
  return p;
}

async function getRandomMenu() {
  console.log("---Please wait!---");
  const response = await fetch("https://learn.codeit.kr/api/menus");
  const result = await response.text();
  const menus = JSON.parse(result);
  return pick(menus); // ! random pick function
}

getRandomMenu()
  .then((menu) => {
    console.log(`Today's lunch is ${menu.name}~`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Random Menu candidates change everyday");
  });
