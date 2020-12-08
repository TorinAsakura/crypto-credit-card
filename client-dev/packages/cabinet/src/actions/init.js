import gql from 'graphql-tag'
import { load as loadUser } from './user'
import { load as loadHierarchy } from '../constants/hierarchy'

export const init = () => async (dispatch, getState, client) => {
  await loadUser()(dispatch, getState, client)

  const { data } = await client.query({
    query: gql`
      query {
        me {
          hierarchy {
            id
            path
            plan
            country
            referrer
            email
            firstName
            lastName
          }
        }
      }
    `,
  })

  dispatch({
    type: loadHierarchy,
    current: getState().user,
    children: data.me.hierarchy,
  })
}
