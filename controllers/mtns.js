import { Mtn } from '../models/mtn.js'


function index(req, res) {
  Mtn.find({})
  .then(mtns => {
    res.render('mtns/index', {
      mtns,
      title: "NH4K 48"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}




export {
  index,
}

