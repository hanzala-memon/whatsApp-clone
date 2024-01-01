import React from "react";

function Chat() {
  return (
    <div className="userChat-container">
      <div className="userChat-header">
        <a href="#">
          <img src="src/assets/userChat.png" className="userChat-img" alt="" />
        </a>
        <h3 className="userChat-name">Travis Barker</h3>
        <p className="userChat-status">Online</p>
        <a href="#">
          <img
            src="src/assets/video call.png"
            className="videoChat-icon"
            alt=""
          />
        </a>
        <a href="#">
          <img src="src/assets/userInfo.png" className="userInfo-icon" alt="" />
        </a>
      </div>

      <div className="chat-area">

        <a href="#"><img src="src/assets/chat img.png" className="msg-img" /></a>
        <a href="#" className="msg-link"><p>https://dribbble.com/shots/17742253-ui-kit-designjam</p></a>
        
        <span className="msg-data">
        <p>See you at office tomorrow!</p>
        <label>15:42</label>
        </span>

        <span className="msg-data thirdMsg">
          <p>Thank you for work, see you!</p>
          <label className="msg-time">12:35</label>
          <img src="src/assets/chat1/tick.png" />
        </span>

        <div className="new-msgsss">
          <div className="left-line"></div>
          <span className="today">Today</span>
          <div className="right-line"></div>
        </div>

        <span className="msg-data fourth-msg">
        <p>Hello! Have you seen my backpack anywhere in office?</p>
        <label>15:42</label>
        </span>

        <span className="msg-data fifthMsg">
          <p>Hi, yes, David have found it, ask our concierge 👀</p>
          <label className="msg-time">12:35</label>
          <img src="src/assets/chat1/tick.png" />
        </span>


    {/* msg input */}
        <div className="chat-input-area">
          <a href="#">
            <img src="src/assets/pin icon.png" className="pin-icon" />
          </a>
          <div className="input-box">
            <input type="text" placeholder="Type your message here.." />
          </div>
          <p className="send-msg">Send message</p>
          {/* when its mobile view */}
          <p className="mobile-send-msg">Send</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
