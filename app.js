let express = require('express');
let app = express();
var bodyParser = require('body-parser')
let session = require('express-session')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(session(
  {
    secret: 'Fox',
    resave: false,
    saveUninitialized: true
  }
))
// app.use('/',(req, res, next)=>{
  // if(req.session.username){
  //   next()
  // }else {
  //   res.render('login')
  // }
// })

let index = require('./routers/index');
let subject = require('./routers/subject');
let teacher = require('./routers/teacher');
let student = require('./routers/student');
let login = require('./routers/login');
let signup = require('./routers/signup');
let logout = require('./routers/logout');

app.use('/login', login);
app.use('/signup', signup);
app.use('/', index);
app.use('/subject', subject);
app.use('/teacher', teacher);
app.use('/student', student);
app.use('/logout', logout);

app.listen(process.env.PORT || '3000')
