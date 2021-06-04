const path = require('path');

console.log(path.dirname('/home/mithun/NodeJsREPL/PATH_MODULE/path.js'));

console.log(path.extname('/home/mithun/NodeJsREPL/PATH_MODULE/path.js'));

console.log(path.basename('/home/mithun/NodeJsREPL/PATH_MODULE/path.js'));

console.log(path.parse('/home/mithun/NodeJsREPL/PATH_MODULE/path.js'));

const mypath = path.parse(('/home/mithun/NodeJsREPL/PATH_MODULE/path.js'))
console.log(mypath.name);
console.log(mypath.root);
