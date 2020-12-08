import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    color: '#1D3846',
    padding: '7px 18px 8px 18px',
    borderRadius: '3px',
    textDecoration: 'none',
    '&:hover': {
      background: 'rgba(241, 242, 242, 0.25)',
    },
  },
  active: {
    background: '#f1f2f2',
    '&:hover': {
      background: '#e1e1e1',
    },
    '&:active': {
      background: '#d1d1d1',
    },
  },
})

const HeaderItem = ({ to, exact, children }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true })}
    activeClassName={styles({ active: true })}
  >
    {children}
  </NavLink>
)

export default HeaderItem
