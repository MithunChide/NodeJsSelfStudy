// module wrapper function is same as exactly IIFE function 
//   if i write code 


  const name = "mithun";
  console.log(name);

//   it execute and gtive proper ans that is MITHUN 
// but behind the seen the code has IIFE function which 
// is known in node js is Module Wrappper Function 
// and it is written as 

// (function (exports,require,module,_filename,_dirname) {
//     const name = "mithun";
//   console.log(name);

// });

// but we are not write these type because it automatically execute the function 
// IIFE keeps everything is privat
console.log(_dirname);
console.log(_filename);

