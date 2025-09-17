function isNumber(num: unknown): boolean {
    if (typeof num === 'number') {
        return num - (num as number) === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};

function isOdd(value: unknown): boolean {
    const n = Math.abs(Number(value));
    if (!isNumber(n)) {
        throw new TypeError('expected a number');
    }
    if (!Number.isInteger(n)) {
        throw new Error('expected an integer');
    }
    if (!Number.isSafeInteger(n)) {
        throw new Error('value exceeds maximum safe integer');
    }
    return (n % 2) === 1;
};

export { isOdd, isNumber };