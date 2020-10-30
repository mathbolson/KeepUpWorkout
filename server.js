const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


require("./routes/apiRoutes.js")(app);

require("./routes/htmlRoutes.js")(app);


app.listen(8080, function() {
    console.log('listening on 8080');
  });