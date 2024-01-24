const express = require("express")
const router = express.Router()
const {getUser,PostUser,PutUser,dltUser } = require("../Controller/User")

router.get('/User',getUser)
router.post('/User',PostUser)
router.put('/User',PutUser)
router.delete('/User',dltUser)


module.exports=router