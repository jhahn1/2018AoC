var _ = require("lodash");

const peek = stack => stack[stack.length - 1]

const alchemicalReduction = input => {
    const stack = []

    input.split('').forEach(char => {
        // XOR of A and a, B and b, etc is 32
        if (!stack.length || (peek(stack).charCodeAt() ^ char.charCodeAt()) !== 32) {
            stack.push(char)
        } else {
            stack.pop()
        }
    })

    return stack.join('')
}

module.exports = alchemicalReduction;