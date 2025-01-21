import express from "express"
import { ServicesController } from "../controllers/ServicesController.js"
export const route = express.Router()



route.get("/", ServicesController.getAll)
route.get("/:id", ServicesController.getById)
route.delete("/:id", ServicesController.deleteService)
route.post("/", ServicesController.postService)
route.put("/:id", ServicesController.updateService)