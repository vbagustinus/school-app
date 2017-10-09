function cekSession(req, res, next){
  if(req.session.hasOwnProperty('username')){
    next()
  }else {
    res.render('login')
  }
}

// router.use(function(req,res,next) {
//
// })
module.exports = cekSession;
