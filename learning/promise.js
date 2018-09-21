const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('didnt work')
    }, 1000);
});

p
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })