import StudentCard from "../components/StudentCard";
import { students } from "../services/studentService";

function Home() {
  return (
    <div style={{padding:'20px'}}>
      <h2>Welcome to Student Portal</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {students.map((s) => (
          <StudentCard key={s.id} name={s.name} course={s.course} city={s.city} />
        ))}
      </div>
    </div>
  )
}
export default Home