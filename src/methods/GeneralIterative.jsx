import { evaluate, parse } from 'mathjs';

function GeneralIterative(equation) {
    let subs = {
        x: 0.75
    };
    let eq = parse(equation).toString();
    let output = document.createElement('p');
    output.className = "out";

    output.innerHTML += `<h2>Output</h2>x0 = ${subs.x}<br />`;

    for (let i = 1; i <= 5; i++) {
        subs.x = evaluate(eq, subs);
        output.innerHTML += `Iteration - ${i}: <br />x${i} = ${subs.x}<br />`
    }

    return output;
}

export default GeneralIterative;