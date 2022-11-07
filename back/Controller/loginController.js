const express = require("express");
const Model = require("../Model/loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {
    generateToken,
    verifyToken,
    verifyRefreshToken,
} = require("../lib/utils");
const { default: mongoose } = require("mongoose");

/* const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
} */

// User register

router.post("/new", async (req, res) => {
    const data = new Model({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: req.body.role,
    });
    data.save()
        .then((data) => {
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

/* router.get('/', verifyToken, (req, res)=>{
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
 */
router.post("/", (req, res) => {
    Model.find({
        email: req.body.email,
    })
        .exec()
        .then((result) => {
            console.log(result);
            if (result.length > 0) {
                console.log(result);
                bcrypt.compare(
                    req.body.password,
                    result[0].password,
                    (error, response) => {
                        console.log(req.body.password, result[0]._id);
                        /* if (result[0]._id !== 0 || result[0]._id !== null) {
                    localStorage.setItem("id", result[0]._id);
                } */
                        if (error) {
                            res.status(404).json({
                                status: "failed",
                                data: result[0],
                                error: error.message,
                            });
                        } else if (response) {
                            res.status(200).json({
                                status: "succeeded",
                                data: {
                                    user: result,
                                    token: generateToken(result, false),
                                    refreshToken: generateToken(result, true),
                                },
                                error: null,
                            });
                        } else {
                            res.status(403).json({
                                status: "failed",
                                error,
                                error: "Wrong username or password",
                                code: 403,
                            });
                        }
                    }
                );
            } else {
                res.status(403).json({
                    status: "failed",
                    error,
                    error: "Wrong username or password",
                    code: 403,
                });
            }
        })
        .catch((error) => {
            res.status(404).json({
                status: "failed",
                error,
                error: error.message,
            });
        });
});
// GET user by id
// router.get('/:id', verifyToken, (req, res)=>{
router.get("/:id", (req, res) => {
    Model.findById(req.params.id)
        .exec()
        .then((data) => {
            res.status(200).json({
                status: "succeeded",
                data,
                error: null,
            });
        })
        .catch((error) => {
            res.status(404).json({
                status: "failed",
                data,
                error: error.message,
            });
        });
});

router.post("/refresh", verifyRefreshToken, (req, res) => {
    try {
        // const authHeader = req.headers('authorization');
        let authHeader = "";
        if (req.headers.hasOwnProperty("authorization")) {
            authHeader = req.headers["authorization"];
        }
        if (authHeader == null) {
            res.status(400).json({
                status: "failed",
                data: [],
                error: "Authorization not found",
            });
        }
        const token = authHeader.split(" ")[1];
        let payload = [jwt.decode(token)];
        res.status(201).json({
            status: "succeeded",
            data: {
                token: generateToken(payload, false),
                refreshToken: generateToken(payload, true),
            },
            error: null,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error,
            error: error.message,
        });
    }
});

router.patch("/dashboard/:id", async (req, res) => {
    const { userName, email, password } = req.body;
    // console.log("cambia datos");
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json()
    // let id = req.params.id;
    // let data = req.body;
    Model.findByIdAndUpdate(id, (err,response)=>{
        if (err) {
            res.status(400).json({
                status: "failed",
                error,
                error: error.message,
              });
        }
        res.status(200).json({
            status: "succeeded",
            data: {
                user: response,
            },
            error: null,
        })
    })
    /* try {
        if (req.body.name === "" || req.body.email === "" || req.body.password === "") {
            return {
                message: "Debe rellenar todos los campos",
                status: 401,
            }
        }else{

            await Model.updateOne(
                {id: req.params.id},
                {
                    userName: req.body.userName,
                    email: req.body.userName,
                    password: await bcrypt.hash(req.body.password, 10)
                }
            )
        }
    } catch{

    }
 */

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

router.delete("/:id", (req, res) => {
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
