import { Header } from "./components/Header"
import { useState, useEffect } from "react"

interface employees {
  id: number,
  name: string,
  email: string,
  age: number,
  role: string,
  salary: number
}

const App = () => {
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
    <div >
      <Header />

      <div className="min-h-auto flex-col justify-center mt-[5vh] mx-[10vw] border-2 border-red-500 space-y-5">

      <table className="table-auto ">
      <thead>
        <tr>
          <th className="p-2">id</th>
          <th className="p-2">name</th>
          <th className="p-2">email</th>
        </tr>
      </thead>
      <tbody>
          {employees.map((item, index) => (
            <tr>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
            </tr>
          ))}
      </tbody>
    </table>


      </div>

      


    </div>
  )
}

export default App