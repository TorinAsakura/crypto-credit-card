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
    background: '#f1f2f2',
    color: '#959595',
    textTransform: 'uppercase',
  },
  active: {
    color: '#ffffff',
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
  },
})

const TabRouteLink = ({ children, to }) => (
  <NavLink
    to={to}
    className={styles()}
    activeClassName={styles({ active: true })}
  >
    {children}
  </NavLink>
)

export default TabRouteLink
