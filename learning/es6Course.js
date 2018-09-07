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



