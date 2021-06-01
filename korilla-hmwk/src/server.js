// /////////////////////////
// // DEPENDENCIES
// /////////////////////////
// const express = require("express")
// const mongoose = require('mongoose');
// const methodOverride = require('method-override')


// /////////////////////////
// // The Application Object
// /////////////////////////
// const app = express()

// /////////////////////////
// // MIDDLEWARE
// /////////////////////////
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(express.json())

// /////////////////////////
// // Routes
// /////////////////////////
// const ReceiptSch = require('./models/schema.js');
// const seedReceipts = require('./models/receiptData.js');

// //SEED ROUTE
// app.get('/seeddata', (req, res) => {
//     // seeds the data
//     ReceiptSch.create(seedReceipts, (err, createdReceipts) => {
//       // logs created users
//       console.log('get the log: ', createdReceipts);
//       // redirects to index
//       res.json('/korilla');
//     });
//   });


// //INDEX ROUTE
// app.get("/korilla", (req, res)=>{
//     //send receipts array
//     ReceiptSch.find({}, (err, getData)=>{
//         res.json({getData})
//     })
// })

// //SHOW ROUTE
// app.get("/korilla/:id", (req, res)=>{
//     //send korilla as json
//     ReceiptSch.find({}, (err, getReceipts)=>{
//         res.json(getReceipts[req.params.id])
//     })
// })




// /////////////////////////
// // Listener
// /////////////////////////
// app.listen(1337, () => console.log("Listening on port 1337"));

// mongoose.connect('mongodb://localhost:27017/Receipts', { useNewUrlParser: true , useUnifiedTopology: true } );
// mongoose.connection.once('open', () => {
//     console.log('connected to mongo');
// });