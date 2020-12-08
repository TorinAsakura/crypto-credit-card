import React from 'react'
import { StyleSheet } from 'elementum'
import Lang from './Lang'

const styles = StyleSheet.create({
  self: {
    padding: '9px 15px',
    cursor: 'pointer',
    '&:hover': {
      background: '#f9f9f9',
    },
  },
})

const DropdownItem = ({ name, onClick = f => f }) => (
  <div
    className={styles()}
    onClick={() => onClick(name)}
    onKeyPress={() => onClick(name)}
  >
    <Lang name={name} color='black' width={18} />
  </div>
)

export default DropdownItem
