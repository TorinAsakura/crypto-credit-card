import gql from 'graphql-tag'
import * as actions from '../constants'

export const load = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    query: gql`
      query {
        me {
          referrer {
            id
            email
            address
          }
        }
      }
    `,
  })

  dispatch({
    type: actions.load,
    ...data.me,
  })
}
