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
        let panel = document.querySelector("#panel");
        let out = document.querySelector(".out");
        if (out) {
            panel.removeChild(out);
        }

        let dropdown = document.querySelector("#dropdown-method").value;

        if (dropdown === "method-2") {
            panel.appendChild(GeneralIterative(eq, round, initial, iterations));
        }
        else if(dropdown === "method-3") {
            panel.appendChild(NewtonRaphson(eq, round, initial, iterations));
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
            <div className='division'>
                <form id="equation_gim" onSubmit={this.handleSubmit}>
                    <h2>Equation</h2>
                    <input name="eq" type="text" id="eq" value={this.state.eq} onChange={this.handleChange} />

                    <br /><br />

                    <b>Round: </b>
                    <input name="round" type="text" value={this.state.round} onChange={this.handleChange}></input>

                    <b> Initial Value: </b>
                    <input name="initial" type="text" value={this.state.initial} onChange={this.handleChange}></input>

                    <br /><br />

                    <b> Iterations: </b>
                    <input name="iterations" type="text" value={this.state.iterations} onChange={this.handleChange}></input>

                    <br /><br />

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EquationOne;
