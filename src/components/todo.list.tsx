import * as React from "react";
import { Row, Form } from 'react-bootstrap';
import { Todo } from '../store/todo.store';
import { TodoListItem } from './todo.list.item';
interface TodoAddProps {
    todos: Todo[]
    completTask
}
export const TodoList: React.FC<TodoAddProps> = (props) => {
    const [filter, setFilter] = React.useState<string>('');
    const [filtered, setFiltered] = React.useState<Todo[]>(props.todos);

    React.useEffect(() => {
        if (!filter) {
            setFiltered(props.todos)
        }
    });

    const filterTask = (text_: string): void => {
        if (text_.length) {
            const todos_: Todo[] = props.todos.filter((todo) => todo.task.toLowerCase().indexOf(text_.toLowerCase()) >= 0 || todo.description.toLowerCase().indexOf(text_.toLowerCase()) >= 0)
            setFiltered(todos_)
        } else {
            setFiltered(props.todos)
        }
    }

    return (
        <div>
            {(filtered.length > 1 || filter) &&
                <Row style={{ padding: "20px" }}>
                    <Form.Row>
                        <Form.Group controlId="filter">
                            <input
                                type='text'
                                value={filter}
                                placeholder="Search"
                                onChange={(e) => {
                                    setFilter(e.target.value)
                                    filterTask(e.target.value)
                                }}
                                required
                                className="form-control"
                            />
                        </Form.Group>
                    </Form.Row>
                </Row>}
            {filtered.map((todo, idx) => <TodoListItem key={idx} todo={todo} completTask={props.completTask} />)}
        </div>
    )
}