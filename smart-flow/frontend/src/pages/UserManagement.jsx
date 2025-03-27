import { useColorModeValue } from "@/components/ui/color-mode";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useUsers } from '../Users/useUsers'; // Import the useUsers hook
import React, { useEffect, useState } from 'react';

const UserManagement = () => {
  const pageBg = useColorModeValue('#FFFFFF', '#06141B');
  const textColor = useColorModeValue('#06141B', '#CCD0CF');
  const cardBg = useColorModeValue('#F5F5F5', '#11212D');
  const accentBg = useColorModeValue('#E2E8F0', '#253745');
  const borderColor = useColorModeValue('#CBD5E0', '#4A5C6A');
  const silverText = useColorModeValue('#718096', '# A0AEC0');

  const { users, create, createUser , fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: 'Admin',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createUser (userData);
    if (result.success) {
      console.log(result.message);
    } else {
      console.error(result.message);
    }
    setUserData({ name: '', email: '', role: 'Admin', password: '' });
  };

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
        User Management
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
          Add New User
        </h2>
        <form onSubmit={handleSubmit}>
          <FormField 
            label="Full Name" 
            type="text" 
            placeholder="Enter full name"
            value={userData.name}
            onChange={handleChange}
            name="name"
            textColor={textColor}
            silverText={silverText}
            accentBg={accentBg}
            borderColor={borderColor}
          />
          <FormField 
            label="Email" 
            type="email" 
            placeholder="Enter email"
            value={userData.email}
            onChange={handleChange}
            name="email"
            textColor={textColor}
            silverText={silverText}
            accentBg={accentBg}
            borderColor={borderColor}
          />
          <FormField 
            label="Password" 
            type="password" 
            placeholder="Enter password"
            value={userData.password}
            onChange={handleChange}
            name="password"
            textColor={textColor}
            silverText={silverText}
            accentBg={accentBg}
            borderColor={borderColor}
          />
          <div>
            <label style={{ 
              display: 'block',
              color: textColor,
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Role
            </label>
            <select 
              name="role"
              value={userData.role}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: accentBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '4px',
                color: textColor
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Operator">Operator</option>
            </select>
          </div>
          <button type="submit" style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#3182CE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s',
            ':hover': { opacity: 0.9 }
          }}>
            Add User
          </button>
        </form>
      </motion.div>

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
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: accentBg }}>
              <th style={tableHeaderStyle(textColor)}>Name</th>
              <th style={tableHeaderStyle(textColor)}>Email</th>
              <th style={tableHeaderStyle(textColor)}>Role</th>
              <th style={tableHeaderStyle(textColor)}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr 
                key={user._id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'transparent' : accentBg,
                  borderBottom: `1px solid ${borderColor}`
                }}
              >
                <td style={tableCellStyle(textColor)}>{user.name}</td>
                <td style={tableCellStyle(silverText)}>{user.email}</td>
                <td style={tableCellStyle(textColor)}>
                  <RoleBadge role={user.role} />
                </td>
                <td style={tableCellStyle(textColor)}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                      Edit
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
                      Delete
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

// Table styles as functions to accept color props
const tableHeaderStyle = (color) => ({
  padding: '1rem',
  textAlign: 'left',
  color: color,
  fontWeight: 'bold'
});

const tableCellStyle = (color) => ({
  padding: '1rem',
  color: color
});

const RoleBadge = ({ role }) => {
  const roleColors = {
    Admin: useColorModeValue('#3182CE', '#3182CE'), // blue
    Operator: useColorModeValue('#38A169', '#38A169') // green
  };

  return (
    <span style={{
      padding: '0.25rem 0.5rem',
      backgroundColor: roleColors[role],
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }}>
      {role}
    </span>
  );
};

const FormField = ({ label, type, placeholder, value, onChange, name, textColor, silverText, accentBg, borderColor }) => (
  <div>
    <label style={{ 
      display: 'block',
      color: textColor,
      marginBottom: '0.5rem',
      fontWeight: 'bold'
    }}>
      {label}
    </label>
    <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      style={{
        width: '100%',
        padding: '0.75rem',
        backgroundColor: accentBg,
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        color: textColor
      }}
    />
  </div>
);

export default UserManagement;