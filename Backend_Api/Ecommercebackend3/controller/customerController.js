import CustomerModal from '../modal/customerModal.js'

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
}

export default CustomerController