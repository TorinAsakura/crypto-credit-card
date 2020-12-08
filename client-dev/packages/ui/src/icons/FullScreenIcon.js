import React from 'react'
import Icon from './Icon'

const FullScreenIcon = props => (
  <Icon originalWidth={18} originalHeight={18} {...props}>
    <g>
      <path
        fill='#bbbbbb'
        d='M6.5,10.09 L7.91,11.5 L3.41,16 L7,16 L7,18 L0,18 L0,11 L2,11 L2,14.59 L6.5,10.09 Z M7.91,6.5 L6.5,7.91
          L2,3.41 L2,7 L0,7 L0,0 L7,0 L7,2 L3.41,2 L7.91,6.5 Z M11.5,10.09 L16,14.59 L16,11 L18,11 L18,18 L11,18 L11,16
          L14.59,16 L10.09,11.5 L11.5,10.09 Z M10.09,6.5 L14.59,2 L11,2 L11,0 L18,0 L18,7
          L16,7 L16,3.41 L11.5,7.91 L10.09,6.5 Z'
      />
    </g>
  </Icon>
)

export default FullScreenIcon
