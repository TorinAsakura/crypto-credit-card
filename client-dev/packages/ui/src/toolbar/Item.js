import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 600,
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '13px',
    textTransform: 'uppercase',
    padding: '14px 27px 13px 22px',
    width: '100%',
    '&:hover': {
      background: 'rgba(230, 167, 13, 0.9)',
    },
  },
  active: {
    background: 'linear-gradient(354.47deg, #E6A70D 0%, #C17800 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
  },
  center: {
    paddingRight: '0px',
    paddingLeft: '0px',
    textAlign: 'center',
  },
})

const Item = ({ to, exact, center, children }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true, center })}
    activeClassName={styles({ active: true })}
  >
    {children}
  </NavLink>
)

export default Item
