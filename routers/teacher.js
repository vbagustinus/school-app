var express = require('express')
var router = express.Router()
let model = require('../models')
// define the home page route
router.get('/', function (req, res) {
  model.Teacher.findAll().then(dataTeachers => {
    let doPromise = dataTeachers.map(teachers =>{
      return new Promise((resolve , reject)=>{
        teachers.getSubject().then(dataTeacher =>{
          if(dataTeacher){
          dataTeacher['subject'] =  dataTeacher.dataValues
          }
          resolve(dataTeacher)
        })
      })
    })

    Promise.all(doPromise).then( allTeacher =>{
      dataTeachers.forEach((result, index)=> {
        // console.log('result', result)
        result['subject'] = allTeacher[index];
      }, this);
      // console.log('========================',dataTe  achers)
      res.render('teacher',{dataTeachers:dataTeachers})
    })

  });
})

router.get('/add', (req, res)=>{
  model.Subject.findAll().then((dataSubjects)=>{
    res.render('addTeacher',{dataSubjects:dataSubjects});
  })
})

router.post('/add', (req, res)=>{

  let inputTeacher = req.body;
  // console.log(inputTeacher.name)
  model.Teacher.create({
    first_name : inputTeacher.first_name,
    last_name : inputTeacher.last_name,
    email : inputTeacher.email,
    SubjectId : inputTeacher.name
  })
  .then(()=>{
    res.redirect('/teacher');
  })
})

router.get('/edit/:id',(req, res)=>{
  // console.log(req.params.id)
  model.Teacher.findById(req.params.id).then((dataTeacher)=>{
    model.Subject.findAll().then((dataSubjects)=>{
      res.render('editTeacher',{dataSubjects:dataSubjects, dataTeacher:dataTeacher});
    })
  })
})


router.post('/edit/:id', (req, res)=>{
  let updateTeacher = req.body;
  model.Teacher.update({
    first_name: updateTeacher.first_name,
    last_name: updateTeacher.last_name,
    email: updateTeacher.email,
    SubjectId : updateTeacher.name
  },
  {
    where : {
      id: req.params.id
    }
  }).then(()=>{
    res.redirect('/teacher')
  })
})

router.get('/delete/:id', (req, res)=>{
  model.Teacher.destroy({
    where :{
      id : req.params.id
    }
  }).then(()=>{
    res.redirect('/teacher')
  })
})

module.exports = router;
