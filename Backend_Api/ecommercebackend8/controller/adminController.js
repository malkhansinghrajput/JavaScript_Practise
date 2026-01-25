import ProductModal from '../modal/productModal.js'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({ path: "../config/config.env" })

class AdminController {
    static addproduct = async (req, res) => {
        const { product_brand, product_variant_name, product_description, product_mrp, product_sp, product_discount, product_size, product_color, product_quantity, product_availability } = req.body
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

    static deleteproduct = async (req, res) => {
        const { product_id } = req.query
        console.log(product_id)
        try {
            var data = await ProductModal.findByIdAndDelete({ _id: product_id })

            for (const obj of data.product_imageurl) {
                fs.unlink(`./multipleuploadproducts/${obj.name}`, (err) => {
                    if (err) {
                        console.log("File is not deleted:", err)
                    } else {
                        console.log("File delete successfully")
                    }
                });
            }
            return res.status(200).json({
                msg: "Product Deleted Successfully",
            })
        } catch (error) {
            return res.status(400).json({
                msg: "Product not Deleted",
                err: error
            })
        }
    }

    static editproduct = async (req, res) => {
        const { product_id } = req.query
        console.log(product_id)
       
        console.log(req.body)
        const updateData = req.body;
        //new images
        const productimagearr = req.files
        console.log(productimagearr)
        if (req.files && req.files.length > 0) {
            var newprod = productimagearr.map((data) => {
                return {
                    type: data.mimetype,
                    name: data.filename,
                    path: `http://localhost:${process.env.PORT_NO}/` + data.path,
                    size: data.size
                }
            })
            console.log("New Product:", newprod)
            updateData.product_imageurl = newprod
        }
        try {
            var data = await ProductModal.findById({ _id: product_id })

            for (const obj of data.product_imageurl) {
                fs.unlink(`./multipleuploadproducts/${obj.name}`, (err) => {
                    if (err) {
                        console.log("File is not deleted:", err)
                    } else {
                        console.log("File delete successfully")
                    }
                });
            }
            var updatedProduct = await ProductModal.findByIdAndUpdate({ _id: product_id },
                {
                    $set: req.body
                }, {
                new: true,
                newFindAndModify: false
            })
            if (!updatedProduct)
                return res.status(404).json({
                    error: 'Product not found'
                });

            return res.status(200).json({
                msg: "Product Updated Successfully",
                product: updatedProduct
            })
        } catch (error) {
            return res.status(400).json({
                msg: "Product Not Updated",
                err: error
            })
        }
    }
}

export default AdminController