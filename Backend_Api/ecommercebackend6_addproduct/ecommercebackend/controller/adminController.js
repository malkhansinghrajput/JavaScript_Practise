import ProductModal from '../modal/productModal.js'
import dotenv from 'dotenv'
dotenv.config({path:"../config/config.env"})

class AdminController
{
    static addproduct=async(req,res)=>{
        const {product_brand,product_variant_name,product_description,product_mrp,product_sp,product_discount,product_size,product_color,product_quantity,product_availability} = req.body
        console.log(req.body)
        const productimagearr = req.files
        console.log(productimagearr)
        var newprod = productimagearr.map((data) => {
            return {
                type: data.mimetype,
                name: data.filename,
                path: `http://localhost:${process.env.PORT_NO}/` + data.path,
                size: data.size
            }
        })
        console.log("New Product:", newprod)
        try {
            const uploadproduct = new ProductModal({
                product_brand,
                product_variant_name,
                product_sp,
                product_mrp,
                product_discount,
                product_size,
                product_color,
                product_description,
                product_quantity,
                product_availability,
                product_imageurl: newprod
            })
            console.log(uploadproduct)
            await uploadproduct.save()
            return res.status(200).json({
                products: uploadproduct
            })
        }
        catch (error) {
            return res.status(400).json({
                error: error
            })
        }
    }
}

export default AdminController