import express from "express"
import cors from "cors"
import apis from "./api/apis.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", apis)
app.use("*", (req, res) => res.status(404).json({ erorr: "not found" }))

export default app
