const app = require("./app");

//Connect to DB

//START THE SERVER
const port = 8080 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
