// Userlogin.jsx
import React from 'react';

const Userlogin = (props) => {
  const a = [13, 42, 23, 43];

  if (props.isLogin) {
    return (
      <>
        <h1>Welcome {props.userName}</h1>
        <div>
          {a.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </>
    );
  } else {
    return <h1>Please log in</h1>;
  }
};

export default Userlogin;