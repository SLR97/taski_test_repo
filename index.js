const express = require("express");
const app = express();

const PORT = 3000;
app.get("/", function (request, response) {
  response.send("🙋<200d>♂️,Vanakkam da mapla chennai la erunthu.01 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));