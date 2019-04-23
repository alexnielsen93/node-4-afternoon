const swag = require('../models/swag')
let total = 0
let cart = []


module.exports = {

  add: (req,res) =>{
    const { id } = req.params
    const item = req.session.user.cart.find((item => +item.id === +id))
    if (item){
      res.status(200).send(req.session.user)
      console.log(req.status.user)
    }
    else{
      let item = swag.find((item) => +item.id === +id)
      console.log(item)
      req.session.user.total += item.price
      req.session.user.cart.push(item)
      res.status(200).send(req.session.user)
      console.log(req.session.user)
    }
  },

  delete: (req, res)=>{
    const { id } = req.params
    let index = req.session.user.cart.findIndex(((item)=> +item.id === +id))
    console.log(index)
    req.session.user.cart.splice(index,1)

    res.status(200).send(req.session.user)
    console.log(req.status.user)
  },

  checkout: (req, res)=>{

    req.session.user.cart  = []
    req.session.user.total = 0

    res.status(200).send(req.session.user)
    console.log(req.session.user)

  }

}