import React from 'react'
import { StyleSheet } from 'elementum'
import { TokenNetworkIcon, TokenCreditCardIcon, TokenPortfolioIcon } from '@c3/ui/src/icons'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu", sans-serif',
    backgroundColor: '#F1F2F2',
    margin: '0 10px',
    lineHeight: '27px',
    fontWeight: 300,
    fontSize: '16px',
    flex: '1 1 0',
    '& > div': {
      display: 'flex',
      margin: '25px 0 30px 16px',
      alignItems: 'center',
    },
    '& > div > span': {
      marginLeft: '17px',
      marginRight: '17px',
      display: 'inline-flex',
      color: '#E6A70D',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '21px',
    },
    '& > p': {
      borderLeft: '1px solid #BBBBBB',
      paddingLeft: '26px',
      margin: '0 27px 25px',
      paddingLeft: '26px',
    },
    '& > div > div': {
      flexShrink: 0,
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: 'linear-gradient(354.25deg, #224a3f 0%, #1d3e46 100%)',
    },
    '& svg': {
      marginLeft: '5px',
    },
  },
  white: {
    backgroundColor: '#FFFFFF',
  },
})

const icons = {
  net: <TokenNetworkIcon />,
  card: <TokenCreditCardIcon />,
  portfolio: <TokenPortfolioIcon />,
}

const TokenBox = ({ children, title, icon = 'net', white }) => (
  <div className={styles({ white })}>
    <div>
      <div>{icons[icon]}</div>
      <span>{title}</span>
    </div>
    <p>{children}</p>
  </div>
)

export default TokenBox
