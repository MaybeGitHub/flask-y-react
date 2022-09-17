import React from 'react';
import axios from 'axios';

export default class HelloWorld extends React.Component {

    state = {
        hello_world: "Holi"
    }

    componentDidMount() {

        axios.get("http://127.0.0.1:5000/hello")
            .then(response => {
                const new_state = { 
                    hello_world: response.data.message
                }
                this.setState(new_state);
            })
            .catch(error => console.log(error.response.data))
    }

    render() {
        return (
            <div style={{ "backgroundColor": "blue", "width": "100vw", "height": "100vh"}}>
                { this.state.hello_world }
            </div>
        )
    }
}