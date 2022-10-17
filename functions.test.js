const {add , greeting, returnTwo, multiply, divide, subtract} = require('./functions')


test('Does returnTwo return equal 2', () => {
    expect(returnTwo()).toEqual(2);
})

describe('Test greeting', () => {
    test('Does greeting return Hello, James', () => {
        expect(greeting('James')).toEqual('Hello, James.')
    })
    test('Does greeting return Hello, Jill.', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })
})


describe('Math Functions', () => {

    test('Does add 1,2 equal 3', () => {
        expect(add(1,2)).toBe(3)
    })
    test('Does add 5,9 equal 14', () => {
        expect(add(5,9)).toBe(14)
    })



    test('Does multiply 1,2 equal 2', () => {
        expect(multiply(1,2)).toBe(2)
    })
    test('Does multiply 5,9 equal 45', () => {
        expect(multiply(5,9)).toBe(45)
    })


    test('Does divide 20,10 equal 2', () => {
        expect(divide(20,10)).toEqual(2)
    })
    test('Does multiply 5,9 equal 45', () => {
        expect(divide(10,5)).toEqual(2)
    })



    test('Does subtract 20,10 equal 2', () => {
        expect(subtract(20,10)).toEqual(10)
    })
    test('Does subtract 5,9 equal 45', () => {
        expect(subtract(10,5)).toEqual(5)
    })

})