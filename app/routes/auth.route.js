const express = require('express');
const router = express.Router();

const {saveUser,getAllData} = require('../controllers/auth.controller')

router.post('/saveUser',saveUser);
router.get('/getAllData',getAllData);

module.exports = router;