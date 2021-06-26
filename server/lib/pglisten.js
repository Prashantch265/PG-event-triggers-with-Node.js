const createSubscriber = require("pg-listen");

require("dotenv").config();

const subscriber = createSubscriber({
  connectionString: `postgres://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DB}`,
});

subscriber.notifications.on("new_event", (payload) => {
  // Payload as passed to subscriber.notify() (see below)
  console.log("Received notification in 'new_event':", payload);
});

subscriber.events.on("error", (error) => {
  console.error("Fatal database connection error:", error);
  process.exit(1);
});

process.on("exit", () => {
  subscriber.close();
});

const connect = async () => {
  await subscriber.connect();
  await subscriber.listenTo("new_event");
};

// const sendMsg = async () => {
//   await subscriber.notify("new_event", {
//     msg: "hello",
//   });
// };

module.exports = { connect };
