const mongoose = require('mongoose');


let connectionString= process.env.MONGO_URI;

mongoose.set('strictQuery',false);
//1:connecting mongoose database using the link
mongoose.connect(
  'mongodb+srv://Nascoder:Code4free@practice.9d77jkg.mongodb.net/ExpressCafe?retryWrites=true&w=majority'
 
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


// connecting mongoose database using the  link that is stored connectionString Variable
// mongoose.connect(connectionString,
//    {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });



// connecting mongoose database using hidden variables from .env file like MONGOPASSWORD AND MONGOUSERNAME
// mongoose.connect(
// 'mongodb+srv://${process.env.MONGO_URI}:${process.env.MONGOPASSWORD}@practice.9d77jkg.mongodb.net/ExpressCafe?retryWrites=true&w=majority'
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });


