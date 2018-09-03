const csv = require('csv-parser');
const fs = require('fs');
const csvtojson=require('csvtojson');

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
    let creditObject = {};
    let amount = 0;
    jsonObjParam.forEach(element => {
        let credit = element.CreditAmount
        if (credit){
            amount += parseFloat(element.CreditAmount);
        }
    });
    creditObject["Amount"] = amount;
    console.log(creditObject)
}

// make this an object ... output it as endpoint .. swagger contract


// module.exports = class readTransactions {
//     constructor(filePath) {
//         this.filePath = filePath;
//     }

//     convertCsvFileToJson() {
//         csvtojson()
//         .fromFile(this.filePath)
//         .then((jsonObj) => {
//             calculateTotalCreditAmount(jsonObj)
//         });
//     }

//     calculateTotalCreditAmount(jsonObjParam) {
//         let creditObject = {};
//         let amount = 0;
//         jsonObjParam.forEach(element => {
//             let credit = element.CreditAmount
//             if (credit){
//                 amount += parseFloat(element.CreditAmount);
//             }
//         });
//         creditObject["Amount"] = amount;
//         console.log(creditObject)
//     }
// };






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
