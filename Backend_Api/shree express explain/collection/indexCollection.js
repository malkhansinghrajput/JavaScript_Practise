import modal from '../modal/indexModal.js'

class IndexCollection
{
       static register = async (req,res)=>{
              const {name,email,mobile} = req.body
              console.log(name,email,mobile)

              try {
                     const cust = new modal({
                            name:name,
                            email:email,
                            mobile:mobile

                     })
                     const data = await cust.save()
                     res.status(200).json({
                            "record":data,
                            "msg":"Data Register Successfully"
                     })

              } catch (error) {
                     return res.status(404).json({
                            msg: "Data Not Found",
                            err: error
                     })
              }
       }
}

export default IndexCollection