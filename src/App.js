import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='1c5412ab-8b69-441b-b8a5-efa9de6ecde3'
      userName='tla111'
      userSecret='123123'
    />
  );
};

export default App;
