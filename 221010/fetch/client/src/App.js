// fetch 기본제공
// axios 라이브러리 필요.

import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState(null); 

  const fetchData = () => {
    fetch('http://localhost:4000/api/todo')
      .then((response) => response.json())
      .then((data) => setTodoList(data)); 
  }; // 중복되는 부분을 함수로 따로 빼줬음.

  // 데이터를 띄우는 방법에 여러가지가 있겠지만 useState를 사용해서 띄워보자
  // 처음에 이렇게 null 값 넣어서 해도 되는건가?

  // 처음 컴포넌트 렌더링 될 때만 실행될 수 있게 useEffect사용. 
  // useState쓰면 계속 돌면서 update시켜서 console에 에러 많음
  // fetch가 리렌더링 될때마다 실행되도록 코드를 짰기 때문에 계속 렌더링 됐었음.
  useEffect(() => {
    fetchData()}, []); // 디텐던시 [] 넣으면 처음에만 실행됨.

  const onSubmitHandler = (e) => {
    e.preventDefault(); // submit이 실행하는 기본 동작 막기.
    const text = e.target.text.value;
    const done = e.target.done.checked; // value로 넣으면 체크된 값 알 수 없음. check박스니까 checked로 표시해주자.
    fetch('http://localhost:4000/api/todo', {
      method: 'POST', // 아무것도 안적으면 get요청이 됨.
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        text,
        done,
      }), // 데이터를 보내줄 때는 body에 문자열로 직렬화를 해서 보내줌.
    }).then(() => fetchData()); 
      // useEffect로 첫 렌더링 될때만 화면 불러와지게 했으므로 바로바로 업데이트하기 위한 처리 과정 추가.
      // 근데 코드가 중복됐기 때문에 나쁜 코드. 
      // 코드 따로 빼줬다..
  }; // 딱히 응답을 받아서 뭘 할건 아니기 때문에 요청만 보내고 끝내기.

  return (
    <div className="App">
      <h1>todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
        {/* 옵셔널체이닝으로 투두가 없을 때는 undefined를 만들어서 렌더링이 되지 않도록 하기 */}
        {todoList?.map((todo) => (
          <div key={todo.id} style={{ display : 'flex' }}> 
          {/* 보기가 안좋으니 display에 flex를 추가했음. */}
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
