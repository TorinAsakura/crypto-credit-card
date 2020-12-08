import gql from 'graphql-tag'
import { load as loadUser } from '../constants/user'
import { load as loadCccr } from '../constants/cccr'

export const init = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    query: gql`
      query {
        me {
          id
          email
          wallet {
            address
            balance
            ethBalance
          }
        }
        cccr {
          collected
        }
      }
    `,
  })

  dispatch({
    type: loadUser,
    user: data.me,
  })

  dispatch({
    type: loadCccr,
    ...data.cccr,
  })
}
