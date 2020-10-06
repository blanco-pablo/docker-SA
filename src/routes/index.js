const {Router} = require('express');

const router = Router();

router.get('/', (req,res) => res.json({msn:"COLL"}));

module.exports = router