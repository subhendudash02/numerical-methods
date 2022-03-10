import './styles/App.css';
import './styles/header.css';
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
            let panel = document.querySelector("#panel");
            let out = panel.querySelector(".out");
            if (out) {
                panel.removeChild(out);
            }
            this.setState({
                clicked : e.target.value
            });
        };

        return (
            <div className="App">

                {/* NavBar */}
                <header className="header">
                    <nav className="navbar">
                        <a href="https://numerical-methods.netlify.app/" className="nav-logo">Numerical Methods</a>
                        <ul className="nav-menu">
                            <li className="nav-item"><a href="https://github.com/subhendudash02/numerical-methods" target="_" className="nav-link">GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li>
                        </ul>
                    </nav>
                </header>
                
                {/* Dropdowns */}
                <div className="top-part">
                    <h1>Numerical Methods</h1>
                    <p>Solving all iterative methods in one place!</p>
                    <select name="methods" id="dropdown-method" onChange={changeComp}>
                        <option defaultValue>NA</option>
                        <option value="method-1">Gauss-Seidel Method</option>
                        <option value="method-2">General Iterative Method</option>
                        <option value="method-3">Newton Raphson Method</option>
                    </select>
                </div>

                <div id="panel">
                    {clicked==="method-1" ? <EquationThree /> : null}
                    {clicked==="method-2" || clicked === "method-3" ? <EquationOne /> : null}
                </div>
                
            </div>
        );
    }
}

export default App;
