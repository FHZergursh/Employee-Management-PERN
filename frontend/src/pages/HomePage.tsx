import { Header } from "../components/Header"
import { useState, useEffect } from "react"

interface employees {
  id: number,
  name: string,
  email: string,
  age: number,
  role: string,
  salary: number
}

export default function HomePage() {
  const [employees, setEmployees] = useState<employees[]>([])

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/employees")
        const data = await response.json()
        setEmployees(data.data)
        console.log("Fetched employees:", data)
      } catch (error) {
        console.error("Error fetching employees:", error)
      }
    }
    fetchEmployees()
  }, [])



  return (
    <div>
      <Header />
      <div className="min-h-auto flex-col justify-center mt-[5vh] mx-[15vw] border-2 border-red-500 space-y-5">

      <table className="table-auto ">
      <thead>
        <tr>
          <th className="p-2">id</th>
          <th className="p-2">name</th>
          <th className="p-2">email</th>
          <th className="p-2">age</th>
          <th className="p-2">role</th>
          <th className="p-2">salary</th>
        </tr>
      </thead>
      <tbody>
          {employees.map((item, index) => (
            <tr>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.age}</td>      
              <td className="p-2">{item.role}</td>
              <td className="p-2">{item.salary}</td>
              <td><button className="bg-blue-400 p-1 px-3 ml-4 mr-5 ">Edit</button></td>
              <td><button className="bg-red-400 p-1">Delete</button></td>
            </tr>
          ))}
      </tbody>
    </table>
      </div>
    </div>
  )
}