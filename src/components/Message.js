import React from 'react'
import { auth } from '../firebase'

const style = {
  sent: `bg-green-600 text-white flex-row-reverse text-end float-right rounded-bl-full pt-4`,
  received: `bg-gray-300 text-black float-left rounded-br-full pt-4`,
  message:`'flex items-center shadow-xl m-4 py-2 rounded-tl-full rounded-tr-full'`
}

const Message = ({message}) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`
  
  
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className='mt-[-2rem] text-gray-600 text-sm'>{message.name}</p>
            <p className='px-4'>{message.text}</p>

        </div>
    </div>
  )
}

export default Message