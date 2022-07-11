const express = require('express');
const Model = require('../Model/memberModel');
const router = express.Router();
const {verifyToken} = require('../lib/utils');


// GET collections
router.get('/', verifyToken, (req, res)=>{
    Model.find().then((data)=>{
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error)=>{
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        })
    })
})

// ejemplo con Async/Await
/* 
router.get('/', async (req, res)=>{
    try{
        const data = await Model.find();
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }catch(error){
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        })
    }
});
 */
// GET document by id
router.get('/:id', (req, res)=>{
    Model.findById(req.params.id).exec().then((data)=>{
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error)=>{
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        })
    })
})

// POST documents
router.post('/', (req, res)=>{
    const data = new Model({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
    });
    data.save().then((data) => {
      res.status(201).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        error,
        error: error.message,
      });
    });
  //res.send("Post document");
});

// UPDATE document by id
router.patch('/:id', (req, res)=>{
    let id = req.params.id;
    let data = req.body;
    let options = {
        new: true,
    }
    /* const data = new Model({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
    }); */
    Model.findByIdAndUpdate(id, data, options).then((data) => {
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        error,
        error: error.message,
      });
    });
})

// DELETE document by id
router.delete('/:id', (req, res)=>{
    let id = req.params.id;
    Model.findByIdAndDelete(id) .then((data) => {
        res.status(200).json({
          status: "succeeded",
          data,
          error: null,
        });
      })
      .catch((error) => {
        res.status(404).json({
          status: "failed",
          error,
          error: error.message,
        });
      });
})

// export
module.exports = router;