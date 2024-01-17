import { NavLink, Outlet } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/register" >Register</NavLink>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/geheim" >Geheimnis</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
export default App;
