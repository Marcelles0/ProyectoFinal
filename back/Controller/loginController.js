const express = require('express');
const Model = require('../Model/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {generateToken, verifyRefreshToken} = require('../lib/utils');
const { default: mongoose } = require('mongoose');


const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}

// User register

router.post('/new', async (req, res)=>{
    const data = new Model({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: req.body.role,
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
});

router.post('/', (req, res)=>{
    Model.find({
        'email': req.body.email
    }).exec().then((result)=>{
        console.log(result);
        if (result.length > 0){
            bcrypt.compare(req.body.password, result[0].password, (error, response)=>{
                if (error){
                    res.status(404).json({
                        status: "failed",
                        data: result[0],
                        error: error.message,
                    });
                }else if (response){
                    res.status(201).json({
                        status: "succeeded",
                        data: {
                            user: req.body.email,
                            token: generateToken(result, false),
                            refreshToken: generateToken(result, true)
                        },
                        error: null,
                    });
                }else {
                    res.status(403).json({
                        status: "failed",
                        error,
                        error: 'Wrong username or password',
                    });
                }
            })
        } else {
            res.status(403).json({
                status: "failed",
                error,
                error: 'Wrong username or password',
            });
        }
    }).catch((error) => {
      res.status(404).json({
        status: "failed",
        error,
        error: error.message,
      });
    });
});

router.post('/refresh', verifyRefreshToken, (req, res) => {
    try{
        // const authHeader = req.headers('authorization');
        let authHeader = "";
        if (req.headers.hasOwnProperty("authorization")) {
            authHeader = req.headers["authorization"];
        }
        if (authHeader == null){
            res.status(400).json({
                status: "failed",
                data: [],
                error: 'Authorization not found',
            });
        }
        const token = authHeader.split(' ')[1];
        let payload = [jwt.decode(token)];
        res.status(201).json({
            status: "succeeded",
            data: {
                token: generateToken(payload, false),
                refreshToken: generateToken(payload, true)
            },
            error: null,
        });
    }catch(error){
        res.status(400).json({
            status: "failed",
            error,
            error: error.message,
          });
    }
});

router.put('/dashboard/:email', async (req, res)=>{
    const { name, email, password} = req.body;
    console.log(req.params.id);



    /* const { id } = req.params
    const body = req.body
    Model.updateOne(
        { _id: parseId(req.params.id) },
        body,
        (err, docs) => {
            res.send({
                item: docs
            })
        }
    ) */


    // userName: req.body.userName,
    // email: req.body.email,
    // password: await bcrypt.hash(req.body.password, 10),
    /* try {
        if(req.body.userName!=''){
            await Model.findByIdAndUpdate(req.params.id, req.body.userName);
        }

        if(req.body.email!=''){
            await Model.findByIdAndUpdate(req.params.id, req.body.email);
        }

        if(req.body.password!=''){
            await Model.findByIdAndUpdate(req.params.id, await bcrypt.hash(req.body.password, 10));
        }

        //await Model.findByIdAndUpdate(req.body.userName, req.body.email, passwordRequest);
        res.status(200).json({
            status: "succeeded",
            data,
            error: null,
        })
    } catch (error){
        res.status(400).json({
            status: "failed",
            error,
            error: error.message,
          });
    } */
});

router.delete("/:email", (req, res) => {
    let id = req.params.id;
    Model.findByIdAndDelete(id)
        .then((result) => {
            let data = { ...result._doc };
            res.status(200).json({
            status: "succeeded",
            data,
            error: null,
        });
    })
    .catch((error) =>
        res.status(404).json({
            status: "failed",
            data,
            error: error.message,
        })
    );
});

module.exports = router;