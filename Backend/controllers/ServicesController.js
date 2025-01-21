import { ServicesModel } from "../model/ServicesModel.js";

export let ServicesController = {
    getAll: async (req ,res)=>{
        let services = await ServicesModel.find()
        res.send(services)
    },
    getById: async (req, res)=>{
        let id = req.params.id
        let myservice = await ServicesModel.findById(id)
        res.send({
            message: "Find Completed",
            data:myservice
        })
    },
    deleteService: async (req, res)=>{
        let id = req.params.id
        await ServicesModel.findByIdAndDelete(id)
        res.send({
            message:"Success Deleted"
        })
    },
    postService: async (req, res)=>{
        let newservice = ServicesModel(req.body)
        await newservice.save()
        res.send({
            message: "Sended Post",
            data:req.body
        })
    },
    updateService: async (req, res)=>{
        let id = req.params.id
        let updateService = req.body
        let updatedService = await ServicesModel.findByIdAndUpdate({_id:id}, updateService, {new:true})
        res.send(updatedService)
    }
}