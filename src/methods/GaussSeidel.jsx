import {round} from 'mathjs';

function GaussSeidel(array, r) {
    // matrix = [[a1, b1, c1, const1], [a2, b2, c2, const2], [a3, b3, c3, const3]]
    var output = document.createElement('p');
    output.className = "out";

    r = parseInt(r);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            array[i][j] = parseInt(array[i][j]);
        }
    }

    let x = (y1, z1) => {return ((array[0][3] - (array[0][1] * y1) - (array[0][2] * z1)) / array[0][0])};
    let y = (x1, z1) => {return ((array[1][3] - (array[1][0] * x1) - (array[1][2] * z1)) / array[1][1])};
    let z = (x1, y1) => {return ((array[2][3] - (array[2][0] * x1) - (array[2][1] * y1)) / array[2][2])};

    let x_up = x(0, 0);
    let y_up = y(x_up, 0);
    let z_up = z(x_up, y_up);

    output.innerHTML += `<h2>Output</h2><br />Iteration - 1: <br />x = ${round(x_up, r)}<br />
                                y = ${round(y_up, r)}<br />
                                z = ${round(z_up, r)}<br /><br />`;
    
    for (let i = 2; i <= 5; i++) {
            x_up = x(y_up, z_up);
            y_up = y(x_up, z_up);
            z_up = z(x_up, y_up);

            output.innerHTML += `Iteration - ${i}: <br />x = ${round(x_up, r)}<br />
                            y = ${round(y_up, r)}<br />
                            z = ${round(z_up, r)}<br /><br />`;
    }

    return output;

}

export default GaussSeidel; 
