/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'inline-flex',
    boxSizing: 'border-box',
    fontSize: '15px',
    padding: '9px 12px 8px 12px',
    background: '#ffffff',
    color: '#959595',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  active: {
    color: '#ffffff',
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
  },
  first: {
    borderRadius: '3px 0 0 3px',
  },
  last: {
    borderRadius: '0px 3px 3px 0px',
  },
})

const Tab = ({ children, first, last, active, onClick }) => (
  <a
    className={styles({ active, first, last })}
    onClick={onClick}
  >
    {children}
  </a>
)

export default Tab
