import React, {useState} from 'react';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={()=> {
          setVisible(!visible);
        }}> {visible? '숨기기':'보이기'}
      </button> 
        {visible && <Info /> }
        {/* JSX 안에는 중괄호를 이용해서 표현식을 포함할 수 있음. 그 안에 JavaScript의 논리연산자 &&을 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있음. */}
        {/* JS 안에서 true && expression은 항상 expression으로 평가되고, false && expression은 항상 false로 평가됨.
        따라서 && 뒤에 엘리먼트는 조건이 true일 때 출력됨. 조건이 false라면 무시함. */}
    </div>
  );
};

export default App;
