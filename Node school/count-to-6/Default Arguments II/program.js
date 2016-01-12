// Function makeImportant:
// EX:
// makeImportant("JavaScript") returned JavaScript!!!!!!!!!!
// makeImportant("Dart", 0) returned Dart
// makeImportant("ES6", 10) returned ES6!!!!!!!!!!
// makeImportant("ES7??") returned ES7??!!!!!

module.exports = (s, count = s.length) => s + "!".repeat(count);
