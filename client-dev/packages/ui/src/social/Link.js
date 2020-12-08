import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '35px',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'gray',
    borderRadius: '50%',
    '&:hover': {
      background: '#e6a70d',
    },
  },
})

const Link = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    className={styles()}
  >
    {children}
  </a>
)

export default Link
