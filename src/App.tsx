import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <div className="flex flex-col size-full .google-sans-code-font">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
