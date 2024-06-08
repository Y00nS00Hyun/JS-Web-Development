// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         const lastUser = users[users.length - 1];
//         return lastUser.id;
//     })
//     .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
//     .then((response) => response.json())
//     .then((posts) => {
//         const lastPost = posts[posts.length - 1];
//         console.log(lastPost);
//     });

// //위 함수를 async 로 바꾸자


async function getTheLastPostOfTheLastUser() {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response2.json()
    const lastUser = users[users.length - 1];
    const id = lastUser.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const posts = await response.json()
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
    return lastPost;
}

// getTheLastPostOfTheLastUser().then((lastPost) => {
//     console.log(lastPost);
// });
getTheLastPostOfTheLastUser()

