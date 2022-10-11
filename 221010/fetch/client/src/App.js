// fetch 기본제공
// axios 라이브러리 필요.

import {useEffect, useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState(null); 
  // 데이터를 띄우는 방법에 여러가지가 있겠지만 useState를 사용해서 띄워보자

  // 처음 컴포넌트 렌더링 될 때만 실행될 수 있게 useEffect사용. 
  // useState쓰면 계속 돌면서 update시켜서 console에 에러 많음
  useEffect(() => {
    fetch('http://localhost:4000/api/todo')
    .then((response) => response.json())
    .then((data) => setTodoList(data)); 
  }, []) // 디텐던시 [] 넣으면 처음에만 실행됨.

  return (
    <div className="App">
      <h1>TODO List</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y':'N'}</div>
          {/* todo.done은 true,false 값이라 나오지 않으니 삼항 연산자로 표기해주자. */}
        </div>
      ))}
    </div>
  );
}

export default App;
