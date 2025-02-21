const fs = require('fs');
const path = require('path');

// Function to convert a value from a given base to a decimal
function decodeBaseValue(value, base) {
  return parseInt(value, base);
}

// Lagrange Interpolation to find the polynomial's constant term c
function lagrangeInterpolation(roots) {
  const k = roots.length;
  let secret = 0;

  // Calculate P(0) using Lagrange interpolation
  for (let i = 0; i < k; i++) {
    let xi = roots[i].x;
    let yi = roots[i].y;
    let term = yi;

    for (let j = 0; j < k; j++) {
      if (i !== j) {
        let xj = roots[j].x;
        term *= xj / (xj - xi); // Lagrange basis polynomial
      }
    }

    secret += term;
  }

  return Math.round(secret);
}

// Function to process the test case and generate the secret
function processTestCase(testCaseFile, outputFile) {
  fs.readFile(testCaseFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Parse the JSON data
    const json = JSON.parse(data);

    // Read the roots from the input and decode the values
    const roots = [];
    
    // Loop over the actual keys like "1", "2", "3", ..., n
    for (let i = 1; i <= json.keys.n; i++) {
      const key = i.toString(); // Convert index to string (like "1", "2", "3")
      if (json[key]) {
        const base = parseInt(json[key].base);
        const value = json[key].value;
        const y = decodeBaseValue(value, base);
        const x = i;

        // Push the root (x, y) pair
        roots.push({ x, y });
      }
    }

    // Perform Lagrange Interpolation to find the constant term c
    const secret = lagrangeInterpolation(roots);

    // Write the result to the output file
    fs.writeFile(outputFile, `The constant term (c) is: ${secret}\n`, (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log(`Result for ${testCaseFile} saved in ${outputFile}`);
    });
  });
}

// Process both test cases
processTestCase(path.join(__dirname, 'input', 'test-case-1.json'), path.join(__dirname, 'output', 'result-1.txt'));
processTestCase(path.join(__dirname, 'input', 'test-case-2.json'), path.join(__dirname, 'output', 'result-2.txt'));
