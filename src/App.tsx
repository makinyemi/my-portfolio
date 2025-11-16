import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <div className="flex flex-col size-full">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
