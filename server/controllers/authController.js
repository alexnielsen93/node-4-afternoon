const users = require('../models/users')

let id = 1;

module.exports = {
  login: (req,res)=>{
let { username, password } = req.body
let found = false
users.map((userObj)=>{
  if (userObj.username === username && userObj.password === password){
     req.session.user.username = userObj.username
     res.status(200).send(req.session.user)
     found = true
  }

})
if (found === false){
  res.status(500).send('Unauthorized.')
}


  },

  register: (req, res)=>{
    let {username, password} = req.body
    users.push({id, username, password})
    id++
    req.session.user.username = username

    res.status(200).send(req.session.user)
  },

  signout: (req,res)=>{
    req.session.destroy()
    req.status(200).send(req.session)
  },

  getUser: (req, res)=>{
    res.status(200).send(req.session.user)

  },
}