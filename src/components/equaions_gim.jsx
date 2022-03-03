import React from 'react';
import GeneralIterative from '../methods/GeneralIterative';
import "../styles/equations_gim.css";

class EquationsGIM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eq: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {eq} = this.state;
        event.preventDefault();
        let out = document.querySelector(".out");
        if (out) {
            document.body.removeChild(out);
        }
        document.body.appendChild(GeneralIterative(eq));
    }
    
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form id="equation_gim" onSubmit={this.handleSubmit}>
                <h2>Equation</h2>
                <input name="eq" type="text" id="eq" value={this.state.eq} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default EquationsGIM;
