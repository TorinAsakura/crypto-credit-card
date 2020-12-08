import React from 'react'
import { StyleSheet } from 'elementum'
import { ArroyDownIcon } from '../icons'
import { Text, Space } from '../text'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    borderRadius: '23px',
    backgroundColor: '#f1f2f2',
    padding: '10px 18px',
    cursor: 'pointer',
    alignItems: 'center',
    flexDirection: 'row',
    transition: 'background 0.1s ease',
    '&:hover': {
      backgroundColor: '#e1e1e1',
    },
    '&:active': {
      backgroundColor: '#d1d1d1',
    },
  },
})

const DropdownButton = ({ children, onClick }) => (
  <a
    className={styles()}
    onClick={onClick}
  >
    <Text size='xsmall' uppercase>
      {children}
    </Text>
    <Space count={2} />
    <ArroyDownIcon color='yellow' />
  </a>
)

export default DropdownButton
