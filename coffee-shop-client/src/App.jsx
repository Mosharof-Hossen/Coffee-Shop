
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Shared/Navbar/Navbar'
import Footer from './Pages/Shared/Footer/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className=''>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
