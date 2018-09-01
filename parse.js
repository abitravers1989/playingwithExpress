const csv = require('csv-parser');
const fs = require('fs');

function readDebitTransaction(fileName) {
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', function(data) {
        console.log(data.TransactionDescription + '  ' + data.DebitAmount)
    })
}

function readCreditTransaction(fileName) {
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', function(data) {
        console.log(data.TransactionDescription + '  ' + data.CreditAmount)
    })
}

//readDebitTransaction('transactionsDebit.csv');
console.log("*********CREDIT*************")
readCreditTransaction('transactionsCredit.csv');