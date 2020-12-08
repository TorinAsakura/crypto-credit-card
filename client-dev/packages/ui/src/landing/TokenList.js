import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu", sans-serif',
    color: '#959595',
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '16px',
    background: '#FFFFFF',
    padding: '20px 20px',
    margin: '2px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    width: '285px',
    borderRadius: '3px',
    '& > b': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '36px',
      color: '#000000',
    },
    '& > span': {
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '16px',
      color: '#000000',
      padding: '5px 15px',
      marginTop: '5px',
    },
  },
})

const TokenList = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default TokenList
