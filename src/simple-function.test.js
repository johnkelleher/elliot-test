const simpleFunction = require('./simple-function');

test('simpleFunction function', () => {
    simpleFunction.newGlobalValues(1,2);
    expect(simpleFunction.globalValue).toBe(1);
});