import logo from "../assets/hero.png"

function Navbar() {
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'15px', background:'#222', color:'white'}}>
      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <img src={logo} alt="logo" style={{width:'35px', height:'35px', borderRadius:'50%'}} />
        <h3>Student Portal</h3>
      </div>
      <div style={{display:'flex', gap:'15px'}}>
        <span>Home</span>
        <span>Students</span>
        <span>Courses</span>
      </div>
    </nav>
  )
}
export default Navbar