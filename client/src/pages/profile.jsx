import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries'   
import Auth from '../utils/auth'

export default function profile() {
  const { profileId } = useParams()

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
        variables: { profileId: profileId},
    }
  )

  const profile = data?.me || data?.profile || {}

  if(Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />
  }

  if(loading){
    return <div>Loading...</div>
  }

  if(!profile?.name) {
    return (
        <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
        </h4>
    )
  }

  return (
    <div>
        <h2 className='profile-h2'>
            {profileId ? `${profile.name}` : ''}
        </h2>
    </div>
  )
}
