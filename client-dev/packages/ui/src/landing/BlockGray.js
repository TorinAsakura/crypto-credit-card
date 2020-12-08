import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    backgroundColor: '#F1F2F2',
    display: 'flex',
    justifyContent: 'center',
  },
})

const BlockGray = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default BlockGray
