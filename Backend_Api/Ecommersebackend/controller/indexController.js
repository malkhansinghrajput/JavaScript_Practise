class IndexController {

    static register = async (req,res)=>{
        res.json({"msg":"Customer Register Successfully"})
    }
    
    static productlist = async (req,res)=>{
        res.json({"name":"Sport Shoes"})
    }
}

export default IndexController