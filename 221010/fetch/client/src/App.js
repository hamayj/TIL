// fetch 기본제공
// axios 라이브러리 필요.

function App() {
  fetch('http://localhost:4000/api/todo')
  .then((response) => response.json())
  .then((data) => console.log(data)); 
  
  return (
    <div className="App">
      <h1>todo List</h1>
    </div>
  );
}

export default App;
