/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")
const mongoose = require('mongoose');
const methodOverride = require('method-override')


/////////////////////////
// The Application Object
/////////////////////////
const app = express()

/////////////////////////
// MIDDLEWARE
/////////////////////////
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json())

/////////////////////////
// Routes
/////////////////////////
const Turtle = require('./models/schema.js');
const seedTurtles = require('./models/turtles.js');

//SEED ROUTE
// app.get('/seeddata', (req, res) => {
//     // seeds the data
//     Turtle.create(seedTurtles, (err, createdTurtles) => {
//       // logs created users
//       console.log('get the log: ', createdTurtles);
//       // redirects to index
//       res.json('/turtles');
//     });
//   });


//TURTLE ROUTE
app.get("/turtles", (req, res)=>{
    //send turtles array
    Turtle.find({}, (err, getData)=>{
        res.json({getData})
    })
})

// // home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello Git this bread"
    })
})

//SHOW ROUTE
app.get("/turtles/:id", (req, res)=>{
    //send turle as json
    Turtle.find({}, (err, getTurtles)=>{
        res.json(getTurtles[req.params.id])
    })
})

// //POST ROUTE
app.post('/turtles',(req, res)=>{
    Turtle.find({},(err, getTurtles)=>{
        getTurtles.push(req.body)
        res.json({getTurtles})
    })
})
// app.post("/turtles", (req, res)=>{
//     //push the request body into array
//     Turtle.push(req.body)
//     //send the turtles array as JSON
//     res.json(turtles)
// })

// //UPDATE ROUTE
app.put("/turtles/:id", (req, res)=>{
    //replace turtle at the index with req body
    Turtle.findById(req.params.id,(err, getTurtles) =>{
        getTurtles = req.body;
        res.json(getTurtles)
    })
})
// app.put("/turtles/:index", (req, res)=>{
//     //replace turtle at the index with req body
//     turtles[req.params.index] = req.body
//     // send turtles array as json
//     res.json(turtles)
// })


// //DELETE ROUTE
app.delete("/turtles/:id", (req, res)=>{
    //remove the turtle at the specified index
    Turtle.find({},(err, getTurtles)=>{
        getTurtles.splice(req.params.id, 1)
        res.json(getTurtles)
    })
})

// app.delete("/turtles/:index", (req, res)=>{
//     //remove the turtle at the specified index
//     turtles.splice(req.params.index, 1)
//     // send the turtles array as JSON
//     res.json(turtles)
// })

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, () => console.log("Listening on port 1337"));

mongoose.connect('mongodb://localhost:27017/turtle', { useNewUrlParser: true , useUnifiedTopology: true } );
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});