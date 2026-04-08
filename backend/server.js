import express from "express"
import cors from "cors"
import employeeRoutes from "./routes/employeeRoute.js"
import { setupDB } from "./db/setupDB.js";

const app = express();
const PORT = 3000

app.use(express.json())
app.use(cors());

app.use("/api/employees", employeeRoutes)

setupDB();

app.listen(PORT, () => console.log(`Server has started on ${PORT}`))