import express from "express"
import { createEmployee, getAllEmployees, getEmployee } from "../controllers/employeeController.js"

const employeeRoutes = express.Router()

employeeRoutes.post("/", createEmployee)
employeeRoutes.get("/", getAllEmployees)
employeeRoutes.get("/:id", getEmployee)


export default employeeRoutes