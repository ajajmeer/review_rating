let express = require('express')
const user = require('../controllers/userController')


let router = express.Router();
router.post('/createuser', user.createUser)

module.exports = router