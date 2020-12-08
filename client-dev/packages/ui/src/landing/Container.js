import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    margin: '0 20px',
    maxWidth: '1440px',
  },
})

const Container = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Container
