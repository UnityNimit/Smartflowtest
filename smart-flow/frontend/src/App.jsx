import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Theme } from "@chakra-ui/react"
import { ColorModeProvider } from "@/components/ui/color-mode"
import NavBar from './components/ui/NavBar'
import Dashboard from './pages/Dashboard'
import SignalManagement from './pages/SignalManagement'
import ViolationManagement from './pages/ViolationManagement'
import EmergencyManagement from './pages/EmergencyManagement'
import Reports from './pages/Reports'
import UserManagement from './pages/UserManagement'
import { colors } from './constants/colors'

const App = () => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <Theme appearance="dark">
        <div style={{ 
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: colors.darkBlue,
          color: colors.lightGray 
        }}>
          <NavBar />
          <main style={{ 
            flex: 1, 
            marginLeft: '101px', // Updated to match navbar width
            overflowY: 'auto'
          }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/signals" element={<SignalManagement />} />
              <Route path="/violations" element={<ViolationManagement />} />
              <Route path="/emergencies" element={<EmergencyManagement />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<UserManagement />} />
            </Routes>
          </main>
        </div>
      </Theme>
    </ColorModeProvider>
  )
}

export default App;