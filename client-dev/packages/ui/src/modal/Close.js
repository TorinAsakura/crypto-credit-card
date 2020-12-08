import React from 'react'
import { StyleSheet } from 'elementum'
import { ModalCloseIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    '& a': {
      textDecoration: 'none',
      cursor: 'pointer',
      position: 'absolute',
      right: '-32px',
      bottom: '0px',
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  mobile: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '6px',
    '& a': {
      right: 'initial',
      position: 'initial',
    },
  },
})

const Close = ({ mobile, onClick }) => (
  <div className={styles({ mobile })}>
    <a onClick={onClick}>
      <ModalCloseIcon height={32} />
    </a>
  </div>
)

export default Close
