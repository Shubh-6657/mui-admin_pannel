import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Dashboard/Home'
import Users from '../pages/Dashboard/Users'
import Forms from '../pages/Dashboard/Forms'
import About from '../pages/Dashboard/About'
import Account from '../pages/Dashboard/Account'
import Analytics from '../pages/Dashboard/Analytics'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default DashboardRoutes
