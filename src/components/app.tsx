import * as React from "react";
import { Todo } from '../store/todo.store';
const uuidv4 = require('uuid/v4');
import { TodoAdd } from './todo.add'
import { TodoList } from './todo.list'

interface AppProps { compiler: string; framework: string; store: string; }
export const App: React.FC<AppProps> = (props) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = (task: string, description: string): void => {
        const todos_: Todo[] = [...todos, { task: task, isComplete: false, id: uuidv4(), description: description, createdAt: new Date().getTime(), completedAt: 0 }];
        setTodos(todos_);
    }
    const completTask = (completedTodo: Todo): void => {
        const todos_: Todo[] = [...todos]
        const index = todos_.findIndex(todo => todo.id === completedTodo.id);
        todos_[index].isComplete = true;
        todos_[index].completedAt = new Date().getTime();
        setTodos(todos_);
    }

    return (
        <div className="container">
            <h1 className="title">Simple Task List with {props.compiler}, {props.framework} and {props.store}! <a className="btn btn-primary" target="_blank" href="https://github.com/khairulanshar98/typescript_tutorial">source</a></h1>
            <div className="col-sm-4">
                <TodoAdd todos={todos} setTodos={setTodos} addTodo={addTodo} />
            </div>
            <div className="col-sm-8">
                <TodoList todos={todos} completTask={completTask} />
            </div>
        </div>
    )
}