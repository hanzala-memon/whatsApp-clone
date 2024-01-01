import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import ChatList from './components/ChatList'
import Chat from './components/Chat'

function App() {

  return (
    <>
      <Navbar />
      <Menu />
      <ChatList />
      <Chat />
    </>
  )
}

export default App
