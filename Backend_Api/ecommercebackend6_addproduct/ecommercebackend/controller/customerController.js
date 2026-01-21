import CustomerModal from '../modal/customerModal.js'
import DocumentModal from '../modal/documentModal.js'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config({path:"../config/config.env"})

class CustomerController {
    static editprofile = async (req, res) => {
        const { id } = req.query
        const { name, mobile, address, city, state, pincode, gender } = req.body
        console.log(req.body)
        console.log(id)
        var updatedDetails = await CustomerModal.findByIdAndUpdate({ _id: id },
            {
                $set: {
                    name: name,
                    mobile: mobile,
                    address:address,
                    city: city,
                    state: state,
                    pincode: pincode,
                    gender: gender,
                    info:Date()
                }
            }, 
            {
            new: true,
            newFindAndModify: false
        })
        console.log(updatedDetails)
        return res.status(200).json({
            msg: "Customer Record Updated Successfully !",
            record: updatedDetails
        })
    }

    static uploaddocument = async (req,res) =>{
        const {customer_id} = req.body
        const upload_doc = req.file.path
        console.log(upload_doc)
        console.log(customer_id)
        try {
            var doc = await DocumentModal.findOne({ customer_id: customer_id })
            console.log(doc)
            if (doc) {
                var arr = doc.upload_doc.split('/')
                console.log(arr)
                var filename = arr[arr.length - 1]
                console.log(filename)
                fs.unlink(`./uploaddocuments/${filename}`, (err) => {
                    if (err) {
                        console.log("File is not deleted:", err)
                    } else {
                        console.log("File delete successfully")
                    }
                });
                await DocumentModal.findByIdAndDelete({
                    _id: doc._id
                }, {
                    new: true,
                    useFindAndModify: false
                })
                console.log("Previous Image Deleted Successfully")
            }
            
            const uploaddata = new DocumentModal({
                upload_doc: `http://localhost:${process.env.PORT_NO}/` + upload_doc,
                customer_id: customer_id
            })
            await uploaddata.save()
            return res.status(200).json({
                msg:"Profile Pic Uploaded Successfully",
                post: uploaddata
            })
        } catch (error) {
            return res.status(200).json({
                msg: "Profile Pic Not Uploaded!!"
            })
        }
    }
}

export default CustomerController