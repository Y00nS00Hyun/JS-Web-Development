fetch("https://www.google.com") //request 보냄
  .then((response) => response.text()) // 받아서 return
  .then((result) => {
    console.log(result); //reponse의 내용
  });
