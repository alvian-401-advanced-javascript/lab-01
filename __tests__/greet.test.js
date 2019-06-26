'use strict';
const faker = require('faker');

const greet = require('../lib/greet.js');

describe('say hello function', () => {
    it('returns concatenation of hello + a string param', () => {
        let testString = 'AJ';
        let randomName = faker.name.findName().toString();
        expect(greet.sayHello(randomName)).toStrictEqual(`Hello, ${randomName}`);
    });
    it('returns null if param is not a string', () => {
        let notAstring = 12345;
        expect(greet.sayHello(notAstring)).toBeNull();
    });
    it('returns hello world', () => {
        let input = 'world';
        expect(greet.sayHello(input)).toStrictEqual('Hello, world');
    } )
});