const express = require("express");
const router = express.Router();

const {
    getTemplate,
} = require('../controllers/templateController');

router.get('/', getTemplate);

module.exports = router;

