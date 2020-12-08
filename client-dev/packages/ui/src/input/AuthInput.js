/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    '& input': {
      boxSizing: 'border-box',
      width: '100%',
      height: '56px',
      display: 'flex',
      borderRadius: '3px',
      paddingLeft: '24px',
      paddingTop: '10px',
      paddingRight: '30px',
      fontSize: '18px',
      color: '#000000',
      outline: 0,
      order: 2,
      border: '1px solid #3D887B',
      '&:focus': {
        border: '1px solid #E6A70D',
        boxShadow: '0px 0px 1px 1px #E6A70D',
      },
    },
    '& label': {
      position: 'absolute',
      top: '-2px',
      color: '#bbbbbb',
      pointerEvents: 'none',
      transformOrigin: 'top left',
      transform: 'scale(1) translate3d(0, 22px, 0)',
      transition: '200ms ease all',
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      marginLeft: '24px',
      outline: 0,
      order: 1,
    },
    '& input:focus + label, & input:not([value=""]) + label': {
      transform: 'scale(0.8) translate3d(3px, 12px, 0)',
      fontSize: '12px',
      color: '#000000',
    },
    '&:after': {
      content: '"\\FF0A"',
      position: 'absolute',
      color: '#bbbbbb',
      right: '12px',
      top: '22px',
      fontWeight: 'bold',
      fontSize: '24px',
    },
  },
  disabled: {
    color: '#BBBBBB',
  },
})

const AuthInput = ({
  onChange = f => f, disabled, placeholder, id, onEnter, onKeyPress, ...props
}) => (
  <div className={styles({ disabled })}>
    <input
      {...props}
      id={id}
      disabled={disabled}
      onChange={({ target }) => onChange(target.value)}
      onKeyPress={(event) => {
        if (event.key === 'Enter' && onEnter) {
          onEnter()
        }

        if (onKeyPress) {
          onKeyPress(event)
        }
      }}
    />
    <label htmlFor={id}>
      {placeholder}
    </label>
  </div>
)

export default AuthInput
