import React from 'react'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-item'>
        <a href="#" className='master-card'><img src="src/assets/mastercard-line.png" alt="" /></a>
        <a href="#"><img src="src/assets/user.png" className='users' alt="" /></a>
        <hr className='line' />
        <a href="#"><img src="src/assets/browse.png" alt="" className='browser' /></a>
        <a href="#"><img src="src/assets/chats.png" className='chat' alt="" /></a>
        <a href="#"><img className='video-icon' src="src/assets/video call.png" alt="" /></a>
        <a href="#"><img className='music-icon' src="src/assets/music.png" alt="" /></a>
        <a href="#"><img className='more-icon' src="src/assets/more.png" alt="" /></a>
      </div>

      <div className='extras'>
      <a href="#"><img className='sett-icon' src="src/assets/setting.png" alt="" /></a>
      <a href="#"><img className='log-icon' src="src/assets/login.png" alt="" /></a>
      </div>

    </div>
  )
}

export default Menu