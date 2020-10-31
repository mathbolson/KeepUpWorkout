const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');



const app = express();


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,
  {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

})
// const PORT = process.env.PORT || 8080;

require("./routes/apiRoutes.js")(app);

require("./routes/htmlRoutes.js")(app);


app.listen(8080, function() {
    console.log('listening on 8080');
  });