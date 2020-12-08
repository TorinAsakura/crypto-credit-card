import React from 'react'
import { StyleSheet } from 'elementum'
import { Condition } from '../condition'
import LinkBack from './LinkBack'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    borderTop: '1px solid #BBBBBB',
    marginTop: '50px',
    marginBottom: '50px',
    background: '#ffffff',
    position: 'relative',
    zIndex: 99,
  },
})

const Footer = ({ children, mobile = false }) => (
  <div className={styles()}>
    {children}
    <Condition match={!mobile}>
      <LinkBack />
    </Condition>
  </div>
)

export default Footer
