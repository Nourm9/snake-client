const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let handleUserInput = (key) => {
  process.stdout.write(" ");
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "z") {
    connection.write("Say: nom, nom, nom");
  }
  if (key === "x") {
    connection.write("Say: Hey!");
  }
  if (key === "c") {
    connection.write("Say: Bye!");
  }
  if (key === "v") {
    connection.write("Say: ");
  }
  if (key === "b") {
    connection.write("Say: HHhIIiiissSSSSsssssSSSS!");
  }
};

module.exports = { setupInput };
