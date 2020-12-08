import React from 'react'
import { StyleSheet } from 'elementum'
import { ArroyDownIcon } from '../icons'
import Condition from '../condition/Condition'
import Flags from '../icons/FlagsIcon'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#FFFFFF',
    fontSize: '12px',
    lineHeight: '13px',
    cursor: 'pointer',
    '& span': {
      marginLeft: '10px',
      marginRight: '5px',
      textTransform: 'uppercase',
    },
  },
  'color=black': {
    color: '#000000',
  },
})

const names = {
  en: 'English',
  ru: 'Русский',
}

const Lang = ({
  name,
  width,
  short,
  color,
}) => (
  <div className={styles({ color })}>
    <Flags name={name} width={width} />
    <Condition match={short}>
      <span>
        {name}
      </span>
      <ArroyDownIcon />
    </Condition>
    <Condition match={!short}>
      <span>
        {names[name]}
      </span>
    </Condition>
  </div>
)

export default Lang
