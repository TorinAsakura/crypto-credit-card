import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:active': {
      background: '#f1f2f2',
    },
  },
})

const HeaderButton = ({ children, onClick }) => (
  <a
    className={styles()}
    onClick={onClick}
  >
    {children}
  </a>
)

export default HeaderButton
