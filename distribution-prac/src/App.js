import axios from 'axios';
import React, { useState, useCallback } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');

  const onChangeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const submitText = async () => {
    await axios.post('http://ec2-15-164-171-108.ap-northeast-2.compute.amazonaws.com/test', {
      text: text
    }, {
      'Content-Type': 'application/json'
    })
    .then((res) => {
      console.log('res: ', res);
      // console.log('api: ', api);
    })
  }

  return (
    <div className="App">
      <input type='text' placeholder='입력' value={text} onChange={onChangeText} />
      <button onClick={submitText}>전송</button>
      <button>아무 의미 없다</button>
    </div>
  );
}

export default App;
