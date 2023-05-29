import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);
  // const num = 0;
  // setNum 앞에 정의한 num이라는 변수에 대한 set함수
  // setter와 같은 기능

  const increase = () => {
    setNum(num + 1);
    // function setNum(num) {
    //   num = num + 1;
    // }
  }

  const decrease = () => {
    setNum(num - 1);
  }

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  )
}

export default Counter;