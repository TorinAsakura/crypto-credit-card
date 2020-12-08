import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    margin: '25px 0',
    '& > div': {
      height: '35px',
      margin: '0 1px',
    },
    '& > .chart-background': {
      position: 'absolute',
      left: '-46px',
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 1,
      opacity: '0.35',
      background: 'repeating-linear-gradient(-55deg, #f8e9db 1px, #fff5ed 2px, #fff5ed 11px, #f8e9db 12px, #f8e9db 20px)',
      animationName: 'MOVE-BG',
      animationDuration: '0.6s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    },
    '& > .chart-yellow': {
      backgroundColor: '#e6a70d',
      width: '55%',
      borderTopLeftRadius: '24px',
      borderBottomLeftRadius: '24px',
    },
    '& > .chart-brown': {
      backgroundColor: '#c17800',
      width: '25%',
    },
    '& > .chart-lime': {
      backgroundColor: '#2d8f74',
      width: '10%',
    },
    '& > .chart-green': {
      backgroundColor: '#224a3f',
      width: '10%',
      borderTopRightRadius: '24px',
      borderBottomRightRadius: '24px',
    },
  },
})

const LandingChart = () => (
  <div className={styles()}>
    <div className='chart-background' />
    <div className='chart-yellow' />
    <div className='chart-brown' />
    <div className='chart-lime' />
    <div className='chart-green' />
  </div>
)

export default LandingChart
