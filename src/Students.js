import React, {Component} from 'react'

class Students extends Component{
    constructor(){
        super();

        this.state={
            students:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8000/api/students')
        .then((response)=>response.json())
        .then((students)=>{
            this.setState({
                students
            })
        })
    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <ul>
                    {
                        this.state.students.map((student)=>{
                            return <li key={student.id}>{student.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Students