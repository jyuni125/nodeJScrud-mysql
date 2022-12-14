const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');   //to use local api

const app = express();


//MIDDLEWERE
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//routes
const accounts = require('./routes/accounts');
app.use('/accounts',accounts);

//ports
const port = 3003;


//testing connection on server
app.listen(port, async()=>{
    console.log("working port : ",port);
})