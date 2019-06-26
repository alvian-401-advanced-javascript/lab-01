'use strict';

const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(greet.sayHello('JOHN').toString());
    res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT || 3000, () => console.log('App up on Port', process.env.PORT || 3000));

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet.sayHello('JOHN'));
console.log(math.add([1,3,5])); // 4
console.log(math.subtract([1,3,5])); // -2
console.log(math.divide([1,3,5])); // -2
console.log(math.multiply([1,3,5])); // -2

