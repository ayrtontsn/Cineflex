import NavBar from "./components/NavBar.jsx"
import MoviesPage from "./components/Movies.jsx"
import SchedulePage from "./components/Schedule.jsx"
import SeatsPage from "./components/Seats.jsx"
import OverviewPage from "./components/Overview.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MoviesPage />} />
        <Route path='/sessoes/:idFilme' element={<SchedulePage />} />
        <Route path='/assentos/:idSessao' element={<SeatsPage />} />
        <Route path='/sucesso' element={<OverviewPage />} />

      </Routes>
    </BrowserRouter>
  )
}