import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 600,
    textDecoration: 'none',
    color: '#1D3846',
    '&:hover': {
      opacity: 0.8,
    },
  },
})

const HeaderLink = ({ to, children }) => (
  <Link
    to={to}
    className={styles()}
  >
    {children}
  </Link>
)

export default HeaderLink
