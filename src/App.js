import React from 'react'
import { Routes, Route} from 'react-router-dom'
import SectionsCombined from './components/SectionsCombined'
import Enterpage from './components/Enterpage'
import Inquiry from './components/Inquiry'

function App() {
  return (
        <Routes>
            <Route path='/*' element= { <SectionsCombined /> } />
            <Route path='/' index element= { <Enterpage /> } />
            <Route path='/inquiry' element= { <Inquiry /> } />
        </Routes>

  )
}

export default App
