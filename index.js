const express = require('express')
// const { connectToDb } from "./utils";
// require('dotenv').config()
const {Item} = require('./Items.js')
const {connectToDb} = require('./utils.js')
const app = express();
const port = 3000;
// we can connect to db when the connection is established

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
  // this gives the home page
});
// here we can make various endpoints and use them
app.post('/addItem', (req,res) => {
    // here we add the item to our list
    const item = new Item({
        name : "abhishek"
    })
    item.save(function (err) {
        if (err) {
            throw err;
        } else {
            console.log('saved abhishek')
        }
    });
})
app.get('/getItem', (req,res) => {
    // here we get all the items
})
app.listen(port, () => {
    // here we need to connect to our
  connectToDb()
  console.log(`Server is running on port ${port}`);
});