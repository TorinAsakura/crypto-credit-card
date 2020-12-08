import React from 'react'
import { compose, withState, withPropsOnChange } from 'recompose'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const Copy = ({ children, text, message, tooltipOpened, onShow }) => (
  <Tooltip open={tooltipOpened} title={message}>
    <CopyToClipboard text={text} onCopy={onShow}>
      {children}
    </CopyToClipboard>
  </Tooltip>
)

const enhance = compose(
  withState('tooltipOpened', 'setTooltipOpened', false),
  withPropsOnChange(['openTooltip'], (props) => {
    let timeout

    return {
      onShow: () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => props.setTooltipOpened(false), 1000)
        props.setTooltipOpened(true)
      },
    }
  }),
)

export default enhance(Copy)
