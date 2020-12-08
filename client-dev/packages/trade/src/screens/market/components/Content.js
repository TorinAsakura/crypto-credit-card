import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    background: '#ffffff',
    borderRadius: '0 3px 3px 3px',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.05)',
    padding: '10px 16px',
    boxSizing: 'border-box',
  },
})

const Content = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Content
