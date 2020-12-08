import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flex: '0 1 auto',
  },
})

const TokenBoxContainer = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default TokenBoxContainer
