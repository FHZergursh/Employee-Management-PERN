import { sql } from "../db/setupDB.js";

export const createEmployee = async (req, res) => {
  try {
    const {name, email, age, role, salary} = req.body
    if (!name || !email || !age || !role || !salary)
    {
      return res.status(404).json({success: false, error: "Missing params! Unable to create new employee." })
    }
    console.log("before sql")

    const employee = await sql`
      INSERT INTO employees(name, email, age, role, salary)
      VALUES (${name}, ${email}, ${age}, ${role}, ${salary});
    `;
    return res.status(201).json({success: true, data: employee[0] })
  }
  catch (error) {
    return res.status(404).json({success: false, message: error.message})
  }
}

export const getAllEmployees = async (req, res) => {
  return res.status(200).json("Working API endpoint")

}

export const getEmployee = async (req, res) => {
  return res.status(200).json("Working API endpoint")

}
export const updateEmployee = async (req, res) => {
  return res.status(200).json("Working API endpoint")

}

export const deleteEmployee = async (req, res) => {
  return res.status(200).json("Working API endpoint")

}
