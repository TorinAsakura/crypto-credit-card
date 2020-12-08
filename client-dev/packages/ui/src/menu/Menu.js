import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    background: '#ffffff',
    border: '1px solid #E5E5E5',
    borderRadius: '3px',
    boxShadow: '0 3px 5px 0 rgba(0,0,0,0.05)',
    padding: '4px 0px',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-7px',
      right: '14px',
      marginLeft: '-7px',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '7px solid #e5e5e5',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-6px',
      right: '14px',
      marginLeft: '-7px',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '7px solid #ffffff',
    },
  },
  plain: {
    borderRadius: '0px',
    overflow: 'hidden',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
})

const Menu = ({ plain, children }) => (
  <div className={styles({ plain })}>
    {children}
  </div>
)

export default Menu
