import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    // return <Navigate to="/login" replace />
    console.log('hello')
  }

  return children
}

export default PrivateRoute
