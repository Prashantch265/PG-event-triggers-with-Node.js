const app = require("./app");
const client = require("./lib/pg");

let port = process.env.PORT;

app.listen(port, () => console.log(`Server started at ${port}`));

client
  .connect()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

client
  .query("listen new_event")
  .then((res) => console.log(res.command))
  .catch((e) => console.error(e.stack));

client.on("notification", async (data) => {
  const payload = JSON.parse(data.payload);
  console.log(payload);
});
