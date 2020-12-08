import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    boxShadow: '0 3px 5px 0 rgba(0,0,0,0.05)',
    background: '#ffffff',
    position: 'relative',
    zIndex: 99,
    overflow: 'hidden',
  },
})

const Header = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Header
