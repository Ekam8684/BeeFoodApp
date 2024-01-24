const User = require("../Model/User")
const emailValidator = require('deep-email-validator');
const validation = require("deep-email-validator")
const getUser = async (req, res) => {
    const userdata = await User.find()
    res.send(userdata)
}
const PostUser = async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    if (validation.validate(email)) {

        const user = await User.find({ email })
        if (!user) return res.send("student already exist ")
        const userdata = await User.create({ name, email, password })
        const Allstudata = await User.find()
        res.send(Allstudata)

        res.send("---- invalid Email ----")
    }
}
const PutUser = async (req, res) => {
    const { id, name, email, password } = req.body
    try {
        const studata = await User.updateOne({ _id: id }, { $set: { name: name, email: email, password: password } })
        const Allstudata = await User.find()
        res.send(Allstudata)
    }
    catch (err) {
        return res.send("somthing went wrong")
    }
}
const dltUser = async (req, res) =>  {
    const { id } = req.body
    const deleteUser = await User.deleteOne({ _id: id })
    const studata = await User.find()
    res.send(studata)
}

module.exports = { getUser, PostUser, PutUser, dltUser }