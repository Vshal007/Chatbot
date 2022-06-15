import React from "react";
import './App.css';
import './chatbot.css';
import Chatbot from 'react-chatbot-kit';

import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import Config from './chatbot/config';

function App() {
  return (
    <div className="App">
      <div style={{ maxwidth: "300px" }}>

        <Chatbot 
        config={Config} 
        messageParser={MessageParser} 
        actionProvider={ActionProvider}
        />

      </div>

    </div>
  );
}

export default App;
