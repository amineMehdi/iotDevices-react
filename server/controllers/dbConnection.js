const mongoose = require("mongoose");

const dbHost = "localhost";
const dbPort = 27017;
const dbName = "iotBase";
const dbURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;

const dbConnection = mongoose.createConnection(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = dbConnection;

dbConnection.on("connected", () =>
  console.log(`dbConnection.js : connected to ${dbURI}`)
);
dbConnection.on("disconnected", () =>
  console.log(`dbConnection.js : disconnected from ${dbURI}`)
);
dbConnection.on("error", (err) =>
  console.log(`dbConnection.js : connection error ${err} `)
);

//
// "clean"  management of connection end
//
const shutdown = (msg, callback) => {
  dbConnection.close(() => {
    console.log(` Mongoose shutdown : ${msg}`);
    callback();
  });
};

// code pour gérer proprement le Ctrl+C sous windows et la réception de 'SIGINT'
// nécessite d'installer  le module readline :
//                           'npm install readline --save'
const readline = require("readline");
if (process.platform === "win32") {
  readline
    .createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    .on("SIGINT", function () {
      process.emit("SIGINT");
    });
}

// application killed (ctrl+c)
process.on("SIGINT", () => shutdown("application ends", () => process.exit(0)));
// process killed (POSIX)
process.on("SIGTERM", () =>
  shutdown("SIGTERM received", () => process.exit(0))
);
