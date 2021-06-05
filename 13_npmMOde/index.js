const chalk = require('chalk');
var validator = require('validator');
 
// console.log(chalk.blue.underline.inverse("hello World"));

const res = validator.isEmail("mithunchide3@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

