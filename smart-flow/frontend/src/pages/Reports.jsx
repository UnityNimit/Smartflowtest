import React from 'react'
import { useColorModeValue } from "@/components/ui/color-mode"
import { motion } from "framer-motion"; // Import motion from framer-motion

const Reports = () => {
  // Theme-aware colors matching your NavBar
  const pageBg = useColorModeValue('#FFFFFF', '#06141B')
  const textColor = useColorModeValue('#06141B', '#CCD0CF')
  const cardBg = useColorModeValue('#F5F5F5', '#11212D')
  const accentBg = useColorModeValue('#E2E8F0', '#253745')
  const silverText = useColorModeValue('#718096', '#A0AEC0')

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
        Reports & Analytics
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
        >
          <ReportCard 
            title="Traffic Density Heatmap"
            cardBg={cardBg}
            textColor={textColor}
            accentBg={accentBg}
            silverText={silverText}
          >
            <div style={{ 
              height: '300px',
              backgroundColor: accentBg,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: silverText
            }}>
              Heatmap Visualization
            </div>
          </ReportCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ReportCard 
            title="Violation Trends"
            cardBg={cardBg}
            textColor={textColor}
            accentBg={accentBg}
            silverText={silverText}
          >
            <div style={{ 
              height: '300px',
              backgroundColor: accentBg,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: silverText
            }}>
              Violation Trends Chart
            </div>
          </ReportCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ReportCard 
          title="Emergency Vehicle Usage"
          cardBg={cardBg}
          textColor={textColor}
          accentBg={accentBg}
          silverText={silverText}
        >
          <div style={{ 
            height: '300px',
            backgroundColor: accentBg,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: silverText
          }}>
            Usage Statistics Chart
          </div>
        </ReportCard>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: useColorModeValue('#3182CE', '#3182CE'),
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s',
            ':hover': { opacity: 0.9 }
          }}
        >
          Export Report (PDF)
        </motion.button>
      </div>
    </div>
  )
}

const ReportCard = ({ title, children, cardBg, textColor, accentBg, silverText }) => (
  <div style={{ 
    backgroundColor: cardBg,
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }}>
    <h2 style={{ 
      color: textColor, 
      marginBottom: '1rem',
      fontSize: '1.25rem'
    }}>
      {title}
    </h2>
    {children}
  </div>
)

export default Reports