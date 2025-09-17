import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid} = useParams()
  return (
    <div className='flex justify-center p-5 text-4xl bg-orange-50'> User: {userid}</div>
  )
}

export default User