import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: 'linear-gradient(354.25deg, #224A3F 0%, #1D3E46 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    width: '100%',
    height: '100%',
  },
  drawer: {
    position: 'absolute',
    zIndex: 99,
  },
})

const Toolbar = ({ children, drawer }) => (
  <div className={styles({ drawer })}>
    {children}
  </div>
)

export default Toolbar
