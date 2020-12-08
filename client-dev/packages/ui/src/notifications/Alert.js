import React from 'react'
import { StyleSheet } from 'elementum'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '3px',
    cursor: 'default',
    display: 'flex',
  },
  'type=danger': {
    background: 'rgba(255, 0, 0, 0.5)',
  },
})

const Alert = ({ children, type = 'success' }) => (
  <div className={styles({ type })}>
    <Text
      size='small'
      color='white'
    >
      {children}
    </Text>
  </div>
)
export default Alert
