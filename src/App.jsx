import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import './App.css'

function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0;
    }
  return ( 
    <>
      <TodoList/>
    </>
  )
}

export default App;