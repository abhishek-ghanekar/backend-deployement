const mongoose = require('mongoose');
const connectToDb = () => {
  mongoose.connect("mongodb+srv://a8hiyt:AXPB3Diy82kWpDeZ@cluster0.z35spyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));
}
module.exports = { connectToDb };
