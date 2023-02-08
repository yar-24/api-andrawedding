const express = require("express");
const app = express();
const cors = require("cors");
const orderRouter = require("./src/payment")


app.use(cors());
app.use(express.json());
app.use("/api/order", orderRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

//----------------deployment-----------------

// app.use(express.static(path.join(__dirname, "admin")));
// app.get("/admin", (req, res) => {
//   res.sendFile(path.join(__dirname, "admin", "index.html"));
// });


