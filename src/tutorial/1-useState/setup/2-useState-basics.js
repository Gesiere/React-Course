import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('helloworld'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    let issue = 107
    console.log(text);
    if (text === 'random title') {
      setText(issue);
    } else {
      setText("Random Title")
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>
};

export default UseStateBasics;
