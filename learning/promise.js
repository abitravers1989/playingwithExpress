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
        const post = posts.find(element => element.id === id)
        setTimeout(() => {
            if (post) { resolve(post) }
            else { reject(Error('No post')) }
        }, 200)
    })
}

function findAuthorObject(authorName) {
    return new Promise((resolve, reject) => {
        // resolve(console.log(authorName))
        // console.log(authors)
        const author = authors.find(authorObject => authorObject.name === authorName)
        if (author) {
            resolve(author)
        } else {
            reject(Error('no author object'))
        }
    })
}

getPostById(2)
    .then(data => {
        findAuthorObject(data.author)
            .then(foundAuthor => { console.log(foundAuthor) })
    })



//replace author string with author object 

