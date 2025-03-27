import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { IconButton, Flex, VStack, Box, Button, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaHome, FaUserNinja } from "react-icons/fa";
import { MdManageAccounts, MdReportProblem, MdEmergency } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa6";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  
  // Color values that change based on mode
  const navBg = useColorModeValue("#FFFFFF", "#06141B")
  const navText = useColorModeValue("#06141B", "#CCD0CF")
  const hoverBg = useColorModeValue("#E2E8F0", "#253745")
  const activeBg = useColorModeValue("#3182CE", "#3182CE")
  const iconColor = useColorModeValue("#4A5568", "#A0AEC0")

  return (
    <Box
      as="nav"
      borderRadius="md"
      boxShadow="lg"
      bg={navBg}
      p="1rem"
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width="100px"
      zIndex="sticky"
    >
      <Flex direction="column" alignItems="center" height="100%">
        {/* User Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '1rem' }}
        >
          <Image 
            borderRadius="full" 
            boxSize="50px" 
            src = "https://pbs.twimg.com/media/EoscFbbXMAIs_YI.jpg"
            alt="User   Logo" 
          />
        </motion.div>

        {/* Animated Text */}
        <VStack spacing={0} align="center" marginBottom="2rem">
          <motion.div
            initial={{ scale: 1 }} // Initial scale
            animate={{ scale: [1, 1.05, 1] }} // Scale animation
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Animation duration and repeat
            style={{ fontSize: "1.5rem", fontWeight: "bold", whiteSpace: "nowrap" }} // Style for the text
          >
            Smart
          </motion.div>
          <motion.div
            initial={{ scale: 1 }} // Initial scale
            animate={{ scale: [1, 1.05, 1] }} // Scale animation
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Animation duration and repeat
            style={{ fontSize: "1.5rem", fontWeight: "bold", whiteSpace: "nowrap" }} // Style for the text
          >
            Flow
          </motion.div>
        </VStack>

        {/* Vertical Navigation Links */}
        <VStack 
          align="center" 
          spacing="4"
          flex="1"
          width="100%"
        >
          {[
            { label: "Dashboard", icon: <FaHome />, href: "/" },
            { label: "Signal Control", icon: <MdManageAccounts />, href: "/signals" },
            { label: "Violations", icon: <MdReportProblem />, href: "/violations" },
            { label: "Emergencies", icon: <MdEmergency />, href: "/emergencies" },
            { label: "Reports", icon: <BiSolidReport />, href: "/reports" },
            { label: "User  Management", icon: <FaUserNinja />, href: "/users" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }} // Initial state for animation
              animate={{ opacity: 1, x: 0 }} // Animate to this state
              transition={{ duration: 0.3, delay: index * 0.1 }} // Animation duration and delay
            >
              <IconButton 
                aria-label={item.label}
                variant="ghost"
                color={iconColor}
                _hover={{ bg: hoverBg }}
                _active={{ bg: activeBg }}
                borderRadius="full"
                size="lg"
                as="a"
                href={item.href}>
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </VStack>

        {/* Color Mode Toggle at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state for button animation
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <Button
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: hoverBg }}
            borderRadius="full"
            size="lg"
            mb="4"
          >
            {colorMode === "light" ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaMoon />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaSun />
              </motion.div>
            )}
          </Button>
        </motion.div>
      </Flex>
    </Box>
  )
}

export default NavBar;