import React, { Component } from 'react';
import "../styles/equations.css";
import GaussSeidel from '../methods/GaussSeidel';

class Equations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // First equation
            a1: '', 
            b1: '', 
            c1: '', 
            const1: '',

            // Second equation
            a2: '', 
            b2: '', 
            c2: '', 
            const2: '',

            // Third equation
            a3: '', 
            b3: '', 
            c3: '', 
            const3: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {a1, b1, c1, const1, a2, b2, c2, const2, a3, b3, c3, const3} = this.state;
        let matrix = [[a1, b1, c1, const1], [a2, b2, c2, const2], [a3, b3, c3, const3]];
        event.preventDefault();
        document.body.appendChild(GaussSeidel(matrix));
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form id="equations" onSubmit={this.handleSubmit}>
                <h2>First Equation</h2>
                <input name="a1" type="text" id="a1" value={this.state.a1} onChange={this.handleChange} /> x +
                <input name="b1" type="text" id="b1" value={this.state.b1} onChange={this.handleChange} /> y + 
                <input name="c1" type="text" id="c1" value={this.state.c1} onChange={this.handleChange} /> z = 
                <input name="const1" type="text" id="const1" value={this.state.const1} onChange={this.handleChange} />
        
                <h2>Second Equation</h2>
                <input name="a2" type="text" id="a2" value={this.state.a2} onChange={this.handleChange} /> x +
                <input name="b2" type="text" id="b2" value={this.state.b2} onChange={this.handleChange} /> y + 
                <input name="c2" type="text" id="c2" value={this.state.c2} onChange={this.handleChange} /> z = 
                <input name="const2" type="text" id="const2" value={this.state.const2} onChange={this.handleChange} />

                <h2>Third Equation</h2>
                <input name="a3" type="text" id="a2" value={this.state.a3} onChange={this.handleChange} /> x +
                <input name="b3" type="text" id="b2" value={this.state.b3} onChange={this.handleChange} /> y + 
                <input name="c3" type="text" id="c2" value={this.state.c3} onChange={this.handleChange} /> z = 
                <input name="const3" type="text" id="const1" value={this.state.const3} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Equations;
