import { evaluate, parse, round } from 'mathjs';

function GeneralIterative(equation, r, ini, it) {
    ini = parseInt(ini);
    let subs = {
        x: ini
    };
    it = parseInt(it);
    if (it > 100) {
        it = 100;
    }
    r = parseInt(r);
    let eq = parse(equation).toString();
    let output = document.createElement('p');
    output.className = "out";

    output.innerHTML += `<h2>Output</h2>x0 = ${round(subs.x, r)}<br />`;

    for (let i = 1; i <= it; i++) {
        subs.x = evaluate(eq, subs);
        output.innerHTML += `Iteration - ${i}: <br />x${i} = ${round(subs.x, r)}<br />`
    }

    return output;
}

export default GeneralIterative;