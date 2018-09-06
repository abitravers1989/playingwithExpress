var AWS = require('aws-sdk');
var uuid = require('uuid');
var fs = require('fs');

// var bucketName = 'node-sdk-example-' + uuid.v4();
// //create name for uploaded object key 
// var keyName = 'key-test.txt'

// //create a promise on s3 service object
// var bucketPromise = new AWS.S3({ apiVersion: '2018-08-01' }).createBucket({ Bucket: bucketName }).promise();

// bucketPromise.then(
//     function (data) {
//         //create param for putObject call
//         var objectParams = { Bucket: bucketName, Key: keyName, Body: "hi" }
//         //create object upload promise 
//         var uploadPromise = new AWS.S3({ apiVersion: '2018-08-01' }).putObject(objectParams).promise();
//         uploadPromise.then(
//             function (data) {
//                 console.log("uploaded")
//             });
//     }).catch(
//         function (error) {
//             console.error(error, error.stack)
//         })

fs.readFile('s3File.txt', (error, data) => {
    if (error) { throw error; }

    var base64Data = new Buffer(data, 'binary')

    console.log(AWS.S3)

    var s3 = new AWS.S3();
    s3.client.putObject({
        Bucket: 'aws-bucket',
        Key: 'key',
        Body: base64Data,
        ACL: 'public-read'
    }, (resp) => {
        console.log(arguments);
        console.log('upload package')
    })
})