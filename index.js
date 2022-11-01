//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DATABASE/DB');
var cors = require('cors');

var app = module.exports = express();

var isLoggedIn = false;
var isAdmin = false;
var LoggedInUsername = "";

//----------------------- ----------------------- -----------------------
app.use(cors());
app.engine('.html', require('ejs').__express);      //Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. The __express method is simply a function that engines use to hook into the Express view system by default, so if we want to change "foo.ejs" to "foo.html" we simply pass _any_ function, in this case `ejs.__express`.
app.set('views', path.join(__dirname, "front", "public"))   // since express defaults to CWD/views
app.use(express.static(path.join(__dirname, 'client', 'src')));  // Path to our public directory
app.set('view engine', 'html')  // Without this you would need to supply the extension to res.render() ex: res.render('users.html').
app.use( bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json());

//----------------------- ----------------------- -----------------------

app.get("/users", (req, res) => DB.USERS_DB.getUsersList().then( (result) => res.json(result)) );

app.post('/login', (req, res) =>  {
  let username = req.body.Username;
  let email = req.body.Email;
  let password = req.body.Password;
  let message = {Username: username, Email: email, Password: password}

  console.log(message);

  DB.USERS_DB.loginUser(message)
    .then( (result) => {
      console.log(result);
      if(result == false) {
        res.send("TRY AGAIN LATER")
      }else{
        isLoggedIn = true;

        isAdmin = (username === 'dietitianRashu');
        console.log("\n\n--> isAdmin = "+isAdmin+"\n\n")

        LoggedInUsername = username;
        
        res.send("LOGGED IN isAdmin = "+isAdmin)
      }    
  })
  // res.send(`Username: ${username} Email: ${email} Password: ${password}`);
});

app.get("/login", (req,res) =>{
  res.json({
    isLoggedIn: isLoggedIn,
    isAdmin: isAdmin,
    Username: LoggedInUsername
  })
});

app.get("/logout", (req,res) =>{
  isLoggedIn = false;
  isAdmin = false;
  LoggedInUsername = "";
});

//---------------------------------------- P O R T -----------------------------------------------

app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });

