import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  let displayName = 'username'
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    try {
      const user = JSON.parse(loggedInUser)
      if (user.role === 'admin') {
        displayName = 'Admin'
      } else if (user.role === 'employee' && user.data && user.data.firstName) {
        displayName = user.data.firstName
      }
    } catch (e) {
      // fallback to default
    }
  }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{displayName} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header