const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.14", // IP address here,
    port: 50541, // PORT number here,
  });
  console.log("Thank you, connecting you now");
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  conn.on("connect", () => {
    console.log("Connected to server!");
  });

  conn.on("close", () => {
    console.log("GG, the server has closed");
  });

  return conn;
};

console.log("Connecting ...");
connect();
