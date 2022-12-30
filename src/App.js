import React from 'react'
import { Routes, Route} from 'react-router-dom'
import SectionsCombined from './components/SectionsCombined'
import Enterpage from './components/Enterpage'

function App() {
  return (
        <Routes>
            <Route path='/*' element= { <SectionsCombined /> } />
            <Route path='/' index element= { <Enterpage />} />
        </Routes>

  )
}

export default App
