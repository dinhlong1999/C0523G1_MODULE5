import {Component} from "react";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                id: 1,
                name: "Dinh Long",
                age: 24,
                address: "Da Nang"
            },
            {
                id: 2,
                name: "Ronaldo",
                age: 24,
                address: "Portugal"
            },
            {
                id: 3,
                name: "Messi",
                age: 24,
                address: "Argentina",
            },
            {
                id: 4,
                name: "Neymar",
                age: 25,
                address: "Brazil",
            }
        ]


    }

    render() {
        return (
            <div>
                <h1>List of student</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Students;