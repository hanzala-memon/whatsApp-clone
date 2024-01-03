import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

function ChatList() {
  return (
    <div className='chatList-container'>
      <div className="content">
        <h2 className='heading'>Messages</h2>

        <div className='input-area'>
          <a href=""><AiOutlineSearch className='searchIcon'/></a>
          <input type="text" placeholder='Search' className='input-box' />
        </div>

        <p className='sort'>
          Sort by &nbsp;&nbsp;
          <a href="#" className='new'>
            <span>
              Newest 
            </span> &nbsp;
            <MdKeyboardArrowDown  className='arrow'/>
          </a>
        </p>
      </div>


    {/* <div className='chats-contain'> */}
    <div className='chats-container'>
      {/* chat 1 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/chat1/user.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a>
        <h3 className='username'>John Doe</h3>
        <p className='user-message'>How are you doing</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'>16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>


      {/* chat 2 */}
      <div className='chats-header'
      style={{background: '#EEE', borderRadius: '8px'}}>
        <a href="#"><img src="public/images/user2.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username'
        style={{marginLeft: '16px'}}
        >Travis Barker</h3>
        {/* <p className='user-message'>How are you doing</p> */}
        {/* this will appere when user typing */}
        <p className='typing-message'>...is typing</p>
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'
        style={{marginLeft: '10.4rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        {/* <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn' /></a> */}
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      {/* chat 3 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user3.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' style={{marginLeft: '14px'}}>Kate Rose</h3>
        <p className='user-message' style={{marginLeft: '-4.7rem'}}>you: See you tomorrow!</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'
        style={{marginLeft: '5.3rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        {/* <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn' /></a> */}
        {/* when user doesn't seen msg this will appere */}
        <a href="#">
          {/* <img src="public/images/singleTick.png" className='single-tick-btn' /> */}

          <svg xmlns="http://www.w3.org/2000/svg" 
          className='single-tick-btn' 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
          // style={{marginLeft: '12.5rem'}}
          >
          <path d="M5 7.586L9.596 2.9895L10.3035 3.6965L5 9L1.818 5.818L2.525 5.111L5 7.586Z" fill="#676767"/>
          </svg>
          </a>
      </div>

      {/* chat 4 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user4.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' 
        style={{marginLeft: '12px', width: '6rem'}}
        >Robert Parker</h3>
        {/* <p className='user-message'>How are you doing</p> */}
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        <p className='new-message'>Awesome!</p>
        <span className='time'
        style={{marginLeft: '11.5rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        <div className='msgs-count'><span>3</span></div>
        {/* <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn' /></a> */}
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      {/* chat 5 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user5.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' style={{marginLeft: '14px'}}>Rick Owens</h3>
        <p className='user-message' style={{marginLeft: '-7.3rem'}}>Good idea 🤩</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'
        style={{marginLeft: '7.3rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" 
        className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      {/* chat 6 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user6.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' style={{marginLeft: '12px', width: '6rem'}}>George Orwell</h3>
        <p className='user-message' style={{marginLeft: '-7.1rem'}}>you: Literally 1984 🤨</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'
        style={{marginLeft: '5.8rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" 
        className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      {/* chat 7 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user7.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' style={{marginLeft: '14px'}}>Franz Kafka</h3>
        <p className='user-message' 
        style={{marginLeft: '-5.7rem'}}
        >Are you interested for..</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <span className='time'
        style={{marginLeft: '5.7rem'}}
        >16:45</span>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      {/* chat 8 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user8.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username' style={{marginLeft: '11px', width: '25%'}}>Tom Hardy</h3>
        <p className='user-message userEight' 
        style={{marginLeft: '-6.6rem'}}
        >Smells like design..</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <div className='time'
        style={{marginLeft: '6.2rem'}}
        ><span>16:45</span></div>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>


       {/* chat 9 */}
       <div className='chats-header'>
        <a href="#"><img src="public/images/user9.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username nineUserName' style={{marginLeft: '-3.3rem', width: '80%'}}>Vivienne Westwood</h3>
        <p className='user-message userNine' 
        style={{marginLeft: '-14.1rem'}}
        >Smells like design..</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <div className='time'
        style={{marginLeft: '6.1rem'}}
        ><span>16:45</span></div>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>


       {/* chat 10 */}
       <div className='chats-header'>
        <a href="#"><img src="public/images/user10.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username tenthUserName' style={{marginLeft: '18px'}}>Anthony Paul</h3>
        <p className='user-message tenthUser' 
        style={{marginLeft: '-6.4rem'}}
        >Check out my page 🤩</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <div className='time tenthUserTime'
        style={{marginLeft: '5.6rem'}}
        ><span>16:45</span></div>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn tenthUserTick'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>


      {/* chat 11 */}
      <div className='chats-header'>
        <a href="#"><img src="public/images/user11.png" className='userface' /></a>
        <a href="#"><img src="public/images/chat1/online.png" className='online-btn' /></a>
        {/* <a href="#"><img src="public/images/chat1/pin.png" className='pin-btn' /></a> */}
        <h3 className='username elevenUserName' style={{marginLeft: '18px'}}>Stan Smith</h3>
        <p className='user-message elevenMsg' 
        style={{marginLeft: '-5.2rem'}}
        >Want to see this kicks rn</p>
        {/* this will appere when user typing */}
        {/* <p className='typing-message'>...is typing</p> */}
        {/* if new msg come this will appere */}
        {/* <p className='new-message'>Awesome!</p> */}
        <div className='time'
        style={{marginLeft: '5.6rem'}}
        ><span>16:45</span></div>
        {/* if there is any unread msg this will appere */}
        {/* <div className='msgs-count'><span>3</span></div> */}
        <a href="#"><img src="public/images/chat1/tick.png" className='tick-btn elevenTick'
        style={{marginLeft: '-13px'}}
        /></a>
        {/* when user doesn't seen msg this will appere */}
        {/* <a href="#"><img src="public/images/singleTick.png" className='single-tick-btn' /></a> */}
      </div>

      </div>



    </div>
  )
}

export default ChatList