import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 0,
    borderWidth: '0px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    textAlign: 'center',
    height: '64px',
    fontSize: '24px',
    padding: '0 95px',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 0.2s ease-in-out',
    background: '#1D3D46;',
    boxShadow: '0 10px 17px 0 rgba(29, 56, 70, 0.54)',
    '&:hover': {
      background: '#224a3f',
      boxShadow: '0 10px 17px 0 rgba(29, 56, 70, 0.34)',
    },
  },
  mobile: {
    width: '100%',
    padding: '18px 15px',
  },
})

const LandingButton = ({ children, onClick, mobile }) => (
  <button
    className={styles({ mobile })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default LandingButton
