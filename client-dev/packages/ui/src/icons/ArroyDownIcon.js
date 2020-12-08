import React from 'react'

const getColor = (color) => {
  if (color === 'grey') return '#959595'
  else if (color === 'yellow') return '#E68D1C'
  return null
}

const ArroyDownIcon = ({ color = 'grey' }) => (
  <svg width='8px' height='5px' viewBox='0 0 8 5'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-109.000000, -89.000000)' fill={getColor(color)}>
        <polygon points='113 94 109 89 117 89' />
      </g>
    </g>
  </svg>
)

export default ArroyDownIcon
