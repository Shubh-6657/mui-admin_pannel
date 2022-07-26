import { Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { muiBlueTheme } from './utils/mui/themes'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

function App() {
  const currentUser = true

  // return (
  //   <ThemeProvider theme={muiBlueTheme}>
  //     {currentUser ? <Dashboard /> : <Authenticate />}
  //   </ThemeProvider>
  // )

  return (
    <ThemeProvider theme={muiBlueTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
