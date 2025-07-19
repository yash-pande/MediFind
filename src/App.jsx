import './App.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'

function App() {
  

  return (
    <div className=' text-primary '>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </BrowserRouter> 
    </div> 
  )
}

export default App
