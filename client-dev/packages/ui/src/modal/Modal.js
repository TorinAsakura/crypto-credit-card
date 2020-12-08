import React from 'react'
import { withPortal } from '../portal'
import Backdrop from './Backdrop'
import Close from './Close'
import Body from './Body'

const Modal = ({ children, width, height, fill, mobile, onClose }) => (
  <Backdrop>
    <div style={{ width: mobile ? '100%' : undefined }}>
      <Close
        mobile={mobile}
        onClick={onClose}
      />
      <Body
        fill={fill}
        width={width}
        height={height}
      >
        {children}
      </Body>
    </div>
  </Backdrop>
)

export default withPortal(Modal)
