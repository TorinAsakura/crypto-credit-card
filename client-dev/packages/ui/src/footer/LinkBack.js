import React from 'react'
import { StyleSheet } from 'elementum'
import smoothScroll from 'smoothscroll'
import { compose, withHandlers } from 'recompose'
import { ArroyTopIcon } from '../icons'

const enhance = compose(
  withHandlers({
    onClick: props => () => {
      smoothScroll(0)
    }
  })
)

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '-40px',
    right: '40px',
    background: 'white',
    padding: '12px',
    boxShadow: '0 30px 28px 0 rgba(0, 0, 0, 0.09)',
    textAlign: 'center',
    cursor: 'pointer',
  },
})

const LinkBack = ({ onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    <ArroyTopIcon />
  </div>
)

export default enhance(LinkBack)
