import express from "express"
import { getAllEmployees } from "../controllers/employeeController.js"

const employeeRoutes = express.Router()

employeeRoutes.get("/", getAllEmployees)


export default employeeRoutes