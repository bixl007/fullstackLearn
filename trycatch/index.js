function charLength(string) {
  return string.length;
}

try {
  console.log("Hello World");
  const a = charLength("hello");
  console.log(`The length of the string is ${a}`);
} catch (err) {
  console.error(`Error: ${err}`);
}
