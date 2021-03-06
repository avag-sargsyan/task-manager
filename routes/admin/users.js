const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const User = require('../../models/User');

router.get('/', (req, res) =>
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => console.log(err)));

module.exports = router;