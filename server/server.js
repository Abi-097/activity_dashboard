const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Customer = require("./models/customerPost");
const port = 4000;
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.post("/postDetails", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://root:1234@cluster0.hk1m2mf.mongodb.net/automed?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    console.log("Connected to MongoDb");
  })
  .catch((e) => {
    console.log(e);
  });
