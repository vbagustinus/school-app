let express = require('express');
let app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');

let index = require('./routers/index');
let subject = require('./routers/subject');
let teacher = require('./routers/teacher');
let student = require('./routers/student');

app.use('/', index);
app.use('/subject', subject);
app.use('/teacher', teacher);
app.use('/student', student);

app.listen(3000,()=>{
  console.log('OTW Bos di port 3000');
})