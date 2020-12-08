/* eslint-disable */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '12px',
    fontFamily: '"Ubuntu", sans-serif',
    background: '#f1f2f2',
    color: '#1d3846',
    padding: '6px 9px 6px 9px',
    cursor: 'pointer',
    marginRight: '8px',
    fontWeight: 500,
    borderRadius: '3px',
    '&:hover': {
      background: '#BBBBBB',
    },
  },
  current: {
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    color: '#ffffff',
    cursor: 'initial',
    '&:hover': {
      background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    },
  },
})

const Currency = ({ children, current, onClick }) => (
  <a
    className={styles({ current })}
    onClick={onClick}
  >
    {children}
  </a>
)

export default Currency
