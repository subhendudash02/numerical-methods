import React, { Component } from 'react';
import "../styles/equations.css";

class Equations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a1: '', b1: '', c1: '', const1: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {a1, b1, c1, const1} = this.state;
        event.preventDefault();
        
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
        
                {/* <h2>Second Equation</h2>
                <input type="text" id="a2" /> x +
                <input type="text" id="b2" /> y + 
                <input type="text" id="c2" /> z = 
                <input type="text" id="const2" />
        
                <h2>Third Equation</h2>
                <input type="text" id="a3" /> x +
                <input type="text" id="b3" /> y + 
                <input type="text" id="c3" /> z = 
                <input type="text" id="const3" /> */}
                <button>Submit</button>
            </form>
        );
    }
}

export default Equations;
