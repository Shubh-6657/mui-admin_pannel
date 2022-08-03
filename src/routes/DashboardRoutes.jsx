import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Dashboard/Home'
import Customers from '../pages/Dashboard/Customers'
import Forms from '../pages/Dashboard/Forms'
import About from '../pages/Dashboard/About'
import Profile from '../pages/Dashboard/Profile'
import Charts from '../pages/Dashboard/Charts'
import Settings from '../pages/Dashboard/Settings'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about" element={<About />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default DashboardRoutes
