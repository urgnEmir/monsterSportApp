const User = require('../models/Users')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
    try {
        const {name, email, password, location} = req.body

        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ msg: 'This e-mail is already using by an  other account'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user = new User ({
            name, 
            email,
            password: hashedPassword,
            location
        })

        await user.save()
        res.status(201).json({ msg: 'User was added succesfuly'})
    }catch (err) {
        console.error(err.message)
        res.status(500).send('A server error occurred')
        }
}