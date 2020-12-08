import React from 'react'
import Icon from './Icon'

const CopyIcon = props => (
  <Icon originalWidth={15} originalHeight={17} {...props}>
    <path
      fill='#FFFFFF'
      d='M13,15 L5,15 L5,5 L13,5 L13,15 Z M4.6,3 C3.7163444,3 3,3.69644594 3,4.55555556 L3,15.4444444 C3,16.3035541
        3.7163444,17 4.6,17 L13.4,17 C14.2836556,17 15,16.3035541 15,15.4444444 L15,4.55555556 C15,3.69644594
        14.2836556,3 13.4,3 L4.6,3 Z M11,0 L1.57142857,0 C0.703552536,-8.32667268e-17 0,0.671572875 0,1.5 L0,12
        L1.57142857,12 L1.57142857,1.5 L11,1.5 L11,0 Z'
    />
  </Icon>
)

export default CopyIcon
