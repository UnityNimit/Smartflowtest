import { colors } from './colors'

export const smallButtonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: colors.blue,
  color: colors.white,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'background-color 0.2s',
  ':hover': {
    opacity: 0.9
  }
}

export const actionButtonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: colors.blue,
  color: colors.white,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold'
}

// Add more shared styles as needed