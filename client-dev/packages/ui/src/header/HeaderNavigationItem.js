import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    position: 'relative',
    height: '100%',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 300,
    color: '#1D3846',
    margin: '7px 18px 8px 18px',
    borderRadius: '3px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&::before': {
      content: '" "',
      position: 'absolute',
      bottom: '-32px',
      left: '0',
      width: '100%',
      height: '4px',
      background: 'linear-gradient(354.47deg, #e6a70d 0%, #c17800 100%)',
      transform: 'translateY(0px)',
      transition: 'transform 0.2s ease-out, -webkit-transform 0.2s ease-out',
    },
    '&:hover::before': {
      transform: 'translateY(-7px)',
      content: '" "',
    },
  },
  active: {
    '&::before': {
      content: '" "',
      position: 'absolute',
      bottom: '-25px',
      left: '0',
      width: '100%',
      height: '4px',
      background: 'linear-gradient(354.47deg, #e6a70d 0%, #c17800 100%)',
      transform: 'translateY(0px)',
      transition: 'transform 0.2s ease-out, -webkit-transform 0.2s ease-out',
    },
    '&:hover::before':{
      transform: 'none',
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
