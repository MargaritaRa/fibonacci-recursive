function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  // return last value in sequence + second to last value in sequence
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
  
  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(1));

  console.log("");

  console.log("Expecting: 6765");
  console.log(fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   const values = [0, 1];

//   for (let i = 0; i < n - 1; ++i) {
//     values.push(values[values.length - 1] + values[values.length - 2]);
//   }

//   return values[values.length - 1];
// }