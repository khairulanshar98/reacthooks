import * as React from "react";
import { Form } from 'react-bootstrap';
import { Todo } from '../store/todo.store';

interface TodoAddProps {
    todos: Todo[]
    setTodos
    addTodo
}

export const TodoAdd: React.FC<TodoAddProps> = (props) => {
    const [task, setTask] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    return (
        <div style={{ marginBottom: "40px" }}>
            <Form>
                <Form.Group controlId="NewTask">
                    <Form.Label>New Task</Form.Label>
                    <input
                        type='text'
                        value={task}
                        placeholder="Name"
                        onChange={e => setTask(e.target.value)}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group controlId="NewTask">
                    <Form.Label>Description</Form.Label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Description"
                        rows={3}
                    />
                </Form.Group>
            </Form>
            <button className="btn btn-primary"
                onClick={e => {
                    props.addTodo(task, description)
                    setTask('')
                    setDescription('')
                }}>Add</button>
        </div>
    )
}