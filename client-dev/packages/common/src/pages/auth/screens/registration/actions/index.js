import gql from 'graphql-tag'
import { getUid } from '@c3/utils'
import * as actions from '../constants'

export const change = email => ({
  type: actions.change,
  email,
})

export const register = () => async (dispatch, getState, client, history) => {
  const { email } = getState().auth.registration
  const { locale } = getState().locale
  const { uid, target } = getUid()

  const { data } = await client.mutate({
    mutation: gql`
      mutation Signup($email: String!, $locale: Locale!, $sponsor: ID, $referrer: String) {
        signup(email: $email, locale: $locale, sponsor: $sponsor, referrer: $referrer) {
          errors {
            email
          }
        }
      }
    `,
    variables: {
      email,
      locale,
      sponsor: uid,
      referrer: target,
    },
  })

  if (data.signup.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.signup.errors,
    })
  } else {
    history.push('/auth/registration/success')

    dispatch({ type: actions.clear })
  }
}
