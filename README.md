# PossibleWorks_Solution_of_Polynomial_Problem
PossibleWorks Placement Drive Assessment Solution

This project implements **Shamir's Secret Sharing** using the **Lagrange Interpolation** method to compute the constant term (`c`) of a polynomial, given a set of roots. The roots are encoded in different bases and are provided in a JSON format.

## Problem Overview

Given a set of `n` roots of a polynomial and the minimum number of roots required (`k`), the task is to compute the constant term (`c`) of the polynomial. The polynomial is represented as:

f(x) = a_m * x^m + a_(m-1) * x^(m-1) + ... + a_1 * x + c

Where:
- `m` is the degree of the polynomial (`m = k - 1`).
- The roots are provided in JSON format with `base` and `value` encoded in different numeral systems.

The **Lagrange Interpolation** method is used to find the constant term (`c`) of the polynomial.

## Folder Structure

The folder structure for the project is organized as follows:

shamir-secret-sharing/
│
├── input/
│   ├── test-case-1.json
│   ├── test-case-2.json
│
├── output/
│   ├── result-1.txt
│   ├── result-2.txt
│
├── lagrangeInterpolation.js
└── package.json



### Description of Files:
- **`input/`**: Contains input test case JSON files (`test-case-1.json`, `test-case-2.json`).
- **`output/`**: Contains the result files (`result-1.txt`, `result-2.txt`) that will store the computed constant term (`c`).
- **`lagrangeInterpolation.js`**: The script that implements the Lagrange interpolation to compute the constant term from the given test case roots.
- **`package.json`**: Contains metadata for the Node.js project.

###After running the script, the computed constant terms will be saved in the output/ folder.

For example:

result-1.txt
result-2.txt
These files will contain the result of the constant term for each test case
