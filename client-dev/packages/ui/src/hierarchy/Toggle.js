import React from 'react'
import { StyleSheet } from 'elementum'
import { CloseIcon, FullScreenIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    cursor: 'pointer',
    opacity: 1,
    '&:hover': {
      opacity: 0.6,
    },
  },
})

const Toggle = ({ fullScreen, onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    {fullScreen ? <CloseIcon height={20} /> : <FullScreenIcon height={18} />}
  </div>
)

export default Toggle
