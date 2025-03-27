import React from 'react'
import { useColorModeValue } from "@/components/ui/color-mode"
import { motion } from "framer-motion"; // Import motion from framer-motion

const SignalManagement = () => {
  // Theme-aware colors matching your NavBar
  const pageBg = useColorModeValue('#FFFFFF', '#06141B')
  const textColor = useColorModeValue('#06141B', '#CCD0CF')
  const cardBg = useColorModeValue('#F5F5F5', '#11212D')
  const accentBg = useColorModeValue('#E2E8F0', '#253745')
  const borderColor = useColorModeValue('#CBD5E0', '#4A5C6A')
  const silverText = useColorModeValue('#718096', '#A0AEC0')

  // Define buttonStyle here so it's accessible to all components
  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: useColorModeValue('#3182CE', '#3182CE'),
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
    ':hover': { opacity: 0.9 }
  }

  const signals = [
    { id: 'S001', location: 'Main St & 1st Ave', status: 'green' },
    { id: 'S002', location: '2nd St & Oak Ave', status: 'red' },
    { id: 'S003', location: 'Central Square', status: 'yellow' }
  ]

  return (
    <div style={{ 
      backgroundColor: pageBg,
      minHeight: '100vh',
      color: textColor,
      padding: '1rem'
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          color: textColor,
          marginBottom: '2rem',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}
      >
        Traffic Signal Management
      </motion.h1>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {signals.map(signal => (
          <motion.div
            key={signal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SignalCard 
              signal={signal} 
              cardBg={cardBg}
              textColor={textColor}
              silverText={silverText}
              buttonStyle={buttonStyle} // Pass buttonStyle as prop
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          backgroundColor: cardBg,
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginTop: '2rem'
        }}
      >
        <h2 style={{ 
          color: textColor,
          marginBottom: '1rem',
          fontSize: '1.25rem'
        }}>
          Emergency Requests
        </h2>
        <EmergencyRequestList 
          accentBg={accentBg}
          borderColor={borderColor}
          textColor={textColor}
          silverText={silverText}
          buttonStyle={buttonStyle} // Pass buttonStyle as prop
        />
      </motion.div>
    </div>
  )
}

const SignalCard = ({ signal, cardBg, textColor, silverText, buttonStyle }) => {
  const statusColor = {
    red: '#E53E3E',
    yellow: '#D69E2E',
    green: '#38A169'
  }

  return (
    <div style={{
      backgroundColor: cardBg,
      padding: '1.5rem',
      borderRadius: '8px',
      borderTop: `4px solid ${statusColor[signal.status]}`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        color: textColor,
        marginBottom: '0.5rem'
      }}>
        {signal.location}
      </h3>
      <p style={{ 
        color: silverText,
        marginBottom: '0.25rem'
      }}>
        ID: {signal.id}
      </p>
      <p style={{ color: silverText }}>
        Status: 
        <span style={{ 
          color: statusColor[signal.status], 
          fontWeight: 'bold',
          marginLeft: '0.5rem'
        }}>
          {signal.status.toUpperCase()}
        </span>
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginTop: '1rem'
      }}>
        <button style={{
          ...buttonStyle,
          backgroundColor: '#38A169' // green
        }}>
          Force Green
        </button>
        <button style={{
          ...buttonStyle,
          backgroundColor: '#E53E3E' // red
        }}>
          Force Red
        </button>
        <button style={buttonStyle}>
          Adjust Timing
        </button>
      </div>
    </div>
  )
}

const EmergencyRequestList = ({ accentBg, borderColor, textColor, silverText, buttonStyle }) => {
  const requests = [
    { id: 'E001', type: 'Ambulance', location: 'Main Hospital', priority: 'High' },
    { id: 'E002', type: 'Fire Truck', location: 'Central Station', priority: 'Medium' }
  ]

  return (
    <div>
      {requests.map((req, index) => (
        <div 
          key={req.id} 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: index % 2 === 0 ? 'transparent' : accentBg,
            borderBottom: `1px solid ${borderColor}`,
            ':last-child': { borderBottom: 'none' }
          }}
        >
          <div>
            <h4 style={{ 
              color: textColor,
              marginBottom: '0.25rem'
            }}>
              {req.type} - {req.id}
            </h4>
            <p style={{ color: silverText }}>{req.location}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ 
              ...buttonStyle,
              backgroundColor: '#38A169' // green
            }}>
              Approve
            </button>
            <button style={{ 
              ...buttonStyle,
              backgroundColor: '#E53E3E' // red
            }}>
              Deny
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SignalManagement