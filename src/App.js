import './styles/App.css';
import Equations from "./components/equations";

function App() {
    return (
        <div className="App">
            <h1>Numerical Methods</h1>
            
            {/* Dropdowns */}
            <select name="methods" id="dropdown-method">
                <option value="method-1">Gauss-Seidel Method</option>
                <option value="method-2">Simple Iterative Method</option>
            </select>

            <Equations></Equations>
        </div>
    );
}

export default App;
