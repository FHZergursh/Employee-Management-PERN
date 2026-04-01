import express from "express"
import employeeRoutes from "./routes/employeeRoute.js"

const app = express();
const PORT = 3000

app.use(express.json())

app.use("/api/employees", employeeRoutes)

app.listen(PORT, () => console.log(`Server has started on ${PORT}`))