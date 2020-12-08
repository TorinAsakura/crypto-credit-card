import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  'color=purple': {
    background: '#63688c',
  },
})

const Circle = ({ children, color }) => (
  <div className={styles({ color })}>
    {children}
  </div>
)

export default Circle
