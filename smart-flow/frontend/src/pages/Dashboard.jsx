import React from 'react'
import { useColorModeValue } from "@/components/ui/color-mode"
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Box, Flex } from "@chakra-ui/react"
import { colors } from '../constants/colors';

const Dashboard = () => {
  // Get theme-aware colors
  const bgColor = useColorModeValue(colors.white, colors.darkBlue);
  const textColor = useColorModeValue(colors.darkBlue, colors.lightGray);
  const cardBg = useColorModeValue(colors.lightGray, colors.navy);
  const accentBg = useColorModeValue(colors.silver, colors.steel);

  return (
    <div style={{ 
      backgroundColor: bgColor,
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
        Dashboard
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          backgroundColor: cardBg,
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ 
          color: textColor, 
          marginBottom: '1rem',
          fontSize: '1.25rem'
        }}>
          Metrics Overview
        </h2>
        <Flex 
          gap="6" 
          mb="8"
          flexWrap="wrap"
        >
          {[
            { title: "Vehicles Detected", value: "1,240", color: colors.blue },
            { title: "Violations Today", value: "24", color: colors.red },
            { title: "Active Emergencies", value: "3", color: colors.green },
          ].map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MetricCard 
                title={metric.title} 
                value={metric.value} 
                color={metric.color} 
                bg={cardBg}
                textColor={textColor}
              />
            </motion.div>
          ))}
        </Flex>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box 
          bg={cardBg}
          p="6"
          borderRadius="lg"
          mb="8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
          >
            Live Traffic Map
          </motion.h2>
          <Flex
            h="400px"
            bg={accentBg}
            borderRadius="md"
            alignItems="center"
            justifyContent="center"
            color={textColor}
          >
            Map Integration Area
          </Flex>
        </Box>
      </motion.div>

      <Flex gap="4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button colorScheme="blue">
            Override Signal
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button colorScheme="green">
            Prioritize Emergency
          </Button>
        </motion.div>
      </Flex>
    </div>
  );
};

// MetricCard component
const MetricCard = ({ title, value, color, bg, textColor }) => (
  <Box
    flex="1"
    minW="300px"
    bg={bg}
    p="6"
    borderRadius="lg"
    borderLeft="4px solid"
    borderColor={color}
    boxShadow="md"
  >
    <Box as="h3" color={textColor} mb="2">
      {title}
    </Box>
    <Box 
      as="p" 
      color={textColor} 
      fontSize="2xl" 
      fontWeight="bold"
    >
      {value}
    </Box>
  </Box>
);

// Button component
const Button = ({ colorScheme, children, ...props }) => {
  const bgColor = useColorModeValue(
    colorScheme === 'blue' ? colors.blue : colors.green,
    colorScheme === 'blue' ? colors.blue : colors.green
  )
  
  return (
    <Box
      as="button"
      px="6"
      py="3"
      bg={bgColor}
      color="white"
      borderRadius="md"
      fontWeight="bold"
      _hover={{ opacity: 0.9 }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Dashboard;