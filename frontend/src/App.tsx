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

      <div className="min-h-auto flex justify-center mt-[5vh]">Table would go here</div>
      {employees.map((item, index) => (
        <div> will you please work </div>

      ))}


      


    </div>
  )
}

export default App