var express = require('express');
var router = express.Router();
var util = require('util');

/* POST contact. */
router.post('/contact', function(req, res, next) {

    req.assert("name","Name is required!").notEmpty();

    req.assert('email',"Email is required").notEmpty();
    req.assert("email","Email is invalid").isEmail();

    req.assert('phone', "Phone is required").notEmpty();
    req.assert("phone","Phone length must be 9 or 10 digits").len(9,10);
    req.assert("phone","Phone must be a number").isInt();
    req.assert('content',"Content must not be empty").notEmpty();

    req.sanitize('name').escape();
    req.sanitize('content').escape();

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).json(errors);
        return;
    }
    res.status(200).send('Sent successfully');
});

module.exports = router;
