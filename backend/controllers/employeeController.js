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
  try {
    const employees = await sql `SELECT * FROM employees`;
    return res.status(200).json({success: true, data: employees})
  }
  catch (error) {
    return res.status(404).json({success: false, message: error.message})
  }

}

export const getEmployee = async (req, res) => {
  const {id} = req.params;
  try {
    const employee = await sql `SELECT * FROM employees WHERE id = ${id}`;
    if (employee.length === 0) {
      return res.status(404).json({success: false, error: "Employee not found!"})
    }
    return res.status(200).json({success: true, data: employee})

  } catch (error) {
    return res.status(404).json({success: false, message: error.message})
  }


}
export const updateEmployee = async (req, res) => {
  const {id} = req.params;
  const {name, email, age, role, salary} = req.body
  if (!id || !name || !email || !age || !role || !salary) {
    return res.status(404).json({success: false, error: "Missing params!" })
  }
  try { 
    const updated = await sql 
    `UPDATE EMPLOYEE SET name = ${name}, email = ${email}, age = ${age}, role = ${role}, salary = ${salary}
    WHERE id = ${id}`;
    return res.status(200).json({success: true, data: updated})

  } catch (error) {
    return res.status(404).json({success: false, message: error.message})
  }



}

export const deleteEmployee = async (req, res) => {
  const {id} = req.params;
  if (!id) {
    return res.status(404).json({success: false, error: "Missing params!" })
  }
  try {
    const deleted = await sql `DELETE FROM employees WHERE id = ${id}`;
    return res.status(200).json({success: true, data: deleted})
  } catch (error) {
    return res.status(404).json({success: false, message: error.message})
  }
}
