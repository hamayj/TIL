const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json()); // for parsing application / json
app.use(express.urlencoded({extended: true})); // for parsing

app.use(cors()); // ()쳐주면 어떤 오리진이든 데이터 꺼내갈 수 있다고 하는 것.

let id = 2;

const todoList = [{
    id: 1,
    text: '할일 1',
    done: false,
}];


app.get('/api/todo', (req, res) => {
    res.json(todoList);
});

app.post('/api/todo', (req, res) => {
    const {text, done} = req.body; // 이렇게 body를 가져다 쓰려면 body-parser가 필요함.
    // 클라이언트에서 바디로 데이터를 보내면 꺼내쓰기 좋게 해주는 parser
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('success');
});

app.listen(4000, ()=> {
    console.log('server start!');
}) // 콜백함수 넣어서 서버 잘 실행되는지 check함.

