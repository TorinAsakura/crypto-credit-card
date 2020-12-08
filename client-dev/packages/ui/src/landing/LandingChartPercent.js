import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '40px',
    position: 'relative',
    '&::after': {
      content: '" "',
      position: 'absolute',
      left: '38%',
      bottom: '-35px',
      width: '16px',
      height: '16px',
      background: 'inherit',
      borderRadius: '50%',
      boxShadow: '0 10px 17px 0 rgba(29, 56, 70, 0.39)',
      border: '3px solid #1d3e46',
    },
  },
  'color=yellow': {
    '&::after': {
      borderColor: '#e6a70d',
    },
  },
  'color=brown': {
    '&::after': {
      borderColor: '#c17800',
    },
  },
  'color=lime': {
    '&::after': {
      borderColor: '#2d8f74',
    },
  },
  'color=green': {
    '&::after': {
      borderColor: '#224a3f',
    },
  },
})

const LandingChartPercent = ({ children, color }) => (
  <div className={styles({ color })}>
    {children}
  </div>
)

export default LandingChartPercent
