import customerModal from '../modal/CustomerModal.js'

class IndexController {

    static register = async (req,res)=>{
        const {name,email} = req.body
        console.log(name,email)
        
        try {
            const cust = new customerModal({
                name:name,
                email:email
            })
            const data = await cust.save()
            res.status(200).json({
                "record":data,
                "msg":"Customer Register Successfully",
            })
        } catch (error) {
            return res.status(404).json({
                msg:"Customer Not Register",
                err:error
            })
        }
    }
    
    static productlist = async (req,res)=>{
        res.json({"name":"Sport Shoes"})
    }
}

export default IndexController