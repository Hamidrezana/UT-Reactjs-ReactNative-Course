import React from 'react';
import './App.css';
import TodoItem from './TodoItem';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            todo: ''
        }
    }
    addTodo = () => {
        this.setState(
            (prevState, prevProps) => {
                return {
                    todos: [
                        ...prevState.todos,
                        {
                            title: prevState.todo,
                            isDone: false
                        }
                    ],
                    todo: ''
                }
            }
        )
    }
    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }
    delete = (idx) => {
        var array = [...this.state.todos]
        array.splice(idx, 1)
        this.setState({
            todos: array
        })
    }
    handleChangeChk = (idx) => {
        var array = [...this.state.todos]
        array[idx].isDone = !array[idx].isDone
        this.setState({
            todos: array
        })
    }
    render() {
        return (
            <div className="App">
                {
                    this.state.todos.map((todo, idx) => 
                        <TodoItem
                            key={idx}
                            todo={todo}
                            delete={() => this.delete(idx)}
                            handleChangeChk={() => this.handleChangeChk(idx)}
                        />
                    )
                }
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.todo}
                />
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}

export default App;
