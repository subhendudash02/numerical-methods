import { derivative, round, evaluate, parse } from 'mathjs';

function NewtonRaphson(equation, r, ini, it) {
    if (it > 100) {
        it = 100;
    }
    ini = parseInt(ini);

    let output = document.createElement('p');
    output.className = "out";

    let eq = parse(equation).toString();

    let subs = {
        x: ini
    };

    output.innerHTML += `<h2>Output</h2>x<sub>0</sub> = ${round(subs.x, r)}<br /><br />`;

    for (let i = 1; i <= it; i++) {
        let num = evaluate(eq, subs);
        let deno = derivative(eq, "x").evaluate(subs);
        subs.x = subs.x - (num / deno);
        output.innerHTML += `Iteration - ${i}: <br />x<sub>${i}</sub> = ${round(subs.x, r)}<br /><br />`
    }

    return output;
}

export default NewtonRaphson;