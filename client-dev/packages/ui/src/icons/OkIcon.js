import React from 'react'
import Icon from './Icon'

const OkIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g>
      <path
        fill='#2D8F74'
        d='M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12
          C24,18.627417 18.627417,24 12,24 Z M6,13.1402067 C7.32783818,14.4852733 9.21646824,17.0252133
          10.1964778,19 C11.8153773,15.4154667 14.3502082,11.05102 18,6.81553333 L17.2827541,6 C15.1526051,8.12489333
          11.8366221,12.1529 10.1183798,15.3939733 C9.61426923,14.54958 8.7479662,13.2189
          7.27107091,11.69504 L6,13.1402067 Z'
      />
    </g>
  </Icon>
)

export default OkIcon