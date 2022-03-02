import './styles/App.css';
import Equations from "./components/equations";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: ""
        };
    }
    render() {

        let {clicked} = this.state;

        return (
            <div className="App">
                <h1>Numerical Methods</h1>
                
                {/* Dropdowns */}
                <select name="methods" id="dropdown-method" onChange={(e) => {this.setState({clicked:e.target.value})}}>
                    <option value="method-1">Gauss-Seidel Method</option>
                    <option value="method-2">Simple Iterative Method</option>
                </select>

                {clicked==="method-1" ? <Equations /> : null}
                {clicked==="method-2" ? <div><p>Hello</p></div> : null}
            </div>
            
        );
    }
}

export default App;
