import './styles/App.css';
import Equations from "./components/equations_gs";
import React from 'react';
import EquationsGIM from './components/equaions_gim';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: ""
        };
    }

    render() {

        let {clicked} = this.state;

        let changeComp = (e) => {
            let out = document.querySelector(".out");
            if (out) {
                document.removeChild(".out");
            }
            this.setState({
                clicked : e.target.value
            });
        };

        return (
            <div className="App">
                <h1>Numerical Methods</h1>
                
                {/* Dropdowns */}
                <select name="methods" id="dropdown-method" onChange={changeComp}>
                    <option defaultValue>NA</option>
                    <option value="method-1">Gauss-Seidel Method</option>
                    <option value="method-2">General Iterative Method</option>
                </select>

                {clicked==="method-1" ? <Equations /> : null}
                {clicked==="method-2" ? <EquationsGIM /> : null}
                
            </div>
        );
    }
}

export default App;
