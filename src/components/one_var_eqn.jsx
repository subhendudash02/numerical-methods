import React from 'react';
import GeneralIterative from '../methods/GeneralIterative';
import NewtonRaphson from '../methods/NewtonRaphson';
import "../styles/equations_gim.css";

class EquationOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eq: '',
            round: '',
            initial: '',
            iterations: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {eq, round, initial, iterations} = this.state;
        event.preventDefault();
        let out = document.querySelector(".out");
        if (out) {
            document.body.removeChild(out);
        }

        let dropdown = document.querySelector("#dropdown-method").value;

        if (dropdown === "method-2") {
            document.body.appendChild(GeneralIterative(eq, round, initial, iterations));
        }
        else if(dropdown === "method-3") {
            document.body.appendChild(NewtonRaphson(eq, round, initial, iterations));
        }
        
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

                <h2>Round</h2>
                <input name="round" type="text" value={this.state.round} onChange={this.handleChange}></input>

                <h2>Initial Value</h2>
                <input name="initial" type="text" value={this.state.initial} onChange={this.handleChange}></input>

                <h2>Iterations</h2>
                <input name="iterations" type="text" value={this.state.iterations} onChange={this.handleChange}></input>

                <button>Submit</button>
            </form>
        );
    }
}

export default EquationOne;
