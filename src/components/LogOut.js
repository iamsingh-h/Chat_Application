import React from 'react'
import { auth } from '../firebase'


const LogOut = () => {

    const signOut = () =>{
        signOut(auth)
    }

  return (
    <div onClick={()=>auth.signOut()} className='bg-gray-200 px-4 py-2 hover:bg-gray-100'>
        LogOut
    </div>
  )
}

export default LogOut