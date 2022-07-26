import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Authenticate/Login'
import PasswordReset from '../pages/Authenticate/PasswordReset'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default AuthRoutes
