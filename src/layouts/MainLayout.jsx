import { Outlet } from 'react-router-dom' //every layer should come from the component
import Navbar from '../components/Navbar'
function MainLayout() {
  return( 
  <>
  <Navbar />
  <Outlet />
  </>
  )
}

export default MainLayout