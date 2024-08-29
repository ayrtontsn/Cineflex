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
        <Route path='/schedule/:idMovie' element={<SchedulePage />} />
        <Route path='/seats' element={<SeatsPage />} />
        <Route path='/overview' element={<OverviewPage />} />

      </Routes>
    </BrowserRouter>
  )
}