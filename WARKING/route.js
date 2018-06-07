const express = require('express');
const router = express.Router();

const User = require('./models/user');


//GET
router.get('/users', function (req, res, next) {
    User.find(function (err, users) {
        res.json(users);
    })
});

//POST
router.post('/users', function (req, res, next) {

    newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    newUser.save(function (err, user) {
        if (err) {
            res.json({ message: "Failed" });
        }
        else {
            res.json({ message: "Success" });
        }
    });
});

//PUT
router.put('/users/:id', function (req, res, next) {

    User.findOneAndUpdate({ _id: req.params.id },
        {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email
            }
        },
        function (err, result) {
            if (err) {
                res.json({ message: "Failed" });
            }
            else {
                res.json({ message: "Success" });
            }
        });
});

//DELETE
router.delete('/users/:id', function (req, res, next) {
    User.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;