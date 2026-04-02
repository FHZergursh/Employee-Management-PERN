import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB()  {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS employees(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      age INT NOT NULL,
      role VARCHAR(255) NOT NULL,
      salary MONEY
    )`;

    console.log("Database initialised successfully!")
  } catch (error) {
    console.log("Error in setupDB, " + error)
  }
}