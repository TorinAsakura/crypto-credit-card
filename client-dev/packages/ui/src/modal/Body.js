import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    boxShadow: '0 3px 5px 0 rgba(0,0,0,0.05)',
    borderRadius: '3px',
    maxHeight: 'calc(100% - 80px)',
    overflow: 'hidden',
  },
  fill: {
    height: 'calc(100% - 80px)',
  },
})

const Body = ({ children, width, height, fill }) => (
  <div
    className={styles({ fill })}
    style={{ width, height }}
  >
    {children}
  </div>
)

export default Body
