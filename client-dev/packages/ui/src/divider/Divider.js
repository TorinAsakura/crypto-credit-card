import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '1px',
    background: '#000000',
  },
  vertical: {
    width: '1px',
    height: '100%',
  },
  transparent: {
    opacity: 0.2,
  },
  'color=gray': {
    background: '#F1F2F2',
  },
  'color=dark': {
    background: '#BBBBBB',
  },
  'color=orange': {
    background: 'linear-gradient(354.47deg, #E6A70D 0%, #C17800 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    transform: 'scaleY(-1)',
  },
})

const Divider = ({ vertical, transparent, color }) => (
  <div className={styles({ vertical, transparent, color })} />
)

export default Divider
