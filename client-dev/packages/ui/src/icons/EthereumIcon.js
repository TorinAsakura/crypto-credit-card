import React from 'react'
import Icon from './Icon'

const EthereumIcon = ({ white, ...props }) => (
  <Icon originalWidth={256} originalHeight={417} {...props}>
    <g>
      <polygon
        fill={white ? '#ffffff' : '#343434'}
        points='127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32'
      />
      <polygon
        fill={white ? '#ffffff' : '#8C8C8C'}
        points='127.962 0 0 212.32 127.962 287.959 127.962 154.158'
      />
      <polygon
        fill={white ? '#ffffff' : '#3C3C3B'}
        points='127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866'
      />
      <polygon
        fill={white ? '#ffffff' : '#8C8C8C'}
        points='127.962 416.9052 127.962 312.1852 0 236.5852'
      />
      <polygon
        fill={white ? '#ffffff' : '#141414'}
        points='127.9611 287.9577 255.9211 212.3207 127.9611 154.1587'
      />
      <polygon
        fill={white ? '#ffffff' : '#393939'}
        points='0.0009 212.3208 127.9609 287.9578 127.9609 154.1588'
      />
    </g>
  </Icon>
)

export default EthereumIcon
