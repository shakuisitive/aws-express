let express = require("express");
let app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    messageFromShakir: "Some dummy message from Shakir",
  });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
