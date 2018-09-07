// var width = 100;
// console.log(width);
// var width = 200;
// console.log(width)

//var variables are function scoped so can access dogYears in global scope.
//so can change it outside 
var age = 100;
if (age > 12) {
    var dogyears = age * 7;
    console.log(`you are ${dogyears} dog years old`)
}
console.log(dogyears);

//now can't access this outside if statement
var age = 13;
if (age > 12) {
    let dogYears = age * 7;
    console.log(`you are ${dogYears} dog years old`)
}
//doesn't work
//console.log(dogYears);

//const object is immutable but can change attributes within object
///in below example person cannot be re-assinged but attributes can be changed.
const person = {
    name: 'Wes',
    age: 28
}
console.log(person)
person.name = 'cats';
console.log(person)
//can't change any attributes now
const wes = Object.freeze(person);
console.log(wes)
    //ify .. function which is invoked imediately 
    (function () {
        var name = 'abi'
    })();
//let and const fix this
{
    const name = 'abi'
}
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('the number is' + i);
    }, 1000);
}





for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('the number is' + i);
    }, 1000);
}
//cls the number is 10 10times .. because after one second i has already incremeted to 10
//variable i is being over written every time 
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('the number is' + i);
    }, 1000);
}
// temporal deadzone .. with let and const cannot access a variable before it is defined




ARROW FUNCTIONS


const names = ['wes', 'no', 'snakeHouse']
//map takes an entire array and transforms it into something new
const fullNames = names.map(function (name) {
    return `${name} pencil`
});
console.log(fullNames)
//delete function and replace with =>
const fullNames15 = names.map((name) => {
    return `${name} bos`;
})
console.log(fullNames15);

//if only have one paramater before arrow function don't need ()
// with 2 you would need ()
const fullNames2 = names.map(name => {
    return `${name} bos`;
})
console.log(fullNames2);
//also with => when you delete {} it explicilty returns
const fullNames3 = names.map(name => `${name} bos`)
console.log(fullNames3);
const fullNames4 = names.map(() => `kbos`)
console.log(fullNames4);
//arrow functions are nameless
//can put them in a variable
const shitFunction = () => { console.log('shh') }
shitFunction()




const race = '100m dash';
const winners = ['alwaysMe', 'babdger', 'fingerlands'];
const win = winners.map((person, i) => ({ name: person, race: race, place: i + 1 }))
console.table(win)
//if called the same thing like race can just declare once 
const win2 = winners.map((person, i) => ({ name: person, race, place: i + 1 }))
console.table(win2)
console.log()



//create an array of random numbers
const randomiser = () => {
    let numbers = [];
    for (var i = 0; i < 40; i++) {
        //will disapear on each iteration
        const number = i + Math.round(Math.random());
        numbers.push(number);
    }
    return numbers;
}
const ages = randomiser();
const old = ages.filter(age => age >= 13);
console.log(old)
const young = ages.filter(randmisedArrayNumber => randmisedArrayNumber <= 13);
console.log(young);
