// Function midpoint
// EX
// midpoint(-1) returned 0
// midpoint(1, 10) returned 5.5
// midpoint(-1, undefined) returned 0
// midpoint(undefined, 10) returned 5
// midpoint(undefined, undefined) returned 0.5

module.exports = (lower = 0, upper = 1) => (lower + upper) / 2;
