import React from 'react'
import { StyleSheet } from 'elementum'
import { CopyIcon } from '../icons'
import Copy from './Copy'

const styles = StyleSheet.create({
  self: {
    height: '44px',
    width: '44px',
    borderRadius: '3px',
    background: '#bbbbbb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: '#E6A70D',
    },
  },
  'attach=right': {
    borderRadius: '3px 0 0 3px',
  },
  'attach=left': {
    borderRadius: '0 3px 3px 0',
  },
})

const CopyButton = ({ attach, ...props }) => (
  <Copy {...props}>
    <a className={styles({ attach })}>
      <CopyIcon height={15} />
    </a>
  </Copy>
)

export default CopyButton
