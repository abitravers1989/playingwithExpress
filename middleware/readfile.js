const fs = require('fs');

// module.exports = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile('hello.md', (error, data) => {
//             if (data) {
//                 console.log(data)
//                 resolve(data)
//             } else {
//                 reject(Error('cannot read file'))
//             }
//         })
//     })
// }





// module.exports = () => {
//     const fs = require('fs');
//     return function (res, next, error2) {
//         try {
//             fs.readFile('hello.md', (error, data) => {
//                 if (error) {
//                     next(error)
//                 }
//                 else {
//                     res.send(data.toString());
//                 }
//                 next()
//             })
//         } catch (error2) {
//             console.log(error2)
//         }

//     }
// }


//const fs = require('fs');

module.exports = () => {
    return function (req, res, next) {
        fs.readFile('hello.md', (error, data) => {
            if (error) {
                next(error)
            }
            else {
                res.send(data.toString());
            }
            next()
        })
    }
    // return readingFile
}

//https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498