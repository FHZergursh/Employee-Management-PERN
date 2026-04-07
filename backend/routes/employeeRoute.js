import express from "express"
import { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js"

const employeeRoutes = express.Router()

employeeRoutes.post("/", createEmployee)
employeeRoutes.get("/", getAllEmployees)
employeeRoutes.get("/:id", getEmployee)
employeeRoutes.put("/:id", updateEmployee)
employeeRoutes.delete("/:id", deleteEmployee)


export default employeeRoutes