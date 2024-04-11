import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeDetailPage from './pages/PokeDetailPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
   <div className='app'>
     {/* <img className='title__pokedex' src="/img/pokedex-title.png" alt="" />  */}
    <Routes>
      <Route className='homepage' path ="/" element={<HomePage />}/>
          <Route element={<ProtectedRoutes />}>
          <Route className='cards' path ="/pokedex" element={<PokedexPage />}/>
          <Route path ="/pokedex/:name" element={<PokeDetailPage />}/>
        </Route>
    </Routes>
   </div>
  )
}

export default App
    

