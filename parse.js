const csv = require('csv-parser');
const fs = require('fs');
const csvtojson=require('csvtojson');

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
//console.log("*********CREDIT*************")
//readCreditTransaction('transactionsCredit.csv');




const csvFilePath = 'transactionsCredit.csv';
csvtojson()
.fromFile(csvFilePath)
.then((jsonObj) => {
    //console.log(jsonObj)
    balance(jsonObj)
})

// const jsonArray = await csv().fromFile(csvFilePath)
// console.log(jsonArray);

function balance(jsonObjParam) {
    let amount = 0;
    jsonObjParam.forEach(element => {
        amount += element.CreditAmount.to;
    });
    console.log(amount)
}