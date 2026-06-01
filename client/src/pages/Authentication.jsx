import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const Authentication = () => {

const [user,setUser] = useState(false);

  return (
    <div>
      {!user?( <SignIn user={user} setUser={setUser} />):(<SignUp user={user} setUser={setUser} />)}
      
    </div>
  )
}

export default Authentication
