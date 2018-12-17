const collapsePloymer =(ploymerChars, removeChar) => {
    const stack = [];
    for (let i = 0; i < ploymerChars.length; i++) {
        const char = ploymerChars[i];
        if (char.toLowerCase() === removeChar.toLowerCase()) {
            continue;
        }
        const last = stack.pop();
        if (!last) {
            stack.push(char);
            continue;
        }
        if (last.toLowerCase() === char.toLowerCase() && last !== char) {
            continue;
        }
        stack.push(last);
        stack.push(char);
    }
    return stack;
}

const part2 = (data) => {
    const polymer = data.split("");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const collapsedPolymers = alphabet.map(letter =>
        collapsePloymer(polymer, letter)
    );
    const shortestCollapse = collapsedPolymers.reduce((longest, curr) =>
        longest.length < curr.length ? longest : curr
    );
    return shortestCollapse.length;
}

module.exports = part2;