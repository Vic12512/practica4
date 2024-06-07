// holaMundo.test.js
const HolaMundo = require('./HolaMundo');

test('returns "Hola Mundo"', () => {
    expect(HolaMundo()).toBe("Hola Mundo");
});