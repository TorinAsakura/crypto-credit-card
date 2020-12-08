import gql from 'graphql-tag'
import * as actions from '../constants/buy'

export const change = amount => ({
  type: actions.change,
  amount,
})

export const buy = () => async (dispatch, getState, client, history) => {
  const { amount } = getState().tokens.buy

  const { data } = await client.mutate({
    mutation: gql`
      mutation BuyTokens($amount: Float!) {
        buyTokens(amount: $amount) {
          success
          errors {
            amount
          }
        }
      }
    `,
    variables: {
      amount,
    },
  })

  if (data.buyTokens.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.buyTokens.errors,
    })
  } else {
    history.goBack()
  }
}
