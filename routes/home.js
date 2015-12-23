var express = require('express');
var router = express.Router();

/* POST contact. */
router.post('/contact', function(req, res, next) {
    req.assert("name","Name is required!").notEmpty();
    req.assert('email',"Email is required").notEmpty();
    req.assert("email","Email is invalid").isEmail();
    req.assert('phone', "Phone is required").notEmpty();
    req.assert("phone","Phone length must be 9 or 10 digits").len(9,10);
    req.assert("phone","Phone must be a number").matches("^[0-9]{1,}$");
    req.assert('content',"Content must not be empty").notEmpty();

    req.sanitize('name').escape();
    req.sanitize('content').escape();

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).json(errors);
        return;
    }

    try{
        req.pool.getConnection(function(err, connection){
            connection.query(
                'INSERT INTO contact_me(`name`, `email`, `phone`, `content`) VALUES (?,?,?,?)',
                [req.body.name,req.body.email,req.body.phone,req.body.content],function(e){
                    connection.release();
                }
            );
        });
    }
    catch (e){
        res.status(500).json([{msg:"Sorry, something error with database please contact admin"}]);
        return;
    }

    res.status(200).send('Sent successfully');
});

module.exports = router;
