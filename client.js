const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully I'm connected!"); // code that does something when the connection is first established
    // conn.write("Move: up");
  });
  conn.write("Name: NYM");
  conn.on("data", (data) => {
    console.log(data); // code that does something when the connection is first established
  });

  // interpret incoming data a  s text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};