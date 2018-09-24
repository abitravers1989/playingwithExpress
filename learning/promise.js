// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(Error('didnt work'));
//     }, 1000);
// });

// p
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err);
//     })

const posts = [
    { title: 'i love js', author: 'wes bos', id: 1 },
    { title: 'sankes', author: 'snake master', id: 2 },
    { title: 'pencilcases', author: 'cat friend', id: 3 },
];

const authors = [
    { name: 'wes bos', bio: 'sommee' },
    { name: 'snake master', bio: 'sommee2' },
    { name: 'cat friend', bio: 'sommee3' },
]

// function getPostById(id) {

// }

function getPostById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.find(element => element.id === id))
        }, 200)
    })
}

getPostById(2)
    .then(data => { console.log(data) });

console.log("timing")