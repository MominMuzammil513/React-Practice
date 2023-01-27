

const sum = (a, b) => {
    let c = a + b;
    return c;
}
const sub = (a, b) => {
    let c = a - b;
    return c;
}
const multi = (a, b) => {
    let c = a * b;
    return c;
}
const div = (a, b) => {
    let c = a / b;
    c = c.toFixed(2);
    return c;
}
export { sum, sub, multi, div }