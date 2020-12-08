import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    padding: '18px 24px',
    cursor: 'pointer',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    color: '#000000',
    '&:hover': {
      background: '#f9f9f9',
    },
  },
})

const MenuItem = ({ name, children, onClick = f => f }) => (
  <div
    className={styles()}
    onClick={() => onClick(name)}
    onKeyPress={() => onClick(name)}
  >
    {children}
  </div>
)

export default MenuItem
