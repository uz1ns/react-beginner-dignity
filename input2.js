import React, { useState } from 'react';

const Input2 = () => {
  //여러 개의 데이터를 한 번에 받아서 처리하는 구조
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // 리액트 상태관리 X 
    // inputs[id] = value;
    // js object는 heap 메모리에 관리가 되기 때문에 
    // 참조 주소만 갖고 있다.
    // 변경되었다는 것을 react가 인지할 수 있는 방법으로 해야 한다. 
    setInputs({
      ...inputs,
      // 깊은 복사, 분해해서 새로운 object를 만든다.
      [id]: value
      // 기존에 값이 있던 것들은 최신의 것으로 update 된다.
    })
  }

  return (
    <div>
      <div>
        <label>이름</label>
        <input id="name" type="text" value={inputs.name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input id="email" type="email" value={inputs.email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input id="tel" type="tel" value={inputs.tel} onChange={onChange} />
      </div>
      <p>이름: {name} </p>
      <p>이메일: {email} </p>
      <p>전화번호: {tel} </p>
    </div>
  )
}

export default Input2;