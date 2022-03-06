# Numerical Methods

![languages](https://img.shields.io/github/languages/count/subhendudash02/numerical-methods?style=for-the-badge) ![html](https://img.shields.io/badge/-HTML-orange?style=for-the-badge)![CSS](https://img.shields.io/badge/-CSS-blue?style=for-the-badge)![JS](https://img.shields.io/badge/-JS-yellow?style=for-the-badge)

<br>

![library](https://img.shields.io/badge/Made%20with-React-blue?style=for-the-badge&logo=react)

<br>

[![website](https://img.shields.io/badge/Website-click%20here-black?style=for-the-badge)](https://numerical-methods.netlify.app/)

<br>

Finding the solutions of the mahematical equations in an iterative method is a cumbersome task. It takes a lot of time to compute the value repeatedly in hand and there is a high chance of getting wrong answers too. 

So, this website demonstrates different iterative numerical methods to solve a single equation as well as system of equations upto 100 iterations instantly.

<br>

# Table of Contents
 - [Getting Started](#getting-started)
 - [Repository Structure](#repository-structure)
 - [Different Methods Used](#different-methods-used)
 - [Libraries Used](#libraries-used)
 - [Contributing](#contributing)
 - [License](#license)

<br>

# Getting Started

1. Fork the repository.
2. Clone the repository.

``` bash
git clone git@github.com:<username>/numerical-methods.git  
```

3. Go to the directory.

``` bash
cd numerical-methods
```

4. Install npm libraries. It will take some time to download all the libraries.

``` bash
npm install
```

5. Run the website in local machine.

``` bash
npm start
```

<br>

# Repository Structure

The file structure is very similar to any other React file structure except `src` folder.

The `src` folder contains

```
src
├── components
    ├── <contains-input-components>
    ├── one_var_eqn.jsx
    ├── three_var_eqn.jsx
├── methods
    ├── <contains-all-iterative-methods>
    ├── GaussSeidel.jsx
    ├── GeneralIterative.jsx
    ├── NewtonRaphson.jsx
├── styles
    ├── <contains-stylesheet>
    ├── App.css
    ├── index.css
    ├── equations_gim.css
    ├── equations_gs.css
```

<br>

# Different Methods Used

Till now, three methods are added. Expand the name for the details.

<details>
<summary>Gauss-Seidel Method</summary>
<p>
In numerical linear algebra, the Gauss–Seidel method, also known as the Liebmann method or the method of successive displacement, is an iterative method used to solve a system of linear equations.
</p>
</details>

<details>
<summary>General-Iterative Method</summary>
<p>
"The General Iteration Method" also known as "The Fixed Point Iteration Method" , uses the definition of the function itself to find the root in a recursive way.

<b>Note: </b> First write the equation in the form of x=ϕ(x).
</p>
</details>

<details>
<summary>Newton-Raphson Method</summary>
<p>
In numerical analysis, Newton's method, also known as the Newton–Raphson method, named after Isaac Newton and Joseph Raphson, is a root-finding algorithm which produces successively better approximations to the roots of a real-valued function.
</p>
</details>

<br>

# Libraries Used

1. ReactJS is used for the front-end.
2. All the algorithms are present in `src>methods` folder, written in JS.
3. [math.js](https://mathjs.org/) is also used in different methods for rounding off values, differentiation, etc.
4. CSS for styling the pages.

<br>

# Contributing

New methods/bug fixes/UI fixes are always welcome.
Make a new issue with a proper heading and description. It will be easy to discuss further and make a PR for the same issue.

<br>

# License

[Licensed](https://github.com/subhendudash02/numerical-methods/blob/main/LICENSE) Under MIT License

Copyright (c) 2022 Subhendu Dash

<br>

![badge](https://img.shields.io/badge/Made%20with-%E2%99%A5-red?style=for-the-badge)
