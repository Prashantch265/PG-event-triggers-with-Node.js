const app = require("./app");
const client = require("./lib/pg");

let port = process.env.PORT;

app.listen(port, () => console.log(`Server started at ${port}`));

client.connect();