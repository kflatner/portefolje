const express = require('express');
const router = express.Router();
const pool = require('../db');
const path = require('path');

router.get('/api/cv', (req, res) => {
    pool.query('SELECT * FROM cv', (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results.rows);
        }
    });
});

module.exports = router;