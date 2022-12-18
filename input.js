const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);
const handleUserInput = function () {
  // your code here
  process.stdin.write(" ");
};

module.export = { setupInput };