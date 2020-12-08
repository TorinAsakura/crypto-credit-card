import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    '&::before': {
      content: '" "',
      position: 'absolute',
      left: '-40px',
      top: '50%',
      marginTop: '-12px',
      width: '15px',
      height: '15px',
      border: '3px solid #1d3e46',
      borderRadius: '50%',
      boxShadow: '0 10px 17px 0 rgba(29, 56, 70, 0.39)',
      backgroundColor: '#FFFFFF',
    },
  },
  right: {
    '&::before': {
      left: 'auto',
      right: '-40px',
      border: '3px solid #e6a70d',
    },
  },
})

const ListContainer = ({ children, right }) => (
  <div className={styles({ right })}>
    {children}
  </div>
)

export default ListContainer
