const app = require("./app.js");
const { connect } = require("./lib/pglisten");

let port = process.env.PORT;

app.listen(port, () => console.log(`Server Started on ${port}`));

connect()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
