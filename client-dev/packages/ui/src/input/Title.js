import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    left: '18px',
    top: '-12px',
    padding: '4px',
    background: '#ffffff',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 300,
    fontSize: '12px',
    lineHeight: 1,
    color: '#000000',
  },
})

const Title = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Title
