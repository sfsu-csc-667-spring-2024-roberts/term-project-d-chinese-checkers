const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('This is my root route!');
});

exports.router = router;