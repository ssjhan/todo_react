import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { List } from '@mui/material'; 

//화면에 랜더링할 할 일 데이터
const items = [
  {
      id: 1,
      title: '안녕',
      done: true
  },
  {
      id: 2,
      title: 'hello world2',
      done: false
  },
  {
    id: 3,
    title: '동영상 강의보기',
    done: false
  }
];

const todoItems = items.map( item => <Todo key={item.id} item={item} /> );

const App = () => {
  return (
    <div className="App">
      <List>
        {todoItems}
      </List>
    </div>
  );
}

export default App;
