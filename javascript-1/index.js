const sum = (a) => {
    let currentSum = a;

    const f = (b) => {
        if (b !== undefined) { currentSum += b; }
        return f;
    };

    f.toString = () => currentSum;

    return f;
};