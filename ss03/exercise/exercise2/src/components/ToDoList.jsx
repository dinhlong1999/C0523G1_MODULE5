import {Component} from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        };
    };

    handleChange(value) {
        this.setState({
            item: value
        });
    };

    handleAddItem() {
        if (!this.state.list.includes(this.state.item)) {
            this.setState((prev) => {
                    return {
                        list: [...prev.list, prev.item],

                    }
                }
            )
        }
    };


    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input type="text" onChange={(event) => this.handleChange(event.target.value)}/>
                <button type="button" onClick={() => this.handleAddItem()}>Add</button>
                <table>
                    <thead>
                    <tr>
                        <th>Mục cần làm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };
}
export default ToDoList;