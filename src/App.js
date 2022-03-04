import './styles/App.css';
import EquationThree from "./components/three_var_eqn";
import React from 'react';
import EquationOne from './components/one_var_eqn';

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
                document.body.removeChild(out);
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
                    <option value="method-3">Newton Raphson Method</option>
                </select>

                {clicked==="method-1" ? <EquationThree /> : null}
                {clicked==="method-2" || clicked === "method-3" ? <EquationOne /> : null}
                
            </div>
        );
    }
}

export default App;
