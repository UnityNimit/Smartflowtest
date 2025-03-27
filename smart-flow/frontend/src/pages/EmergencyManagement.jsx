// import React from 'react'
// import { colors } from '../constants/colors'
// import { smallButtonStyle } from '../constants/styles'

// import { useColorModeValue } from "@/components/ui/color-mode"

// const EmergencyManagement = () => {
//   // Theme-aware colors matching your NavBar
//   const pageBg = useColorModeValue('#FFFFFF', '#06141B')
//   const textColor = useColorModeValue('#06141B', '#CCD0CF')
//   const cardBg = useColorModeValue('#F5F5F5', '#11212D')
//   const accentBg = useColorModeValue('#E2E8F0', '#253745')
//   const borderColor = useColorModeValue('#CBD5E0', '#4A5C6A')
//   const silverText = useColorModeValue('#718096', '#A0AEC0')

//   // Define buttonStyle here so it's accessible to all components
//   const buttonStyle = {
//     padding: '0.5rem 1rem',
//     backgroundColor: useColorModeValue('#3182CE', '#3182CE'),
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     transition: 'all 0.2s',
//     ':hover': { opacity: 0.9 }
//   }

//   const vehicles = [
//     { id: 'AMB001', type: 'Ambulance', location: 'Main Hospital', status: 'Active' },
//     { id: 'FIR002', type: 'Fire Truck', location: 'Central Station', status: 'Inactive' }
//   ]

//   const requests = [
//     { id: 'REQ001', vehicleId: 'AMB001', priority: 'High', route: 'Main St to Hospital' }
//   ]

//   return (
//     <div style={{ 
//       backgroundColor: pageBg,
//       minHeight: '100vh',
//       color: textColor
//     }}>
//       <h1 style={{ 
//         color: textColor,
//         marginBottom: '2rem',
//         fontSize: '1.5rem',
//         fontWeight: 'bold'
//       }}>
//         Emergency Vehicle Management
//       </h1>
      
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '2rem',
//         marginBottom: '2rem'
//       }}>
//         <div style={{ 
//           backgroundColor: cardBg, 
//           borderRadius: '8px', 
//           padding: '1.5rem',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }}>
//           <h2 style={{ 
//             color: textColor, 
//             marginBottom: '1rem',
//             fontSize: '1.25rem'
//           }}>
//             Emergency Vehicles
//           </h2>
//           <VehicleList 
//             vehicles={vehicles} 
//             textColor={textColor}
//             silverText={silverText}
//             borderColor={borderColor}
//             accentBg={accentBg}
//           />
//         </div>

//         <div style={{ 
//           backgroundColor: cardBg, 
//           borderRadius: '8px', 
//           padding: '1.5rem',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }}>
//           <h2 style={{ 
//             color: textColor, 
//             marginBottom: '1rem',
//             fontSize: '1.25rem'
//           }}>
//             Priority Requests
//           </h2>
//           <PriorityRequests 
//             requests={requests} 
//             textColor={textColor}
//             silverText={silverText}
//             borderColor={borderColor}
//             buttonStyle={buttonStyle}
//           />
//         </div>
//       </div>

//       <div style={{ 
//         backgroundColor: cardBg, 
//         borderRadius: '8px', 
//         padding: '1.5rem',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//       }}>
//         <h2 style={{ 
//           color: textColor, 
//           marginBottom: '1rem',
//           fontSize: '1.25rem'
//         }}>
//           Route Optimization
//         </h2>
//         <RouteVisualization 
//           accentBg={accentBg}
//           textColor={textColor}
//           silverText={silverText}
//         />
//       </div>
//     </div>
//   )
// }

// const StatusBadge = ({ status, textColor }) => {
//   const statusColors = {
//     Active: useColorModeValue('#38A169', '#38A169'), // green
//     Inactive: useColorModeValue('#E53E3E', '#E53E3E') // red
//   }

//   return (
//     <span style={{
//       padding: '0.25rem 0.5rem',
//       backgroundColor: statusColors[status],
//       color: 'white',
//       borderRadius: '4px',
//       fontSize: '0.8rem',
//       fontWeight: 'bold'
//     }}>
//       {status}
//     </span>
//   )
// }

// const VehicleList = ({ vehicles, textColor, silverText, borderColor, accentBg }) => (
//   <div>
//     {vehicles.map((vehicle, index) => (
//       <div key={vehicle.id} style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '1rem',
//         backgroundColor: index % 2 === 0 ? 'transparent' : accentBg,
//         borderBottom: `1px solid ${borderColor}`,
//         ':last-child': {
//           borderBottom: 'none'
//         }
//       }}>
//         <div>
//           <h3 style={{ color: textColor }}>{vehicle.type} - {vehicle.id}</h3>
//           <p style={{ color: silverText }}>{vehicle.location}</p>
//         </div>
//         <StatusBadge status={vehicle.status} textColor={textColor} />
//       </div>
//     ))}
//   </div>
// )

// const PriorityRequests = ({ requests, textColor, silverText, borderColor, buttonStyle }) => (
//   <div>
//     {requests.map(request => (
//       <div key={request.id} style={{
//         padding: '1rem',
//         borderBottom: `1px solid ${borderColor}`,
//         ':last-child': {
//           borderBottom: 'none'
//         }
//       }}>
//         <h3 style={{ color: textColor }}>Request {request.id}</h3>
//         <p style={{ color: silverText }}>Vehicle: {request.vehicleId}</p>
//         <p style={{ color: silverText }}>Priority: {request.priority}</p>
//         <p style={{ color: silverText }}>Route: {request.route}</p>
//         <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
//           <button style={{
//             ...buttonStyle,
//             backgroundColor: '#38A169' // green
//           }}>
//             Approve
//           </button>
//           <button style={{
//             ...buttonStyle,
//             backgroundColor: '#E53E3E' // red
//           }}>
//             Deny
//           </button>
//           <button style={buttonStyle}>
//             Optimize Route
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// )

// const RouteVisualization = ({ accentBg, textColor, silverText }) => (
//   <div style={{ 
//     height: '300px',
//     backgroundColor: accentBg,
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: silverText
//   }}>
//     Route Visualization Map
//   </div>
// )

// export default EmergencyManagement


import React from 'react'
import { useColorModeValue } from "@/components/ui/color-mode"
import { motion } from "framer-motion"; // Import motion from framer-motion

const EmergencyManagement = () => {
  // Theme-aware colors matching your NavBar
  const pageBg = useColorModeValue('#FFFFFF', '#06141B')
  const textColor = useColorModeValue('#06141B', '#CCD0CF')
  const cardBg = useColorModeValue('#F5F5F5', '#11212D')
  const accentBg = useColorModeValue('#E2E8F0', '#253745')
  const borderColor = useColorModeValue('#CBD5E0', '#4A5C6A')
  const silverText = useColorModeValue('#718096', '#A0AEC0')

  const vehicles = [
    { id: 'AMB001', type: 'Ambulance', location: 'Main Hospital', status: 'Active' },
    { id: 'FIR002', type: 'Fire Truck', location: 'Central Station', status: 'Inactive' }
  ]

  const requests = [
    { id: 'REQ001', vehicleId: 'AMB001', priority: 'High', route: 'Main St to Hospital' }
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
        Emergency Vehicle Management
      </motion.h1>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            backgroundColor: cardBg, 
            borderRadius: '8px', 
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ 
            color: textColor, 
            marginBottom: '1rem',
            fontSize: '1.25rem'
          }}>
            Emergency Vehicles
          </h2>
          <VehicleList 
            vehicles={vehicles} 
            textColor={textColor}
            silverText={silverText}
            borderColor={borderColor}
            accentBg={accentBg}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            backgroundColor: cardBg, 
            borderRadius: '8px', 
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ 
            color: textColor, 
            marginBottom: '1rem',
            fontSize: '1.25rem'
          }}>
            Priority Requests
          </h2>
          <PriorityRequests 
            requests={requests} 
            textColor={textColor}
            silverText={silverText}
            borderColor={borderColor}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          backgroundColor: cardBg, 
          borderRadius: '8px', 
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ 
          color: textColor, 
          marginBottom: '1rem',
          fontSize: '1.25rem'
        }}>
          Route Optimization
        </h2>
        <RouteVisualization 
          accentBg={accentBg}
          textColor={textColor}
          silverText={silverText}
        />
      </motion.div>
    </div>
  )
}

const StatusBadge = ({ status, textColor }) => {
  const statusColors = {
    Active: useColorModeValue('#38A169', '#38A169'), // green
    Inactive: useColorModeValue('#E53E3E', '#E53E3E') // red
  }

  return (
    <span style={{
      padding: '0.25rem 0.5rem',
      backgroundColor: statusColors[status],
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }}>
      {status}
    </span>
  )
}

const VehicleList = ({ vehicles, textColor, silverText, borderColor, accentBg }) => (
  <div>
    {vehicles.map((vehicle, index) => (
      <div key={vehicle.id} style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: index % 2 === 0 ? 'transparent' : accentBg,
        borderBottom: `1px solid ${borderColor}`,
      }}>
        <div>
          <h3 style={{ color: textColor }}>{vehicle.type} - {vehicle.id}</h3>
          <p style={{ color: silverText }}>{vehicle.location}</p>
        </div>
        <StatusBadge status={vehicle.status} textColor={textColor} />
      </div>
    ))}
  </div>
)

const PriorityRequests = ({ requests, textColor, silverText, borderColor }) => (
  <div>
    {requests.map(request => (
      <div key={request.id} style={{
        padding: '1rem',
        borderBottom: `1px solid ${borderColor}`,
      }}>
        <h3 style={{ color: textColor }}>Request {request.id}</h3>
        <p style={{ color: silverText }}>Vehicle: {request.vehicleId}</p>
        <p style={{ color: silverText }}>Priority: {request.priority}</p>
        <p style={{ color: silverText }}>Route: {request.route}</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#38A169', // green
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            ':hover': { opacity: 0.9 }
          }}>
            Approve
          </button>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#E53E3E', // red
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            ':hover': { opacity: 0.9 }
          }}>
            Deny
          </button>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3182CE', // blue
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            ':hover': { opacity: 0.9 }
          }}>
            Optimize Route
          </button>
        </div>
      </div>
    ))}
  </div>
)

const RouteVisualization = ({ accentBg, textColor, silverText }) => (
  <div style={{ 
    height: '300px',
    backgroundColor: accentBg,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: silverText
  }}>
    Route Visualization Map
  </div>
)

export default EmergencyManagement