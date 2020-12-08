import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '42px',
    textTransform: 'uppercase',
    color: '#959595',
    textAlign: 'center',
    '& > .underline': {
      position: 'relative',
    },
    '& > .underline::after': {
      content: '" "',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '3px',
      background: 'linear-gradient(354.47deg, #e6a70d 0%, #c17800 100%)',
    },
    '& > .black': {
      color: '#000000',
    },
  },

})

const Title = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Title
