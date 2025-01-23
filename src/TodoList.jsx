import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodos, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodos, id: uuidv4(), isDone: false }];
        });
        setNewTodos("");
    };

    let updateTodoValue = (event) => {
        setNewTodos(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let taskDoneAll = () => {
        setTodos((prevTodos) => (prevTodos.map((todos) => {
            return {
                ...todos,
                isDone: true,
            };
        })
        ));
    };


    let taskDone = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todos) => {
            if (todos.id == id) {
                return {
                    ...todos,
                    isDone: true,
                };
            } else {
                return todos;
            }
        })
        ));
    };
    return (
        <div>
            <input placeholder="add a task" value={newTodos} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Tasks</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todos.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                                {todo.task}
                            </span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => taskDone(todo.id)}>Mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={taskDoneAll}>Mark As Done All Tasks</button>
        </div>
    );
}