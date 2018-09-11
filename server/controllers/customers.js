const Customer = require('../models/Customer');

module.exports = {
  create: (req, res) => {
    const newItem = new Customer({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
    });

    newItem
      .save()
      .then(Customer => {
        res.status(200).json({
          message: `${Customer.name} has been insert into Customers`
        })
      })
      .catch(err => {
        res.status(500).json({ message: err });
      })
  },

  update: (req, res) => {
    Customer
      .where({_id: req.params.id})
      .update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      })
      .then(updated => {
        if(updated.n) {
          res.status(200).json({
            message: `Customer has been updated`
          })
        } else {
          res.status(400).json({
            message: `Customer not found`
          })
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      })
  },

  remove: (req, res) => {
    Customer
      .deleteOne({_id: req.params.id})
      .then(deleted => {
        if(deleted.n) {
          res.status(200).json({
            message: `Customer has been deleted`
          })
        } else {
          res.status(400).json({
            message: `Customer not found`
          })
        }
      })
      .catch(err => {
        console.log('error');
        
        res.status(500).json({ message: err });
      })
  },

  read: (req, res) => {
    Customer 
      .find({})
      .then(customers => {
        res.status(200).json({ customers });
      })
      .catch(err => {
        res.status(500).json({ message: err });
      })
  }

};