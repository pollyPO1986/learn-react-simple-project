import { Route, Routes, Link } from "react-router-dom";
import WeekOne from '@weekOne/Week01.jsx';
import WeekTwo from '@weekTwo/Week02.jsx';
import '@/App.css'

function App () {
  return (
    <>
      <header>
        <ul className="nav-list">
          <li>
            <Link to="/">Week 01</Link>
          </li>
          <li>
            <Link to="/week02">Week 02</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<WeekOne />} />
        <Route path="/week02" element={<WeekTwo />} />
      </Routes>
    </>
  )
}

export default App
