const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: "50541", // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully I'm connected!"); // code that does something when the connection is first established
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