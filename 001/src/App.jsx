import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Infos from './Perso.jsx'
import Competences from './Comp.jsx'
import Experiences from './Expe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Curriculum vitea</h1>
    <Infos></Infos>
    <hr></hr>
    <Competences></Competences>
    <hr></hr>
    <Experiences></Experiences>
   </div>
          
              

  )
}

export default App
