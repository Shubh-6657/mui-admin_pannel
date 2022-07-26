import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Dashboard/Home'
import Users from '../pages/Dashboard/Users'
import Forms from '../pages/Dashboard/Forms'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default DashboardRoutes
