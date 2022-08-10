require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

mongoose.connect("mongodb://localhost:27017/askItDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  userName: String,
  profilePic: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/getuser", function(req, res) {
  // update this function to get the _id of current logged in user from firebase
  const id = "606cd435dd0a1b26d83a0c98";
  User.findById(id, function(err, user){
    res.send(user);
  });
});

app.post("/editprofile", function(req, res) {
  const id = req.body._id;
  User.findByIdAndUpdate(id, {$set: req.body.data},function(err, user) {
    if(err) {
      console.log(err);
    }else {
      console.log("Profile of user, id: " + id + " updated successfully.");
    }
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, function () {
  console.log("server has started ...");
});
