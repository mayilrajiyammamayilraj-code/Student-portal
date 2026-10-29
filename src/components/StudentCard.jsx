function StudentCard({ name, course, city }) {
  return (
    <div style={{border:'1px solid gray', padding:'15px', margin:'10px', borderRadius:'8px', background:'#f9f9f9'}}>
      <p><b>Name:</b> {name}</p>
      <p><b>Course:</b> {course}</p>
      <p><b>City:</b> {city}</p>
    </div>
  )
}
export default StudentCard