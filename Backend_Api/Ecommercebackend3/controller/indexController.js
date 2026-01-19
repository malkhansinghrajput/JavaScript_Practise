import customerModal from '../modal/customerModal.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({path:"./config/config.env"})

//npm i bcrypt
//npm i jsonwebtoken

class IndexController {

    static register = async (req, res) => {
        const { name, email, password, mobile, gender, state, city, pincode, address } = req.body
        console.log(name, email, password, mobile, gender, state, city, pincode, address)

        try {
            var isExists = await customerModal.findOne({ email })
            console.log("Single Record:", isExists)
            if (isExists) {
                return res.status(200).json({
                    msg: "Email is already exists"
                })
            }
            //generate hashpassword
            var hashpassword = await bcrypt.hash(password, 10)
            console.log("hashpassword:", hashpassword)

            const cust = new customerModal({
                name:name,
                email,
                password: hashpassword,
                mobile,
                gender,
                state,
                city,
                pincode,
                address
            })
            const data = await cust.save()
            res.status(200).json({
                "record": data,
                "msg": "Customer Register Successfully",
            })
        } catch (error) {
            return res.status(404).json({
                msg: "Customer Not Register",
                err: error
            })
        }
    }

    static login = async (req, res) => {
        const { email, password, } = req.body
        console.log(email, password)

        try {
            var customer = await customerModal.findOne({ email })
            console.log("Single Record:", customer)
            if (customer != null) {
                var isMatch = await bcrypt.compare(password, customer.password)
                console.log(isMatch)
                if (customer.email === email && isMatch) {
                    const token = jwt.sign({ customer_id: customer._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5s' })
                    return res.status(200).json({
                        token:token,
                        record: customer,
                        msg: "Login Successfully",
                    })
                } 
                else {
                    return res.status(400).json({
                        "msg": "Email or Password is inValid",
                    })
                }
            }else {
                return res.status(400).json({
                    "msg": "Email Not Registered",
                })
            }
        } catch (error) {
            return res.status(404).json({
                msg: "Login Failed",
                err: error
            })
        }
    }

    static productlist = async (req, res) => {
        res.json({ "name": "Sport Shoes" })
    }
}

export default IndexController