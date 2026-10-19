const fibonacci = function(countArg) {
    let count
    if (typeof countArg !== 'number')
    {
        count = parseInt(countArg)
    } else {
        count = countArg
    }
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    let firstPriv = 1;
    let secPriv = 0;

    for (let i = 2; i<=count; i++)
    {
        let current = firstPriv+secPriv;
        secPriv = firstPriv;
        firstPriv = current;
    }
    return firstPriv;
};

// Do not edit below this line
module.exports = fibonacci;
