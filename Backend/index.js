import express from "express"
const app = express()
import cors from "cors"
import dotenv, {config} from "dotenv"
import { route } from "./routes/ServicesRouter.js"
app.use(express.json())
app.use(cors())
dotenv.config()
import "./config/config.js"

app.use("/services", route)
app.listen(3000,()=>{
    console.log("Bu app 3000 portunda dinlenilir")
})

