import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    borderRadius: '3px',
    background: '#ffffff',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  transparent: {
    opacity: 0.4,
  },
  fixed: {
    maxWidth: '1200px',
  },
})

const Block = ({ children, fixed, transparent }) => (
  <div className={styles({ fixed, transparent })}>
    {children}
  </div>
)

export default Block
