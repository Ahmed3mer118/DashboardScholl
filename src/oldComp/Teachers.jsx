import React, { useEffect, useState } from 'react'

function Teachers() {
    const [teachers, setTeachers] = useState([]);
    const [ loading, setLoading]= useState(true)
    useEffect(()=>{
      fetch("https://freetestapi.com/api/v1/teachers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setTeachers(data),
        setLoading(false)}
    );
    },[])
   
  return (
    <>
        <h1 className="text-center"> All Data Teachers</h1>
      <table className="text-center m-auto">
        <thead>
          <tr>
            <th className="border p-2 text-center">ID</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Email</th>
           
            <th className="border p-2 text-center">years of experience
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers &&
            teachers.map((teacher) => (
              <tr key={teacher.id}>
                {/* <img src={teacher.image} alt="" /> */}
                <td className="border p-2 text-center">{teacher.id}</td>
                <td className="border p-2 text-center"> {teacher.name}</td>
                <td className="border p-2 text-center"> {teacher.email}</td>
              
                <td className="border p-2 text-center"> {teacher.years_of_experience
                }</td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && (<h1 className="text-center">Loading...</h1>)}
    </>
  )
}

export default Teachers
