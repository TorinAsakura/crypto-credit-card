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
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 0.2s ease-in-out',
  },
  fill: {
    width: '100%',
  },
  'size=small': {
    height: '32px',
    fontSize: '12px',
    padding: '0px 21px',
  },
  'size=normal': {
    height: '44px',
    fontSize: '15px',
    padding: '0px 21px',
  },
  'color=orange': {
    background: '#E6A70D',
    '&:hover': {
      boxShadow: 'inset 0 -3px 0 0 #C17800',
    },
    '&:active': {
      boxShadow: 'inset 0 -3px 0 0 #C17800',
      backgroundImage: 'linear-gradient(354.47deg, #E6A70D 0%, #C17800 100%)',
    },
  },
  'color=green': {
    background: '#2D8F74',
    '&:hover': {
      boxShadow: 'inset 0 -3px 0 0 #224A3F',
    },
    '&:active': {
      boxShadow: 'inset 0 3px 0 0 #224A3F',
    },
  },
  disabled: {
    background: '#f1f2f2',
    pointerEvents: 'none',
    cursor: 'initial',
    color: '#959595',
    '&:hover': {
      background: '#f1f2f2',
      color: '#959595',
    },
    '&:focus': {
      background: '#f1f2f2',
      color: '#959595',
    },
    '&:active': {
      background: '#f1f2f2',
      color: '#959595',
    },
  },
})

const Button = ({ children, disabled, fill, color = 'orange', size = 'normal', onClick }) => (
  <button
    disabled={disabled}
    className={styles({ disabled, fill, color, size })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
