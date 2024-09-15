import React, { useEffect, useState } from 'react'

function Students() {
    const [students, setStudents] = useState([]);
    const [ loading, setLoading]= useState(true)
    useEffect(()=>{
      fetch("https://freetestapi.com/api/v1/students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setStudents(data),
      setLoading(false)}
    );
    },[])
   
  return (
    <>
        <h1 className="text-center"> All Data Students</h1>
      <table className="text-center m-auto">
        <thead>
          <tr>
            <th className="border p-2 text-center">ID</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Email</th>
           
            <th className="border p-2 text-center">GPA</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student.id}>
                {/* <img src={student.image} alt="" /> */}
                <td className="border p-2 text-center">{student.id}</td>
                <td className="border p-2 text-center"> {student.name}</td>
                <td className="border p-2 text-center"> {student.email}</td>
              
                <td className="border p-2 text-center"> {student.gpa}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && (<h1 className="text-center">Loading...</h1>)}
    </>
  )
}

export default Students
