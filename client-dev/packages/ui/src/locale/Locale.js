import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import Condition from '../condition/Condition'
import Layer from '../layer/Layer'
import Dropdown from './Dropdown'
import Lang from './Lang'

const Locale = ({
  name,
  color,
  width,
  toggled,
  onChange,
  onToggle,
}) => (
  <div style={{ display: 'inline-flex' }}>
    <div
      onClick={onToggle}
      onKeyPress={onToggle}
    >
      <Lang
        short
        name={name}
        color={color}
        width={width}
      />
    </div>
    <Condition match={toggled}>
      <Layer
        align='tc-bc'
        offset='-16px 0px'
        onOutsideClick={onToggle}
      >
        <Dropdown
          onChange={(value) => {
            onToggle()
            onChange(value)
          }}
        />
      </Layer>
    </Condition>
  </div>
)

const enhance = compose(
  withState('toggled', 'updateToggle', false),
  withHandlers({
    onToggle: props => () => {
      props.updateToggle(!props.toggled)
    },
  }),
)

export default enhance(Locale)
