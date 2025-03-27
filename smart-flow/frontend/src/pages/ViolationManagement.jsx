"use client"

import React from 'react'
import { useColorModeValue } from "@/components/ui/color-mode"
import { motion } from "framer-motion"; // Import motion from framer-motion

const ViolationManagement = () => {
  // Theme-aware colors matching your NavBar
  const pageBg = useColorModeValue('#FFFFFF', '#06141B') // Light: white, Dark: darkBlue
  const textColor = useColorModeValue('#06141B', '#CCD0CF') // Light: darkBlue, Dark: lightGray
  const cardBg = useColorModeValue('#F5F5F5', '#11212D') // Light: light gray, Dark: navy
  const accentBg = useColorModeValue('#E2E8F0', '#253745') // Light: light gray, Dark: steel
  const borderColor = useColorModeValue('#CBD5E0', '#4A5C6A') // Light: gray, Dark: slate

  // Button styles matching NavBar
  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: useColorModeValue('#3182CE', '#3182CE'), // blue in both modes
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
    ':hover': {
      opacity: 0.9
    }
  }

  const violations = [
    { 
      id: 'V001',
      plate: 'ABC123', 
      type: 'Red Light', 
      timestamp: '2023-06-15 08:23:45',
      location: 'Main St & 1st Ave',
      status: 'Pending',
      image: 'red-light-1.jpg'
    }
    // Add more violations as needed
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
        Violation Management
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          backgroundColor: cardBg,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: accentBg,
              color: '#CCD0CF' // Keeps header text light like NavBar
            }}>
              <TableHeader>Plate Number</TableHeader>
              <TableHeader>Violation Type</TableHeader>
              <TableHeader>Timestamp</TableHeader>
              <TableHeader>Location</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {violations.map((violation, index) => (
              <motion.tr 
                key={violation.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                style={{ 
                  backgroundColor: index % 2 === 0 ? cardBg : accentBg,
                  borderBottom: `1px solid ${borderColor}`
                }}
              >
                <TableCell>{violation.plate}</TableCell>
                <TableCell>{violation.type}</TableCell>
                <TableCell>{violation.timestamp}</TableCell>
                <TableCell>{violation.location}</TableCell>
                <TableCell>
                  <StatusBadge status={violation.status} />
                </TableCell>
                <TableCell>
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
                      Reject
                    </button>
                    <button style={buttonStyle}>
                      Details
                    </button>
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

// Styled components
const TableHeader = ({ children }) => (
  <th style={{ 
    padding: '1rem',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  }}>
    {children}
  </th>
)

const TableCell = ({ children }) => (
  <td style={{ 
    padding: '1rem',
    fontSize: '0.9rem'
  }}>
    {children}
  </td>
)

const StatusBadge = ({ status }) => {
  const statusColors = {
    Pending: '#D69E2E', // yellow
    Approved: '#38A169', // green
    Rejected: '#E53E3E'  // red
  }

  return (
    <span style={{
      padding: '0.25rem 0.5rem',
      backgroundColor: statusColors[status],
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      display: 'inline-block',
      minWidth: '70px',
      textAlign: 'center'
    }}>
      {status}
    </span>
  )
}

export default ViolationManagement