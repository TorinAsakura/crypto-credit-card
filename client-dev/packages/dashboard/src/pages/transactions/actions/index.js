import gql from 'graphql-tag'
import * as actions from '../constants'

export const load = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    query: gql`
      query {
        me {
          transactions {
            id
            amount
            cccrAmount
            confirmed
            createdAt
          }
        }
      }
    `,
  })

  dispatch({
    type: actions.load,
    transactions: data.me.transactions,
  })
}
