import React from 'react';
import { useSelector } from 'react-redux';
import "./pro.css";

const Profile = () => {
  
  const auth = useSelector((state) => state.auth);

  return (
    <div className='px-9 flex w-3/5 h-44 z-0'>
      <div className=" items-center w-full p-2 justify-between">
      <div className="flex items-center justify-between gap-3">
        
        <img className="proMain rounded-full w-36 h-36 object-cover " src={auth.avatar} alt="profile" />
        <div  className='followers flex flex-col items-center'>
        <h1 className="font-normal text-xl"> {auth.nickname}</h1>

        <h2 className='too '> 3M Folowers </h2>
        </div>
        <button   className='followbtn visited rounded-3xl h-8 w-24'>
          <h1>Follow</h1>
          
        </button>

        
      </div>

      <div className="balance flex justify-center items-center gap-2">
        
      </div>
    </div>
    </div>
    
  )
}

export default Profile